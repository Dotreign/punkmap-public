package org.punkmap.gateway.registration.service;

import org.punkmap.gateway.registration.model.UserEntityDAO;
import org.punkmap.gateway.registration.model.UserEntityDTO;
import org.punkmap.gateway.registration.model.util.UserEntityMapper;
import org.punkmap.gateway.registration.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.Random;
import java.util.UUID;

@Service
public class RegistrationService {

    UserRepository userRepository;
    UserEntityMapper userEntityMapper;
    EmailSender emailSender;
    KeycloakRegistration keycloakRegistration;

    @Autowired
    public RegistrationService(UserRepository userRepository,
                               UserEntityMapper userEntityMapper,
                               EmailSender emailSender,
                               KeycloakRegistration keycloakRegistration
    ) {
        this.userRepository = userRepository;
        this.userEntityMapper = userEntityMapper;
        this.emailSender = emailSender;
        this.keycloakRegistration = keycloakRegistration;
    }

    public ResponseEntity<?> register(UserEntityDTO userEntityDTO) {
        if (userRepository.existsByEmail(userEntityDTO.getEmail())) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        } else {
            UserEntityDAO userDAO = userEntityMapper.toDAO(userEntityDTO);
            UUID randomUUID = UUID.randomUUID();
            String generatedString = randomUUID.toString();
            emailSender.sendConfirmationEmail(generatedString, userDAO.getEmail());
            userDAO.setConfirmationCode(generatedString);
            userRepository.save(userDAO);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }
    }

    public ResponseEntity<?> confirmUser(String confirmationCode) {
        if (!userRepository.existsByConfirmationCode(confirmationCode)) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            UserEntityDAO user = userRepository.findFirstByConfirmationCode(confirmationCode);
            user.setIsConfirmed(true);
            try {
                keycloakRegistration.registerUser(user.getEmail(), user.getPassword());
            } catch (Exception e) {
                e.printStackTrace();
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
            userRepository.save(user);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

}
