import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const elements = {
  form: document.querySelector(".search-form"),
};

elements.form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();
  const search = evt.currentTarget.elements.searchQuery.value;
  Notify.failure(search);
}
