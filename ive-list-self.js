//titleのアニメーション
const list_title = document.querySelector('#list_title');

const keyframes = {
    //透明度
    opacity: [0, 1],
    //下から30px上に移動する
    translate: ['0 30px', 0],
};
const options = {
    //再生時間
    duration: 1000,
    //アニメーションの動き
    easing: 'ease-out',
};
  
list_title.animate(keyframes, options);

