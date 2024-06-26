import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from './js/pixabay-api.js';
import { imageTamplate } from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');
const imageGallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

//----------------------------------

let imageName = '';

searchForm.addEventListener('input', (event) => {
  imageName = event.target.value.trim();
});

searchForm.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  showLoader();

    if (imageName === '') {
      iziToast.warning({
      position: 'topRight',
      timeout: 1800,
      maxWidth: 300,
      icon: 'none',
      message: 'Please enter a search query!',
    });
    hideLoader();
    return;
  }

  getImages(imageName)
  .then(data => {
      if (data.hits.length === 0) {
      imageGallery.innerHTML = '';
      return iziToast.error({ ...errorParams });
      }

      const markup = imageTamplate(data.hits);
      imageGallery.innerHTML = markup;
      lightbox.refresh();
    })
      .catch(error => {
      console.error(error);
      iziToast.error({
        position: 'topRight',
        timeout: 1800,
        maxWidth: 300,
        icon: 'none',
        message: 'An error occurred while fetching images. Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
    });
  return event.target.reset();
}



function showLoader() {
  loader.style.display = 'inline-block';
}

function hideLoader() {
  loader.style.display = 'none';
}



const errorParams = {
  position: 'topRight',
  timeout: 1800,
  maxWidth: 300,
  icon: 'none',
  message: 'Sorry, there are no images matching your search query. Please try again!',
}



let lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });