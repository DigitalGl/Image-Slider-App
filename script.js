
const images = [
    "https://placehold.co/800x400?text=Slice+1",
    "https://placehold.co/800x400?text=Slice+2",
    "https://placehold.co/800x400?text=Slice+3",
    "https://placehold.co/800x400?text=Slice+4",
    "https://placehold.co/800x400?text=Slice+5",
];


const slider = document.querySelector("[data-slider]");
const prevBtn = document.querySelector("[data-btn-prev]");
const nextBtn = document.querySelector("[data-btn-next]");

let currentIndex = 0;


const setupSlider = () => {
    images.forEach((imageUrl, index) => {
        const img = document.createElement("img");
        img.classList.add('image');
        img.src = imageUrl;
        img.dataset.index = index;
        img.alt = `slide ${index + 1}`;

        slider.appendChild(img);
    })

    const firstClone = slider.firstElementChild.cloneNode(true);
    const lastClone = slider.lastElementChild.cloneNode(true);

    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slider.firstChild);
}

const initSlider = () => {
    const slideWidth = slider.firstElementChild.offsetWidth;
    slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;
}



const goToNextSlide = () => {
    const slideWidth = slider.firstElementChild.offsetWidth;

    currentIndex++;
    slider.style.transition = `translate 0.5s ease-in-out`;
    slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;

    if (currentIndex >= images.length) {
        nextBtn.disabled = true;
    }

    slider.addEventListener(
        "transitionend",
        () => {
            if (currentIndex >= images.length) {
                currentIndex = 0;
                slider.style.translition = "none;"
                slider.style.translate = `-${slideWidth * (currentIndex + 1)}px`;
                nextBtn.disabled = false;
            }
        },
        { once: true }
    )
}


nextBtn.addEventListener("click", goToNextSlide);


setupSlider();
initSlider();




