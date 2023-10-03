package org.punkmap.blockinfomicroservice.service.util;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.punkmap.blockinfomicroservice.model.BlockEntity;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class BlockExtractor {

    public static List<BlockEntity> convertJsonToBlockEntity(String json) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode rootNode = objectMapper.readTree(json);

        List<BlockEntity> blockEntityDAOList = new ArrayList<>();

        rootNode.elements()
                .forEachRemaining(dormNode -> {
                    Integer dormNumber = dormNode.path("dorm_number").asInt();

                    dormNode.path("floors")
                            .elements()
                            .forEachRemaining(floorNode -> {
                                Integer floorNumber = floorNode.path("floor_number").asInt();

                                floorNode.path("blocks")
                                        .elements()
                                        .forEachRemaining(blockNode -> {
                                            Integer blockNumber = blockNode.path("block_number").asInt();
                                            String blockName = blockNode.path("block_name").asText();
                                            String blockInfo = blockNode.path("content").asText();

                                            BlockEntity blockEntityDAO = new BlockEntity();
                                            blockEntityDAO.setBlockNumber(blockNumber);
                                            blockEntityDAO.setFloorNumber(floorNumber);
                                            blockEntityDAO.setDormNumber(dormNumber);
                                            blockEntityDAO.setBlockName(blockName);
                                            blockEntityDAO.setBlockInfo(blockInfo);

                                            blockEntityDAOList.add(blockEntityDAO);
                                        });
                            });
                });

        return blockEntityDAOList;
    }

}
