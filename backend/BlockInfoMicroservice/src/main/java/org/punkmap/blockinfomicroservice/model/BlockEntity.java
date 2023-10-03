package org.punkmap.blockinfomicroservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class BlockEntity {

    @Id
    @GeneratedValue
    private Long id;
    private String blockInfo;
    private String blockName;
    private Integer blockNumber;
    private Integer floorNumber;
    private Integer dormNumber;
    private Long businessId;
}
