import Character from '../сharacter';

test('Попытка создания персоонажа', () => {
  const name = 'Erika';
  const type = 'Swordsman';

  const expected = {
    name,
    type,
    health: 100,
    level: 1,
  };

  const recevied = new Character(name, type);

  expect(recevied).toEqual(expected);
});

test('Слишком короткое имя нового персоонажа', () => {
  const name = 'I';
  const type = 'Swordsman';

  expect(() => new Character(name, type)).toThrow(new Error('Имя персоонажа не может содержать менее двух и более десяти символов'));
});

test('Слишком длинное имя нового персоонажа', () => {
  const name = 'Kletziyklekudle';
  const type = 'Swordsman';

  expect(() => new Character(name, type)).toThrow(new Error('Имя персоонажа не может содержать менее двух и более десяти символов'));
});

test('Неверно введен тип нового персоонажа', () => {
  const name = 'Kira';
  const type = 'Swrd';

  expect(() => new Character(name, type)).toThrow(new Error(`Данный вид персоонажа ${type} не существует`));
});
