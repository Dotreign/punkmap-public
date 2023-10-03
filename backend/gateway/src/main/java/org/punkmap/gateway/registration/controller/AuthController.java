package org.punkmap.gateway.registration.controller;

import org.keycloak.representations.RefreshToken;
import org.punkmap.gateway.registration.model.LoginEntity;
import org.punkmap.gateway.registration.model.RefreshTokenModel;
import org.punkmap.gateway.registration.service.AuthorizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class AuthController {

    AuthorizationService authorizationService;

    @Autowired
    public AuthController(
            AuthorizationService authorizationService
    ) {
        this.authorizationService = authorizationService;
    }

    @PostMapping
    public ResponseEntity<?> login(@RequestBody LoginEntity credentials) {
        return authorizationService.login(credentials);
    }

    @GetMapping("/refresh")
    public ResponseEntity<?> refreshToken(@RequestBody RefreshTokenModel refreshToken) {
        return authorizationService.refresh(refreshToken);
    }

}
