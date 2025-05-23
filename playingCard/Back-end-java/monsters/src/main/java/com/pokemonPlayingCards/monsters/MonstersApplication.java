package com.pokemonPlayingCards.monsters;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.pokemonPlayingCards.monsters.model.HelloWorld;
import com.pokemonPlayingCards.monsters.service.BusinessService;

@SpringBootApplication
public class MonstersApplication implements CommandLineRunner {
    @Autowired
    private BusinessService bs;
	public static void main(String[] args) {
		SpringApplication.run(MonstersApplication.class, args);
	}
	@Override
    public void run(String... args) throws Exception {
		HelloWorld hw = bs.getHelloWorld();  
    	System.out.println(hw);
    }
}
