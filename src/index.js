import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const elements = {
  form: document.querySelector(".search-form"),
  gallery: document.querySelector(".gallery"),
  loadMore: document.querySelector(".load-more"),
};
let inputText = "";
let page = 1;
elements.form.addEventListener("submit", handlerSubmit);

async function handlerSubmit(evt) {
  evt.preventDefault();
  elements.gallery.innerHTML = "";

  inputText = evt.target.elements.searchQuery.value.trim();

  if (inputText === "") {
    return Notify.failure("Please, enter your request");
  }

  try {
    const resp = await getArrPictures(inputText, page);
    elements.gallery.insertAdjacentHTML(
      "beforeend",
      createMarkup(resp.data.hits)
    );
  } catch (err) {
    console.error(err);
    // Notify.failure(
    //   "Sorry, there are no images matching your search query. Please try again."
    // );
  } finally {
    evt.target.reset();
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
      ({ userImageURL, tags, likes, views, comments, downloads }) =>
        `<div class="photo-card">
        <img src="${userImageURL}" alt="${tags}" loading="lazy" />
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
      </div>`
    )
    .join("");
}
