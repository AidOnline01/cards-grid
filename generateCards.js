const faker = require('faker');
const fs = require('fs'); 

const cards = [];
for(let i = 0; i < 40; i++) {
  cards.push({
    id: i + 1,
    name: faker.name.findName()
  });
}

fs.writeFileSync(__dirname + '/store/content/cards.json', JSON.stringify(cards));