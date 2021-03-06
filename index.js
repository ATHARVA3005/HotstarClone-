// let movies = [
//   {
//     name: "falcon and the winter soldier",
//     des: "Lorem ipsum dolor sit amet ggsgsfdf sfgfd  fefesfesdf g",
//     image: "Images/slider 2.png"
//   },
//   {
//     name: "loki",
//     des: "Lorem ipsum dolor sit amet ggsgsfdf sfgfd  fefesfesdf g",
//     image: "Images/slider 1.png"
//   },
//   {
//     name: "wanda vision",
//     des: "Lorem ipsum dolor sit amet ggsgsfdf sfgfd  fefesfesdf g",
//     image: "Images/slider 3.png"
//   },
//   {
//     name: "Raya",
//     des: "Lorem ipsum dolor sit amet ggsgsfdf sfgfd  fefesfesdf g",
//     image: "Images/slider 4.png"
//   },
//   {
//     name: "luca",
//     des: "Lorem ipsum dolor sit amet ggsgsfdf sfgfd  fefesfesdf g",
//     image: "Images/slider 5.png"
//   }
// ];

// const caraousel = document.querySelector(".caraousel");
// let sliders = [];

// let slideIndex = 0; //Track the current slide

// const createSlide = () => {
//   if (slideIndex >= movies.length) {
//     slideIndex = 0;
//   }

//   //Create DOM Elements
//   let slide = document.createElememt("div");
//   var imgElement = document.createElememt("img");
//   let content = document.createElememt("div");
//   let h1 = document.createElememt("h1");
//   let p = document.createElememt("p");

//   //ataching all the elemnts
//   imgElement.appendChild(document.createTextNode(""));
//   h1.appendChild(document.createTextNode(movies[slideIndex].name));
//   p.appendChild(document.createTextNode(movies[slideIndex].des));
//   content.appendChild(h1);
//   content.appendChild(p);
//   slide.appendChild(imgElement);
//   caraousel.appendChild(slide);

//   //setting up Images
//   imgElement.src = movies[slideIndex].image;
//   slideIndex++;

//   //setting elements in classnames
//   slide.className = "slider";
//   content.className = "slide-content";
//   h1.className = "movie-title";
//   p.className = "movie-des";

//   sliders.push(slide);

//   if (sliders.length) {
//     sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
//       30 * (sliders.length - 2)
//     }px)`;
//   }
// };

// for (let i = 0; i < 3; i++) {
//   createSlide();
// }

// setInterval(() => {
//   createSlide();
// }, 3000);

// //video-card

// const videoCards = [...document.querySelectorAll(".video-card")];

// videoCards.forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     let video = item.children[1];
//     video.play();
//   });
//   item.addEventListener("mouseleave", () => {
//     let video = item.children[1];
//     video.pause();
//   });
// });

// //card Slider
let movies = [
  {
    name: "loki",
    des:
      "The mercurial villain Loki resumes his role as the god of Mischief in a new series that takes place after events of 'Avengers: Endgame'",
    image: "Images/slider 1.png"
  },
  {
    name: "falcon and the winter soldier",
    des:
      "Following the events of 'Avengers: Endgame', Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience.",
    image: "Images/slider 2.png"
  },
  {
    name: "wanda vision",
    des:
      "Wanda Maximoff and Vision - two super-powered beings living idealised suburban lives-begin to suspect that everything is not as it seems.",
    image: "Images/slider 3.png"
  },
  {
    name: "raya and the last dragon",
    des:
      "Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world",
    image: "Images/slider 4.png"
  },
  {
    name: "luca",
    des:
      "The movie follows Luca, Alberto, and Giulia's story of friendship and adventure in the Italian Riviera. Recently, Enrico Casarosa, director of Luca, revealed how his childhood inspired the movie. On Disney's official Twitter account, Enrico Casarosa shared how his story helped create Luca's story",
    image: "Images/slider 5.png"
  }
];

const carousel = document.querySelector(".caraousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card Slider

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
