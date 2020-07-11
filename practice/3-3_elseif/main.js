'use strict';
const answer = prompt('マニュアルを表示しますか？')
if(answer === 'yes') {
  alert('マニュアル起動中')
} else if(answer === 'no') {
  alert('ゲームを開始します')
} else {
  alert('yesかnoでお答えください')
}
