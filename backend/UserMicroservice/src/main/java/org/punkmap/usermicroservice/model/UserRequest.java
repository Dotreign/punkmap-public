package org.punkmap.usermicroservice.model;

import lombok.Data;

@Data
public class UserRequest {

    private String username;
    private String email;
    private String status;
    private Integer dormNumber;
    private Integer blockNumber;

}
