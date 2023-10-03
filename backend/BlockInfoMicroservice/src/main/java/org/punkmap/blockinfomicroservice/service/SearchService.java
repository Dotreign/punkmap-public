package org.punkmap.blockinfomicroservice.service;

import org.punkmap.blockinfomicroservice.model.BlockEntity;
import org.punkmap.blockinfomicroservice.model.BusinessEntity;
import org.punkmap.blockinfomicroservice.model.SearchResponse;
import org.punkmap.blockinfomicroservice.repository.BlockRepo;
import org.punkmap.blockinfomicroservice.repository.BusinessRepo;
import org.punkmap.blockinfomicroservice.service.util.BlockMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SearchService {

    BlockRepo blockRepo;
    BusinessRepo businessRepo;
    BlockMapper blockMapper;

    @Autowired
    public SearchService(
            BlockRepo blockRepo,
            BusinessRepo businessRepo,
            BlockMapper blockMapper
    ) {
        this.blockRepo = blockRepo;
        this.businessRepo = businessRepo;
        this.blockMapper = blockMapper;
    }

    public List<SearchResponse> findAll(String searchLine) {
        try {
            List<SearchResponse> foundEntities = new ArrayList<>();
            if (searchLine.startsWith("\\d+")) {
                Integer searchingNumber = Integer.valueOf(searchLine);
                List<BlockEntity> blocks = blockRepo.findAllByBlockNumberStartingWith(searchingNumber);
                if (blocks.isEmpty()) {
                    throw new RuntimeException("Извините, но мы ничего не нашли");
                }
                List<SearchResponse> response = blockMapper.getSearchResponsesFromBlocks(blocks);
                foundEntities.addAll(response);
                return foundEntities;
            } else {
                List<BusinessEntity> foundBusinesses = businessRepo.findAllByTitleStartingWith(searchLine);
                List<BlockEntity> foundBlocks = blockRepo.findAllByBlockNameStartingWithIgnoreCase(searchLine);
                if (foundBlocks.isEmpty() && foundBusinesses.isEmpty()) {
                    throw new RuntimeException("Извините, но мы ничего не нашли");
                } else if (foundBlocks.isEmpty()) {
                    List<SearchResponse> businessesResponse = blockMapper.getSearchResponsesFromBusinesses(foundBusinesses);
                    foundEntities.addAll(businessesResponse);
                } else if (foundBusinesses.isEmpty()) {
                    List<SearchResponse> blocksResponse = blockMapper.getSearchResponsesFromBlocks(foundBlocks);
                    foundEntities.addAll(blocksResponse);
                } else {
                    List<SearchResponse> businessesResponse = blockMapper.getSearchResponsesFromBusinesses(foundBusinesses);
                    List<SearchResponse> blocksResponse = blockMapper.getSearchResponsesFromBlocks(foundBlocks);
                    foundEntities.addAll(businessesResponse);
                    foundEntities.addAll(blocksResponse);
                }
                return foundEntities;
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e.getMessage());
        }
    }

}
