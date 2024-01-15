const buttonLeft = document.getElementById('slideLeft');
const buttonRight = document.getElementById('slideRight');

let px = document.getElementById('skillCard').offsetWidth + 48;


buttonLeft.onclick = function () {
    document.getElementById('scrollContainer').scrollLeft -= (document.getElementById('skillCard').offsetWidth + 48);
};
buttonRight.onclick = function () {
    document.getElementById('scrollContainer').scrollLeft += (document.getElementById('skillCard').offsetWidth + 48);
    // console.log('px', px);
    // console.log(document.getElementById('skillCard').offsetWidth);
};





