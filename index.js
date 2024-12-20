document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0; // 当前显示的图片索引
    const images = document.querySelectorAll('.carousel img'); // 获取所有轮播图图片
    const prevButton = document.querySelector('.carousel .prev'); // 获取上一张按钮
    const nextButton = document.querySelector('.carousel .next'); // 获取下一张按钮

    // 显示指定索引的图片
    function showImage(index) {
        images[currentIndex].style.display = 'none'; // 隐藏当前图片
        currentIndex = index; // 更新当前索引
        if (currentIndex < 0) {
            currentIndex = images.length - 1; // 如果索引小于0，则跳到最后一张图片
        } else if (currentIndex >= images.length) {
            currentIndex = 0; // 如果索引大于等于图片总数，则跳到第一张图片
        }
        images[currentIndex].style.display = 'block'; // 显示当前图片
    }

    // 上一张按钮点击事件
    prevButton.addEventListener('click', function() {
        showImage(currentIndex - 1); // 显示上一张图片
    });

    // 下一张按钮点击事件
    nextButton.addEventListener('click', function() {
        showImage(currentIndex + 1); // 显示下一张图片
    });

    // 设置定时器，每3秒自动切换图片
    setInterval(function() {
        showImage(currentIndex + 1); // 显示下一张图片
    }, 3000);
});
