'use strict';
const number = Math.floor(Math.random() * 6);
const answer = parseInt(prompt('数当てゲーム。0〜5の数字を入力してね。'));

let message;
if(answer === number) {
  message = '当たり！';
}else if(answer > number) {
  message = 'もっと小さい数字だよ'
}else if(answer < number) {
  message = 'もっと大きい数字だよ'
}else {
  message = '0〜5の数字を入力してね'
}
alert(message);
