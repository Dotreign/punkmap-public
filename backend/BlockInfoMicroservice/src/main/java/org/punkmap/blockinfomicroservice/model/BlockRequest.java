package org.punkmap.blockinfomicroservice.model;

import jakarta.annotation.Nullable;
import lombok.Data;

@Data
public class BlockRequest {

    private Integer blockNumber;
    private Integer dormNumber;
    @Nullable
    private String blockName;
    @Nullable
    private String blockInfo;

}
