function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const photos = document.querySelectorAll('.photos img');
let currentPhotoIndex = 0;
let isTransitioning = false;
let animationPaused = false;
let firstClick = true; // 最初のクリックを追跡

shuffleArray(photos);

//写真をクリックしてスライドショーを一時停止
function pauseResumeAnimation() {
    if (!isTransitioning) { // アニメーションが実行中でない場合に実行
        animationPaused = !animationPaused; // アニメーションの一時停止/再開状態を切り替える
        photos[currentPhotoIndex].style.transition = 'transform 0.5s'; // アニメーションの速度を設定
        photos[currentPhotoIndex].style.transform = animationPaused ? 'scale(1)' : 'scale(1.2)'; // フォーカスの切り替え
    }
}



// 写真をクリックしてスライドショーを一時停止
photos.forEach((photo, index) => {
    const randomMargin = Math.floor(Math.random() * (100 - 20) + 20) + 'px';
    photo.style.marginBottom = randomMargin;
    photo.addEventListener('click', () => {
        photos.forEach(p => p.style.transform = 'scale(1)');
        photo.style.transform = 'scale(1.2)';
        currentPhotoIndex = index;
        pauseResumeAnimation(); // スライドショーを一時停止/再開
    });
});


function slidePhotos() {
    if (!isTransitioning) {
        isTransitioning = true;
        photos[currentPhotoIndex].style.transition = 'transform 0.5s';
        photos[currentPhotoIndex].style.transform = 'scale(1)';
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        photos[currentPhotoIndex].style.transition = 'none';
        photos[currentPhotoIndex].style.transform = 'scale(1.2)';
        setTimeout(() => {
            photos[currentPhotoIndex].style.transition = 'transform 0.5s';
            isTransitioning = false;
        }, 0);
    }
}

setInterval(() => {
    slidePhotos();
    if (currentPhotoIndex === 0) {
        photos[photos.length - 1].style.transition = 'none';
        photos[photos.length - 1].style.transform = 'scale(1.2)';
        setTimeout(() => {
            photos[photos.length - 1].style.transition = 'transform 0.5s';
        }, 0);
    }
}, 5000);
