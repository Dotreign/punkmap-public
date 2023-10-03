package org.punkmap.blockinfomicroservice.model;

import lombok.Data;

@Data
public class BlockResponse {

    private String content;
    private String blockName;
    private Integer blockNumber;
    private Integer floorNumber;
    private Integer dormNumber;
    private Long businessId;

}
