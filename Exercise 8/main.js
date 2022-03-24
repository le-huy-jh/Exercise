const slideArr = [
  {
    imageSrc: "./assets/images/slide4.png",
    favorNum: 382,
    title: "BLISS TEXTURE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentNum: 374,
  },
  {
    imageSrc: "./assets/images/slide6.png",
    favorNum: 382,
    title: "DECAYED",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentNum: 374,
  },
  {
    imageSrc: "./assets/images/Rectangle 6.jpg",
    favorNum: 382,
    title: "BLISS TEXTURE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentNum: 374,
  },
  {
    imageSrc: "./assets/images/slide5.png",
    favorNum: 382,
    title: "DECAYED",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentNum: 374,
  },
];

const secondSlideArr = [
  {
    imageSrc: "./assets/images/slide4.png",
    favorNum: 382,
    title: "BLISS TEXTURE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentNum: 374,
  },
  {
    imageSrc: "./assets/images/slide3.png",
    favorNum: 382,
    title: "DECAYED",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentNum: 374,
  },
  {
    imageSrc: "./assets/images/slide2.png",
    favorNum: 382,
    title: "BLISS TEXTURE",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentNum: 374,
  },
  {
    imageSrc: "./assets/images/slide1.png",
    favorNum: 382,
    title: "DECAYED",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    commentNum: 374,
  },
];

const slideContainer = document.querySelectorAll(".slides");
const container = document.querySelectorAll(".carousel-container");
const nextBtn = document.querySelectorAll(".next");
const previousBtn = document.querySelectorAll(".previous");

const hamburgerBtn = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav ul");
const body = document.querySelector("body");

hamburgerBtn.onclick = () => {
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
    body.style.overflow = "auto";
  } else {
    nav.classList.add("active");
    body.style.overflow = "hidden";
  }
};

const currentSlide = {
  first: 0,
  second: 0,
};

let slideWidth = 0,
  slidePerScreen = 1,
  firstMousePosX = 0,
  secondMousePosX = 0;

const createSlideItems = () => {
  slideArr.forEach((slide) => {
    const html = `<div class="slide">
    <div class="top">
      <img src="${slide.imageSrc}" alt="" />
      <div class="favor">
        <img src="./assets/images/heart.svg" alt="" />
        <div>${slide.favorNum}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="card-header">
        <div>${slide.title}</div>
        <p>
        ${slide.content}
        </p>
      </div>
      <div class="card-footer">
        <div class="comment">
          <img src="./assets/images/comment.svg" alt="" />
          <div>${slide.commentNum} comments</div>
        </div>
        <div class="dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>`;

    slideContainer[0].innerHTML = slideContainer[0].innerHTML + html;
  });

  secondSlideArr.forEach((slide) => {
    const html = `<div class="slide">
    <div class="top">
      <img src="${slide.imageSrc}" alt="" />
      <div class="favor">
        <img src="./assets/images/heart.svg" alt="" />
        <div>${slide.favorNum}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="card-header">
        <div>${slide.title}</div>
        <p>
        ${slide.content}
        </p>
      </div>
      <div class="card-footer">
        <div class="comment">
          <img src="./assets/images/comment.svg" alt="" />
          <div>${slide.commentNum} comments</div>
        </div>
        <div class="dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>`;

    slideContainer[1].innerHTML = slideContainer[1].innerHTML + html;
  });
};

const makeSlide = () => {
  slideWidth = document.querySelector(".slide").offsetWidth + 40;
  slideContainer[0].style.width =
    Math.ceil(slideWidth * slideArr.length) + "px";
  slideContainer[1].style.width =
    Math.ceil(slideWidth * slideArr.length) + "px";

  slidePerScreen = Math.floor((window.innerWidth - 40) / slideWidth);
};

const moveSlidee = (container, currentSlide) => {
  container.style.marginLeft = slideWidth * -currentSlide + 40 + "px";
};

const goToNextSlide = (currentSlide, slideArray, slideContainer, index) => {
  if (slidePerScreen + currentSlide[index] > slideArray.length - 1) return;
  currentSlide[index]++
  moveSlidee(slideContainer, currentSlide[index]);
};

const goToPreviousSlide = (currentSlide, slideContainer, index) => {
  if(currentSlide[index] === 0) return;
  currentSlide[index]--
  moveSlidee(slideContainer, currentSlide[index]);
}

// first carousel controls
nextBtn[0].onclick = () => {
  goToNextSlide(currentSlide, slideArr, slideContainer[0], 'first');
};

// second carousel controls
nextBtn[1].onclick = () => {
  goToNextSlide(currentSlide, secondSlideArr, slideContainer[1], 'second');
};

previousBtn[0].onclick = () => {
  goToPreviousSlide(currentSlide, slideContainer[0], 'first')
};

previousBtn[1].onclick = () => {
  goToPreviousSlide(currentSlide, slideContainer[1], 'second')
};

slideContainer[0].onmousedown = (e) => {
  firstMousePosX = e.clientX;
};

slideContainer[1].onmousedown = (e) => {
  secondMousePosX = e.clientX;
};

slideContainer[0].onmouseup = (e) => {
  if (firstMousePosX > e.clientX) {
    goToNextSlide(currentSlide, slideArr, slideContainer[0], 'first');
  } else if (firstMousePosX < e.clientX) {
    goToPreviousSlide(currentSlide, slideContainer[0], 'first')
  }
};

slideContainer[1].onmouseup = (e) => {
  if (secondMousePosX > e.clientX) {
    goToNextSlide(currentSlide, slideArr, slideContainer[1], 'second');
  } else if (secondMousePosX < e.clientX) {
    goToPreviousSlide(currentSlide, slideContainer[1], 'second')
  }
};

// if(window.innerWidth < 1024) {
//   slideContainer.remove
// }

createSlideItems();
makeSlide();

window.onresize = () => {
  makeSlide();
};
