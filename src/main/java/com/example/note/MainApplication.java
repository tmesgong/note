package com.example.note;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.nio.file.Files;
import java.nio.file.Path;

@SpringBootApplication
public class MainApplication {
    public static void main(String[] args) {
        Path.of("/upload").toFile().mkdir();
        SpringApplication.run(MainApplication.class,args);
    }
}
