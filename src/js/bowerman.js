import Character from "./сharacter";

export default class Bowerman extends Character {
    constructor(...params) {
        super(...params);
        this.type = 'Bowman';
        this.attack = 25;
        this.defence = 25;
    }
};
