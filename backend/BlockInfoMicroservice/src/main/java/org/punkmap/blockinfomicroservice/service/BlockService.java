package org.punkmap.blockinfomicroservice.service;

import org.punkmap.blockinfomicroservice.model.BlockEntity;
import org.punkmap.blockinfomicroservice.model.BlockRequest;
import org.punkmap.blockinfomicroservice.model.BlockResponse;
import org.punkmap.blockinfomicroservice.repository.BlockRepo;
import org.punkmap.blockinfomicroservice.service.util.BlockExtractor;
import org.punkmap.blockinfomicroservice.service.util.BlockMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlockService {

    BlockRepo blockRepo;
    BlockMapper blockMapper;

    @Autowired
    public BlockService(
            BlockRepo blockRepo,
            BlockMapper blockMapper
            ) {
        this.blockRepo = blockRepo;
        this.blockMapper = blockMapper;
    }

    public ResponseEntity<?> parseBlocks(String blocks) {
        try {
            List<BlockEntity> blocksDAO = BlockExtractor.convertJsonToBlockEntity(blocks);
            blockRepo.saveAll(blocksDAO);
            return new ResponseEntity<>(blocksDAO, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    public BlockResponse getBlock(BlockRequest blockRequest) {
        try {
            Optional<BlockEntity> blockEntity = blockRepo.findByDormNumberAndBlockNumber(
                    blockRequest.getDormNumber(),
                    blockRequest.getBlockNumber()
            );
            if (blockEntity.isPresent()) {
                return blockMapper.getBlockResponseFromBlockEntity(blockEntity.get());
            } else {
                throw new RuntimeException("Block does not exist");
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

    public BlockResponse updateBlock(BlockRequest blockRequest) {
        try {
            Optional<BlockEntity> blockEntity = blockRepo.findByDormNumberAndBlockNumber(
                    blockRequest.getDormNumber(),
                    blockRequest.getBlockNumber()
            );
            if (blockEntity.isPresent()) {
                BlockEntity updatedBlock = blockEntity.get();
                updatedBlock.setBlockInfo(blockRequest.getBlockInfo());
                updatedBlock.setBlockName(blockRequest.getBlockName());
                blockRepo.save(updatedBlock);
                return blockMapper.getBlockResponseFromBlockEntity(updatedBlock);
            } else {
                throw new RuntimeException("Block does not exist");
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

}
