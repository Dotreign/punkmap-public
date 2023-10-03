package org.punkmap.blockinfomicroservice.model;

import lombok.Data;

@Data
public class BusinessRequest {

    private String userEmail;
    private Integer dormNumber;
    private Integer blockNumber;

}
