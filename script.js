// Lightbox for images
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Open lightbox for images only
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close on outside click
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
});

// 🎥 Play video on hover
document.querySelectorAll(".video-post").forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0; // reset
  });
});
