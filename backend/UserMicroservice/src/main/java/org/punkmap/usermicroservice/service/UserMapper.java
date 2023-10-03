package org.punkmap.usermicroservice.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.punkmap.usermicroservice.model.UserEntity;
import org.punkmap.usermicroservice.model.UserRequest;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    ObjectMapper objectMapper = new ObjectMapper();

    public UserEntity getUserFromRequest(UserRequest userRequest) {
        try{
            return objectMapper.convertValue(userRequest, UserEntity.class);
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());
        }

    }

}
