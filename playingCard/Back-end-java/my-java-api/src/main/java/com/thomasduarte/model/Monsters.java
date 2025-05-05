package com.thomasduarte.model;

import java.lang.annotation.Inherited;
import javax.persistence.Id;

public class Monsters {
@Id 
private String monsterId;

@TextIndexed
private String monsterName;
}
