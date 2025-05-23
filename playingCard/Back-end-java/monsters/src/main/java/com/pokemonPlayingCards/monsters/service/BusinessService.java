package com.pokemonPlayingCards.monsters.service;

import org.springframework.stereotype.Component;

import com.pokemonPlayingCards.monsters.model.HelloWorld;

@Component
public class BusinessService {
    
public HelloWorld getHelloWorld(){
    final HelloWorld h1 = new HelloWorld();
    return h1;
}
}
