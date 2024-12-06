const sliderEndpoint = 'https://picsum.photos/v2/list';
const nextIcon = document.querySelector('.next');
const prevIcon = document.querySelector('.prev');
const imageContainer = document.querySelector('.imageContainer');

let currentImg = 1;
let timeout;

function fetchAndDisplayImages() {
  fetch(sliderEndpoint)
    .then((response) => response.json())
    .then((data) => {
      data.slice(25, 35).forEach((item) => {
        const imgElement = document.createElement('img');
        imgElement.src = item.download_url;
        imgElement.alt = item.author;
        imageContainer.appendChild(imgElement);
      });

      updateImg();
    })
    .catch((error) => {
      console.error('Resimler yüklenirken bir hata oluştu:', error);
    });
}

function updateImg() {
  const images = document.querySelectorAll('.imageContainer img');

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

fetchAndDisplayImages();
