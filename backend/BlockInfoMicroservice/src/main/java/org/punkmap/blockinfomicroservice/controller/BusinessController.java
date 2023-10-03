package org.punkmap.blockinfomicroservice.controller;

import org.punkmap.blockinfomicroservice.model.BlockResponse;
import org.punkmap.blockinfomicroservice.model.BusinessEntity;
import org.punkmap.blockinfomicroservice.model.BusinessRequest;
import org.punkmap.blockinfomicroservice.model.BusinessResponse;
import org.punkmap.blockinfomicroservice.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/business")
public class BusinessController {

    BusinessService businessService;

    @Autowired
    public BusinessController(
            BusinessService businessService
    ) {
        this.businessService = businessService;
    }

    @GetMapping
    public ResponseEntity<?> getBusiness(@RequestBody BusinessRequest businessRequest) {
        try {
            BusinessResponse businessResponse = businessService.getBusiness(businessRequest);
            return new ResponseEntity<>(businessResponse, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping ("/email")
    public ResponseEntity<?> getBusinessByUserEmail(@RequestBody BusinessRequest businessRequest) {
        try {
            BusinessResponse businessResponse = businessService.getBusinessByUserEmail(businessRequest);
            return new ResponseEntity<>(businessResponse, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    public ResponseEntity<?> addBusiness(@RequestBody BusinessResponse business) {
        try {
            BusinessResponse businessResponse = businessService.createBusiness(business);
            return new ResponseEntity<>(businessResponse, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
