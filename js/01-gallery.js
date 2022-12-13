import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

const createImageMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
  })
  .join('');
galleryContainer.insertAdjacentHTML('beforeend', createImageMarkup);
galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`
  );
  instance.show();
});
// gallery.addEventListener('keydown', (event) => {
//   if (event.key === 'Escape') {
//     instance.close();
//   }
// });
