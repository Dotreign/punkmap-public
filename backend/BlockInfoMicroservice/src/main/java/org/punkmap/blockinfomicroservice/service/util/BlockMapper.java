package org.punkmap.blockinfomicroservice.service.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.punkmap.blockinfomicroservice.controller.SearchController;
import org.punkmap.blockinfomicroservice.model.BlockEntity;
import org.punkmap.blockinfomicroservice.model.BlockResponse;
import org.punkmap.blockinfomicroservice.model.BusinessEntity;
import org.punkmap.blockinfomicroservice.model.SearchResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class BlockMapper {

    public BlockResponse getBlockResponseFromBlockEntity(BlockEntity blockEntity) {
        try {
            BlockResponse blockResponse = new BlockResponse();
            blockResponse.setBlockNumber(blockEntity.getBlockNumber());
            blockResponse.setBlockName(blockEntity.getBlockName());
            blockResponse.setDormNumber(blockEntity.getDormNumber());
            blockResponse.setContent(blockEntity.getBlockInfo());
            blockResponse.setFloorNumber(blockEntity.getFloorNumber());
            blockResponse.setBusinessId(blockEntity.getBusinessId());
            return blockResponse;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    public List<SearchResponse> getSearchResponsesFromBlocks(List<BlockEntity> blocks) {
        try {
            List<SearchResponse> response = new ArrayList<>();
            for (BlockEntity block : blocks) {
                SearchResponse blockResponse = new SearchResponse();
                blockResponse.setTitle(block.getBlockName());
                blockResponse.setDormNumber(block.getDormNumber());
                blockResponse.setBlockNumber(block.getBlockNumber());
                response.add(blockResponse);
            }
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    public List<SearchResponse> getSearchResponsesFromBusinesses(List<BusinessEntity> businesses) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            List<SearchResponse> response = new ArrayList<>();
            for (BusinessEntity business : businesses) {
                SearchResponse blockResponse = new SearchResponse();
                blockResponse.setTitle(business.getTitle());
                blockResponse.setDormNumber(business.getDormNumber());
                blockResponse.setBlockNumber(business.getBlockNumber());
                response.add(blockResponse);
            }
            return response;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

}
