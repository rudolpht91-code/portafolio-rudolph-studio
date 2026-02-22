document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;

    // --- Lógica para abrir/cerrar los modales de proyecto ---
    const galleryItems = document.querySelectorAll('.galeria-item');
    galleryItems.forEach(item => {
        const principalImage = item.querySelector('.imagen-principal');
        const modalId = principalImage.getAttribute('data-modal-id');
        const modal = document.getElementById(modalId);

        if (principalImage && modal) {
            principalImage.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('visible');
                body.style.overflow = 'hidden';
            });
        }
    });

    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.classList.remove('visible');
                body.style.overflow = 'auto';
            }
        });
    });

    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('visible');
                body.style.overflow = 'auto';
            }
        });
    });

    // --- NUEVA LÓGICA: Visor de imágenes a pantalla completa ---
    const imageViewer = document.getElementById('image-viewer');
    const viewerImage = imageViewer.querySelector('img');
    const detailImages = document.querySelectorAll('.modal-gallery-grid img');

    // Asignar evento a cada imagen de detalle
    detailImages.forEach(img => {
        img.style.cursor = 'pointer'; // Cambia el cursor para indicar que es clickeable
        img.addEventListener('click', () => {
            viewerImage.src = img.src; // Pone la imagen clickeada en el visor
            imageViewer.classList.add('visible'); // Muestra el visor
        });
    });

    // Ocultar el visor al hacer clic en él
    imageViewer.addEventListener('click', () => {
        imageViewer.classList.remove('visible');
    });
});
