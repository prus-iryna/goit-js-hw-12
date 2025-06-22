import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const LoaderMore = document.querySelector('.js-load-more');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
  <a href="${largeImageURL}">
    <img loading="lazy" width="360" height=200px src="${webformatURL}" alt="${tags}">
  </a>
  <div class="info">
  <div class="row">
    <p>Likes</p>
    <p>Views</p>
    <p>Comments</p>
    <p>Downloads</p>
  </div>
  <div class=" value">
    <p>${likes}</p>
    <p>${views}</p>
    <p>${comments}</p>
    <p>${downloads}</p>
  </div>
</div>

  

</li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoader() {
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  LoaderMore.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  LoaderMore.classList.add('hidden');
}
