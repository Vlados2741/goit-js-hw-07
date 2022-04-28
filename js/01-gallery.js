import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
  gallery: document.querySelector(`.gallery`)
}

const createImagesList = galleryItems.map(image =>
    `<a class="gallery__link" href= "${image.original}">
    <img src="${image.preview}
    "alt="${image.description}"
    class="gallery__image"
    data-source="${image.original}">`).join("");
refs.gallery.insertAdjacentHTML("beforeend", createImagesList);

refs.gallery.addEventListener('click', onOpenLargeImg);
function onOpenLargeImg(e) {
  const isImage = e.target.classList.contains('gallery__image');
  if (!isImage) {
    return;
  }
    e.preventDefault();

    console.log(e.target.dataset.source)
  const largeImgLink = e.target.dataset.source;
    const instance = basicLightbox.create
        (`<img src="${largeImgLink}" alt="${e.target.alt}">`);
   
    const onCloseModalImage = e => {
        if (e.code === `Escape`) {
            instance.close();
        };
    };
    window.addEventListener(`keydown`, onCloseModalImage);
  instance.show();
}



