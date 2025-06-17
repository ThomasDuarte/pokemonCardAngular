package com.pokemonPlayingCards.model;

public class Monster {
    private String id;
    private String name;
    private String type;
    private String image;
    private int hp;
    private String figure_caption;
    private String attack_name;
    private int attack_strength;
    private String attack_description;

    // Constructeurs, getters, setters
    public Monster() {}

    public Monster(String id, String name, String type, String image, int hp, String figure_caption, String attack_name, int attack_strength, String attack_description) {
        this.id = id;
        this.name = name; 
        this.image = image;
        this.type = type;
        this.hp = hp;
        this.figure_caption  = figure_caption;
        this.attack_name = attack_name;
        this.attack_strength = attack_strength;
        this.attack_description = attack_description;
    }

    public String getId() { 
        return id; 
    }

    public void setId(String id) { 
        this.id = id; 
    }

    public String getName() { return name;
     }
    public void setName(String name) {
        this.name = name; 
    }

    public String getType() { 
        return type;
    }

    public void setType(String type) { 
        this.type = type;
     }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public String getFigure_caption() {
        return figure_caption;
    }

    public void setFigure_caption(String figure_caption) {
        this.figure_caption = figure_caption;
    }

    public String getAttack_name() {
        return attack_name;
    }

    public void setAttack_name(String attack_name) {
        this.attack_name = attack_name;
    }

    public int getAttack_strength() {
        return attack_strength;
    }

    public void setAttack_strength(int attack_strength) {
        this.attack_strength = attack_strength;
    }

    public String getAttack_description() {
        return attack_description;
    }

    public void setAttack_description(String attack_description) {
        this.attack_description = attack_description;
    }
    
}
