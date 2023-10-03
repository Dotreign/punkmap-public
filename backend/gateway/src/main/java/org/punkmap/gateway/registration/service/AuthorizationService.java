package org.punkmap.gateway.registration.service;

import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.representations.AccessTokenResponse;
import org.keycloak.representations.RefreshToken;
import org.punkmap.gateway.registration.model.LoginEntity;
import org.punkmap.gateway.registration.model.RefreshTokenModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class AuthorizationService {

    String serverUrl = "http://keycloak-service:8000/auth";
    String realm = "punkmap";
    String clientId = "punkmap-client";
    String clientSecret = "KbUCbidrEjiEsd1yzO2nZtFWqPA9jeNM";

    private final RestTemplate restTemplate = new RestTemplate();

    public ResponseEntity<?> login(LoginEntity credentials) {
        try {
            Keycloak keycloak = KeycloakBuilder.builder()
                    .serverUrl(serverUrl)
                    .realm(realm)
                    .clientId(clientId)
                    .clientSecret(clientSecret)
                    .username(credentials.getEmail())
                    .password(credentials.getPassword())
                    .grantType(OAuth2Constants.PASSWORD)
                    .build();
            AccessTokenResponse tokens = keycloak.tokenManager().getAccessToken();
            return new ResponseEntity<>(tokens, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<?> refresh(RefreshTokenModel refreshToken) {
        try {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

            MultiValueMap<String, String> parameters = new LinkedMultiValueMap<>();
            parameters.add("grant_type", "refresh_token");
            parameters.add("client_id", clientId);
            parameters.add("client_secret", clientSecret);
            parameters.add("refresh_token", refreshToken.getRefresh_token());

            HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(parameters, headers);

            return new ResponseEntity<>(restTemplate.exchange(getAuthUrl(),
                    HttpMethod.POST,
                    entity,
                    AccessTokenResponse.class).getBody(), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(refreshToken);
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    private String getAuthUrl() {
        return UriComponentsBuilder.fromHttpUrl(serverUrl)
                .pathSegment("realms")
                .pathSegment(realm)
                .pathSegment("protocol")
                .pathSegment("openid-connect")
                .pathSegment("token")
                .toUriString();
    }

}
