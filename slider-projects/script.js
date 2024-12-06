const nextIcon = document.querySelector('.next');
const prevIcon = document.querySelector('.prev');
const imageContainer = document.querySelector('.imageContainer');
const images = document.querySelectorAll('img');

let currentImg = 1;
let timeout;

prevIcon.addEventListener('click', () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

nextIcon.addEventListener('click', () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

function updateImg() {
  if (currentImg > images.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = images.length;
  }
  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 900}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

updateImg();
