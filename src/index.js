import debounce from 'lodash.debounce';
import { handlerSubmit, handlerLoadMore } from './foo';

const elements = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};

elements.form.addEventListener('submit', handlerSubmit);
elements.loadMore.addEventListener('click', debounce(handlerLoadMore, 300));
