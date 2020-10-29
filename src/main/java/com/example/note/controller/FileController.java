package com.example.note.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.nio.file.Path;

//@RestController
//@RequestMapping("/files")
public class FileController {
    @Value("${spring.servlet.multipart.location}")
    private  String uploadFileLocation;
    @PostMapping
    void saveFile(@RequestParam("key") String key,
                  @RequestParam("file") MultipartFile file, HttpServletRequest request){
        if(!file.isEmpty()){
            try {
                file.transferTo(Path.of(uploadFileLocation, key));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

}
