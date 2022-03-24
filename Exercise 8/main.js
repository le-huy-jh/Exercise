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

let currSlide = 0,
  slideWidth = 0,
  slidePerScreen = 1,
  secondCurrSlide = 0;

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
}

// first carousel controls
nextBtn[0].onclick = () => {
  if (slidePerScreen + currSlide > slideArr.length - 1) return;
  currSlide++;
  moveSlidee(slideContainer[0], currSlide)
};

previousBtn[0].onclick = () => {
  if (currSlide === 0) return;
  currSlide--;
  moveSlidee(slideContainer[0], currSlide)
};

// second carousel controls
nextBtn[1].onclick = () => {
  if (slidePerScreen + secondCurrSlide > secondSlideArr.length - 1) return;
  secondCurrSlide++;
  moveSlidee(slideContainer[1], secondCurrSlide)
};

previousBtn[1].onclick = () => {
  if (secondCurrSlide === 0) return;
  secondCurrSlide--;
  moveSlidee(slideContainer[1], secondCurrSlide)
};

createSlideItems();
makeSlide();

window.onresize = () => {
  makeSlide();
};
