'use strict';

let todo = ['デザインカンプ作成', 'データ作成', '勉強会申し込み', '牛乳買う'];
todo.push('歯医者に行く');
for(let item of todo) {
  const li = `<li>${item}</li>`;
  document.querySelector('#list').insertAdjacentHTML('beforeend', li);
}