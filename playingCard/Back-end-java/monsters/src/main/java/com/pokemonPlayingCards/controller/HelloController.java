package com.pokemonPlayingCards.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello depuis ton API Spring Boot !";
    }

    @GetMapping("/api/test")
    public String test() {
        return "TEST TEST TEST !";
    }
}
