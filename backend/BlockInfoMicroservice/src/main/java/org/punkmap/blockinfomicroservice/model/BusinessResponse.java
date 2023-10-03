package org.punkmap.blockinfomicroservice.model;

import lombok.Data;

@Data
public class BusinessResponse {

    private String title;
    private String content;
    private Long userId;
    private Integer dormNumber;
    private Integer blockNumber;

}
