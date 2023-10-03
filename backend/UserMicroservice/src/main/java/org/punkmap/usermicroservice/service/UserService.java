package org.punkmap.usermicroservice.service;

import org.punkmap.usermicroservice.model.UserEntity;
import org.punkmap.usermicroservice.model.UserRequest;
import org.punkmap.usermicroservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    UserRepository userRepository;
    UserMapper userMapper;

    @Autowired
    public UserService(
            UserRepository userRepository,
            UserMapper userMapper
    ) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public UserEntity getUser(String username) {
        try {
            Optional<UserEntity> user = userRepository.findUserByUsername(username);
            if (user.isPresent()) {
                return user.get();
            }
            throw new RuntimeException("User does not exist");
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public UserEntity createUser(UserRequest user) {
        try {
            boolean isExistsByUsername = userRepository.existsByUsername(user.getUsername());
            boolean isExistsByEmail = userRepository.existsByEmail(user.getEmail());
            if (!isExistsByEmail && !isExistsByUsername) {
                return userMapper.getUserFromRequest(user);
            } else if (isExistsByEmail) {
                throw new RuntimeException("Email already registered!");
            }
            throw new RuntimeException("Username already registered!");
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public UserEntity updateUser(UserRequest user) {
        try {
            Optional<UserEntity> currentOptionalUser = userRepository.findUserByUsernameAndEmail(user.getUsername(), user.getEmail());
            if (currentOptionalUser.isPresent()) {
                UserEntity currentUser = UserEntity
                                .builder()
                                .email(user.getEmail())
                                .username(user.getUsername())
                                .id(currentOptionalUser.get().getId())
                                .status(user.getStatus())
                                .dormNumber(user.getDormNumber())
                                .blockNumber(user.getBlockNumber())
                                .build();
                userRepository.save(currentUser);
                return currentUser;
            }
            throw new RuntimeException("User does not exist");
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

}
