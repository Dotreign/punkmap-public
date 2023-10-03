package org.punkmap.gateway.registration.controller;

import org.punkmap.gateway.registration.model.UserEntityDTO;
import org.punkmap.gateway.registration.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/register")
public class RegistrationController {

    RegistrationService registrationService;

    @Autowired
    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping("")
    public ResponseEntity<?> register(@RequestBody UserEntityDTO userEntityDTO) {
        return registrationService.register(userEntityDTO);
    }

    @GetMapping("/confirmation/{confirmationCode}")
    public ResponseEntity<?> confirmAndCompleteRegistration(@PathVariable String confirmationCode) {
        return registrationService.confirmUser(confirmationCode);
    }

}
