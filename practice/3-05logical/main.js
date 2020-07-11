'use strict';
const hour = new Date().getHours();
let message;

if(hour >= 19 && hour <=21) {
  message = 'お弁当30%OFF!'
}else if(hour === 9 || hour ===15) {
  message = 'お弁当1個買ったら1個おまけ！'
}else {
  message = 'お弁当はいかがですか'
}
alert(message);
