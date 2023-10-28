const trailers = document.querySelectorAll(".trailer");
const videoPopup = document.querySelector(".video-popup");
const videoContainer = videoPopup.querySelector("iframe");
const closeButton = document.querySelector(".video-popup__btn");
const characters = document.querySelectorAll(".character-container");

function showVideoPopup(videoId) {
  videoContainer.src = `https://www.youtube.com/embed/${videoId}`;

  videoPopup.style.display = "flex";

  document.body.style.overflow = "hidden";
}

function hideVideoPopup() {
  videoPopup.style.display = "none";

  videoContainer.src = "";

  document.body.style.overflow = "auto";
}

trailers.forEach((trailer) => {
  trailer.addEventListener("click", () => {
    const videoId = trailer.getAttribute("video-id");
    showVideoPopup(videoId);
  });
});

closeButton.addEventListener("click", () => {
  hideVideoPopup();
});

videoPopup.addEventListener("click", (event) => {
  if (event.target === videoPopup) {
    hideVideoPopup();
  }
});

var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  // freeMode: true,
  // freeModeSticky: true,
  keyboard: {
    enabled: true,
  },
});

characters.forEach((character, index) => {
  character.addEventListener("click", () => {
    if (character.classList.contains("active")) {
      character.classList.remove("active");
      const wh = window.innerHeight;
      if (wh > 1200) {
        swiper.slideTo(index - 2);
      } else {
        swiper.slideTo(index - 1);
      }

      return false;
    } else {
      characters.forEach((c) => c.classList.remove("active"));
      character.classList.add("active");
    }

    setTimeout(() => {
      swiper.update();
      swiper.slideTo(index);
    }, 500);
  });
});
