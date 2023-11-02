import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const elements = {
  form: document.querySelector(".search-form"),
  gallery: document.querySelector(".gallery"),
  loadMore: document.querySelector(".load-more"),
};

const gallerySimple = new SimpleLightbox(".gallery a");
let inputText = "";
let page = 1;

elements.form.addEventListener("submit", handlerSubmit);
elements.loadMore.addEventListener("click", handlerLoadMore);

async function handlerSubmit(evt) {
  evt.preventDefault();
  elements.gallery.innerHTML = "";

  inputText = evt.target.elements.searchQuery.value.trim();

  if (inputText === "") {
    return Notify.failure("Please, enter your request");
  }

  try {
    elements.loadMore.hidden = true;

    const resp = await getArrPictures(inputText, page);

    if (resp.data.hits.length < 1) {
      return Notify.failure(
        "Sorry, there are no images matching your search query. Please try again."
      );
    }
    Notify.info(`Hooray! We found ${resp.data.totalHits} images.`);

    elements.gallery.insertAdjacentHTML(
      "beforeend",
      createMarkup(resp.data.hits)
    );
    gallerySimple.refresh();

    elements.loadMore.hidden = false;
  } catch (err) {
    Notify.failure(
      "Sorry, there are no images matching your search query. Please try again."
    );
  } finally {
    evt.target.reset();
  }
}

async function handlerLoadMore() {
  page += 1;

  try {
    const resp = await getArrPictures(inputText, page);

    elements.gallery.insertAdjacentHTML(
      "beforeend",
      createMarkup(resp.data.hits)
    );
    gallerySimple.refresh();

    if (page >= 12) {
      elements.loadMore.hidden = true;
    }
  } catch (err) {
    Notify.failure(
      "Sorry, there are no images matching your search query. Please try again."
    );
  }
}

async function getArrPictures(search, page) {
  const BASE_URL = "https://pixabay.com/api/?";
  const API_KEY = "40431810-f7dd8042cda962dd110bb8ea1";
  const options = {
    params: {
      key: API_KEY,
      q: search,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      per_page: 40,
      page,
    },
  };
  return (resp = await axios.get(BASE_URL, options));
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="photo-card">
        <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${likes}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${views}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${downloads}
          </p>
        </div>
      </li>`
    )
    .join("");
}
