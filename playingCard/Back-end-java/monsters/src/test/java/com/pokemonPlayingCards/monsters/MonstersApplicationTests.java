package com.pokemonPlayingCards.monsters;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.pokemonPlayingCards.monsters.service.BusinessService;

@SpringBootTest
class MonstersApplicationTests {

    @Autowired
    private BusinessService bs;

    @Test
    void contextLoads() {
    }

    @Test
    public void testGetHelloWorld() {

        String expected = "Hello World!";

        String result = bs.getHelloWorld().getValue();

        assertEquals(expected, result);
    }

}
