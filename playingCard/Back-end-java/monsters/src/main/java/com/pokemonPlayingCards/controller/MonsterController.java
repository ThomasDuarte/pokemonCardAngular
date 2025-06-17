package com.pokemonPlayingCards.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pokemonPlayingCards.model.Monster;
import com.pokemonPlayingCards.service.MonsterService;

@RestController
@RequestMapping("/api/monsters")
public class MonsterController {

    private final MonsterService service;

    public MonsterController(MonsterService service) {
        this.service = service;
    }

    @GetMapping
    public String index() {
        return "Nous sommes sur la home page !";
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getMonsterById(@PathVariable String id){
        Monster monster= service.getById(id);
        if(monster != null){
            return ResponseEntity.ok(monster);
        }else{
            return ResponseEntity.status(404).body("Monster not found.");
        }
    }
    

}
