export default class Character {
  constructor(name = ' ', type = ' ', health = 100, level = 1) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персоонажа не может содержать менее двух и более десяти символов');
    } else {
      this.name = name;
      // name = /{2,10}/;
      // Можно ли с помощью регулярных выражений указать длинну строки в консрукторе ?
    }
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error(`Данный вид персоонажа ${type} не существует`);
    } else {
      this.type = type;
    }

    this.health = health;
    this.level = level;
  }
}
