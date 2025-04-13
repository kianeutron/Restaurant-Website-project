var mainImage = document.getElementById('main-image');
var thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
        mainImage.src = this.src;
        mainImage.alt = this.alt;
    });
});
