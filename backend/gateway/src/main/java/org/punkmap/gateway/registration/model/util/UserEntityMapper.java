package org.punkmap.gateway.registration.model.util;

import org.modelmapper.ModelMapper;
import org.punkmap.gateway.registration.model.UserEntityDTO;
import org.punkmap.gateway.registration.model.UserEntityDAO;
import org.springframework.stereotype.Component;

@Component
public class UserEntityMapper {

    private static ModelMapper modelMapper = new ModelMapper();

    public UserEntityDTO toDTO(UserEntityDAO userEntityDAO) {
        return modelMapper.map(userEntityDAO, UserEntityDTO.class);
    }

    public UserEntityDAO toDAO(UserEntityDTO userEntityDTO) {
        return modelMapper.map(userEntityDTO, UserEntityDAO.class);
    }

}
