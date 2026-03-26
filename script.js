function nextSlide(current, next) {
  document.getElementById(current).classList.add("hidden");
  document.getElementById(next).classList.remove("hidden");
}

// Start click
document.getElementById("startScreen").addEventListener("click", function () {

  let music = document.getElementById("bgMusic");
  music.play();

  let text = document.getElementById("startText");
  let countEl = document.getElementById("countdown");

  text.style.display = "none";

  let count = 3;

  let interval = setInterval(() => {
    countEl.innerHTML = count;
    count--;

    if (count < 0) {
      clearInterval(interval);
      this.style.display = "none";

      let cover = document.querySelector(".cover");

      setTimeout(() => cover.classList.add("open"), 200);
      setTimeout(() => nextSlide("slide1", "slide2"), 3000);
    }

  }, 800);
});
// 🎈 Balloons
function createBalloons() {
  let emojis = ["🎈","🎉","💖"];

  for (let i = 0; i < 15; i++) {
    let b = document.createElement("div");
    b.className = "balloon";

    b.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    b.style.left = Math.random() * 100 + "vw";
    b.style.fontSize = (20 + Math.random()*25) + "px";

    document.body.appendChild(b);

    setTimeout(() => b.remove(), 5000);
  }
}
// Cake
function cutCake() {
  createBalloons();

  setTimeout(() => {
    nextSlide("slide2", "slide3");
    startSlideshow();
  }, 1000);
}

// Images + Text
let images = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg"
];

let texts = [
  "Some memories just stay forever ✨",
  "That day was really special 😊",
  "Moments like these matter the most ❤️",
  "Some smiles just stay in mind forever 😊",
  "Every moment with you feels a little better ✨",
  "Simple moments… but they mean a lot ❤️",
  "I feel lucky to have you in my life ✨"
];

let index = 0;

function startSlideshow() {
  let img = document.getElementById("slideshow");
  let text = document.getElementById("photoText");

  text.innerHTML = texts[0];

  let interval = setInterval(() => {
    index++;

    if (index >= images.length) {
      clearInterval(interval);
      nextSlide("slide3", "slide4");
      typeMessage();
      startHearts();
      startSparkles(); // ✨ sparkle effect
      fadeOutMusic();  // 🎵 smooth music end
    } else {
      img.style.animation = "none";
      void img.offsetWidth;
      img.style.animation = "zoomFade 2s ease";

      img.src = images[index];
      text.innerHTML = texts[index];
    }

  }, 2000);
}

// Message
let message = "Happy Birthday, to my favorite person 🎂\n\nI hope your day is filled with happiness 😊\nYou are truly a special person,\nand I’m really glad I got to know you ✨\n I feel lucky to have you in my life ✨" ;
message = message.replace(
  "my favorite person",
  "<span class='name'>my favorite person</span>"
);

message = message.replace(
  "I feel lucky to have you in my life ✨",
  "<span class='highlight'>I feel lucky to have you in my life ✨</span>"
);
function typeMessage() {
  let i = 0;
  let el = document.getElementById("typeText");

  function typing() {
    if (i <= message.length) {
      el.innerHTML = message.substring(0, i);
      i++;
      setTimeout(typing, 40);
    }
  }

  typing();
}


// Hearts
function startHearts() {
  setInterval(() => {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);

    setTimeout(() => h.remove(), 5000);
  }, 300);
}
function startSparkles() {
  setInterval(() => {
    let s = document.createElement("div");
    s.className = "sparkle";
    s.innerHTML = "✨";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";

    document.body.appendChild(s);

    setTimeout(() => s.remove(), 2000);
  }, 300);
}

function fadeOutMusic() {
  let music = document.getElementById("bgMusic");
  let vol = music.volume;

  let fade = setInterval(() => {
    if (vol > 0) {
      vol -= 0.05;
      music.volume = vol;
    } else {
      clearInterval(fade);
      music.pause();
    }
  }, 200);
}