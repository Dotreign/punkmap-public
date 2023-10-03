package org.punkmap.gateway.registration.service;

import lombok.RequiredArgsConstructor;
import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.representations.idm.UserRepresentation;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class KeycloakRegistration {

    String serverUrl = "http://keycloak-service:8000/auth";
    String realm = "punkmap";
    String clientId = "admin-cli";
    String clientSecret = "9u9oSKumePJWu08gpvW9jPiC4dx6lzJq";

    public void registerUser(String email, String password) {

        Keycloak keycloak = KeycloakBuilder.builder()
                .serverUrl(serverUrl)
                .realm("master")
                .clientId("admin-cli")
                .username(clientId)
                .clientSecret(clientSecret)
                .grantType(OAuth2Constants.CLIENT_CREDENTIALS)
                .build();

        UserRepresentation user = new UserRepresentation();
        user.setEmail(email);
        user.setUsername(email);
        user.setEnabled(true);

        keycloak.realm(realm).users().create(user);

        UserRepresentation userRepresentation = keycloak.realm(realm).users().search(email).get(0);
        keycloak.realm(realm).users().get(userRepresentation.getId()).resetPassword(createPasswordRepresentation(password));

        keycloak.close();

    }

    private CredentialRepresentation createPasswordRepresentation(String password) {
        CredentialRepresentation passwordRep = new CredentialRepresentation();
        passwordRep.setTemporary(false);
        passwordRep.setType(CredentialRepresentation.PASSWORD);
        passwordRep.setValue(password);
        return passwordRep;
    }


}
