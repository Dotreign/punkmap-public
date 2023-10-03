package org.punkmap.blockinfomicroservice.controller;

import org.punkmap.blockinfomicroservice.model.SearchResponse;
import org.punkmap.blockinfomicroservice.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/search")
public class SearchController {

    SearchService searchService;

    @Autowired
    public SearchController(
            SearchService searchService
    ) {
        this.searchService = searchService;
    }

    @GetMapping("{searchLine}")
    public ResponseEntity<?> searchBlock(@PathVariable String searchLine) {
        try {
            List<SearchResponse> foundEntities = searchService.findAll(searchLine);
            return new ResponseEntity<>(foundEntities, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
