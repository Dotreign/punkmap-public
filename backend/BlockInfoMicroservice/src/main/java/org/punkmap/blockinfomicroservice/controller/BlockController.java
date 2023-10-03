package org.punkmap.blockinfomicroservice.controller;

import com.netflix.appinfo.ApplicationInfoManager;
import org.punkmap.blockinfomicroservice.model.BlockRequest;
import org.punkmap.blockinfomicroservice.model.BlockResponse;
import org.punkmap.blockinfomicroservice.service.BlockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/block")
public class BlockController {

    private final ApplicationInfoManager applicationInfoManager;

    BlockService blockService;

    @Autowired
    public BlockController(BlockService blockService, ApplicationInfoManager applicationInfoManager) {
        this.blockService = blockService;
        this.applicationInfoManager = applicationInfoManager;
    }

    @PostMapping("/add-blocks")
    public ResponseEntity<?> addBlocks(@RequestBody String blocks) {
        return blockService.parseBlocks(blocks);
    }

    @GetMapping
    public ResponseEntity<?> getBlock(@RequestBody BlockRequest blockRequest) {
        System.out.println(blockRequest);
        try {
            BlockResponse blockResponse = blockService.getBlock(blockRequest);
            return new ResponseEntity<>(blockResponse, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping
    public ResponseEntity<?> updateBlock(@RequestBody BlockRequest blockRequest) {
        try {
            BlockResponse blockResponse = blockService.updateBlock(blockRequest);
            return new ResponseEntity<>(blockResponse, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/public-message")
    public String getPublicTestInfo() {
        return "Hello, public, from " + applicationInfoManager.getInfo();
    }

    @GetMapping("/student-message")
    public String getStudentTestInfo() {
        return "Hello, student, from " + applicationInfoManager.getInfo();
    }

    @GetMapping("/admin-message")
    public String getAdminTestInfo() {
        return "Hello, admin, from " + applicationInfoManager.getInfo();
    }

}
