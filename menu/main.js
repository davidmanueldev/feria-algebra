document.addEventListener('DOMContentLoaded', () => {
    let listElements = document.querySelectorAll('.list__button--click');

    listElements.forEach(listElement => {
        listElement.addEventListener('click', () => {
            listElement.classList.toggle('arrow');

            let height = 0;
            let menu = listElement.nextElementSibling;
            if (menu.clientHeight === 0) {
                height = menu.scrollHeight;
            }
            menu.style.height = `${height}px`;
        });
    });

    document.querySelectorAll('.list__button, .nav__link--inside').forEach(item => {
        item.addEventListener('mouseover', event => {
            const image = event.currentTarget.getAttribute('data-image');
            const displayImage = document.getElementById('displayImage');
            if (image) {
                displayImage.src = image;
            }
        });
    });

    // Cambiado el evento 'mouseleave' para que la imagen vuelva siempre a imagesMenu\inicioImagen.jpg
    document.querySelector('.nav').addEventListener('mouseleave', () => {
        const displayImage = document.getElementById('displayImage');
        displayImage.src = 'imagesMenu/inicioImagen.jpg';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('imageContainer');
    const width = imageContainer.offsetWidth;
    const height = imageContainer.offsetHeight;
    console.log("Ancho del contenedor de imagen:", width, "px");
    console.log("Alto del contenedor de imagen:", height, "px");

    // Aquí puedes utilizar 'width' y 'height' para buscar imágenes de acuerdo a ese tamaño
});
