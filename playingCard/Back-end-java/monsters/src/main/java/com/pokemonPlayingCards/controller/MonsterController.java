package com.pokemonPlayingCards.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public List<Monster> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Monster create(@RequestBody Monster monster) {
        return service.addMonster(monster);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Monster> getById(@PathVariable String id) {
        Monster monster = service.getById(id);
        return (monster != null) ?
                ResponseEntity.ok(monster) :
                ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        boolean deleted = service.deleteById(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
