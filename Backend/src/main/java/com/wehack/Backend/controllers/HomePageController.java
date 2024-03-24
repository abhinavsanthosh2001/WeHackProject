package com.wehack.Backend.controllers;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/*
* 1. majors
* 2. sub streams
*
* */
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/books")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class HomePageController {
//    @PutMapping("/secure/return")
//    public void returnMajors( ) throws Exception {
//        majorservice.returnAllMajors();
//    }

}
