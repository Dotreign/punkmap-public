package org.punkmap.gateway.registration.model;

import lombok.Data;

@Data
public class UserEntityDTO {
    private Long id;
    private String name;
    private String email;
    private String password;
    private boolean isConfirmed = false;

}
