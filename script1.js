const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementsByClassName("close")[0];
const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0; 

galleryItems.forEach((item, index) => {
    item.addEventListener('click', event => {
        currentIndex = index; 
        modal.style.display = "block";
        modalImg.src = event.target.src;
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function changeImage(direction) {
    currentIndex += direction; 
    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1; 
    } else if (currentIndex >= galleryItems.length) {
        currentIndex = 0; 
    }
    modalImg.src = galleryItems[currentIndex].src; 
}


document.addEventListener('keydown', event => {
    if (modal.style.display === "block") {
        if (event.key === "ArrowRight") {
            changeImage(1); 
        } else if (event.key === "ArrowLeft") {
            changeImage(-1); 
        } else if (event.key === "Escape") {
            modal.style.display = "none"; 
        }
    }
});


modal.addEventListener('swiped-left', () => {
    changeImage(1);
});

modal.addEventListener('swiped-right', () => {
    changeImage(-1);
});


let touchstartX = 0;
let touchendX = 0;

const checkSwipe = () => {
    if (touchendX < touchstartX) {
        changeImage(1); 
    }
    if (touchendX > touchstartX) {
        changeImage(-1);
    }
};

modal.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

modal.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    checkSwipe();
});
