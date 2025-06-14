package com.pokemonPlayingCards.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.pokemonPlayingCards.model.Monster;

@Service
public class MonsterService {

    private final List<Monster> monsters = new ArrayList<>();

    public List<Monster> getAll() {
        return monsters;
    }

    public Monster addMonster(Monster monster) {
        monster.setId(UUID.randomUUID().toString());
        monsters.add(monster);
        return monster;
    }

    public Monster getById(String id) {
        return monsters.stream()
            .filter(m -> m.getId().equals(id))
            .findFirst()
            .orElse(null);
    }

    public boolean deleteById(String id) {
        return monsters.removeIf(m -> m.getId().equals(id));
    }
}
