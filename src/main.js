import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const input = form.querySelector('input[name="search-text"]');
const LoadeMore = document.querySelector('.js-load-more');
let page = 1;
let query = '';
const imgPer_Page = 15;
hideLoadMoreButton();
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  query = input.value.trim();
  if (query === '') {
    iziToast.warning({
      message: 'Please enter a search term before submitting.',
      position: 'topRight',
    });
    return;
  }
  input.value = '';
  clearGallery();
  page = 1;
  showLoadMoreButton();
  showLoader();
  try {
    const data = await getImagesByQuery(query, page);
    hideLoader();
    hideLoadMoreButton();
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    createGallery(data.hits);
    if (data.totalHits > page * imgPer_Page) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Failed to load images.Please try again.',
      position: 'topRight',
    });
    hideLoader();
  }
}
LoadeMore.addEventListener('click', handleClick);
async function handleClick() {
  page += 1;

  hideLoadMoreButton();
  showLoader();
  try {
    const data = await getImagesByQuery(query, page);
    hideLoader();
    createGallery(data.hits);
    const totalLoader = page * imgPer_Page;
    if (totalLoader >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: 'You have reached the end of the results',
      });
    } else {
      showLoadMoreButton();
    }
    const card = document.querySelector('.gallery-item');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: 'Failed to load more images.',
      position: 'topRight',
    });
  }
}
