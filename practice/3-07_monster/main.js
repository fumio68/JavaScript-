'use strict';
let monster = 100;
let count = 0;
alert('戦闘開始！');

while(monster > 0) {
  const attack = Math.floor(Math.random() * 30) + 1;
  console.log(`モンスターに${attack}のダメージ！`);
  monster -= attack;
  count ++;
}

console.log('モンスターを倒した！');
console.log(`${count}回でモンスターを倒した`);
