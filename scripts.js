// const header = document.querySelector("h1");
// header.style.color = "blue";
// header.style.backgroundColor = "white";
// console.log(header.style);

// const paragraph = document.querySelector("h2");
// paragraph.style.color = "white";
// paragraph.style.backgroundColor = "green";
// paragraph.style.padding = "50px";
// console.log(paragraph);

// // const jollofParagraph = document.querySelector("p");
// // console.log(jollofParagraph.className);
// // jollofParagraph.className = "favorite";
// // console.log(jollofParagraph.className);

// const jollofParagraph = document.querySelector("h3");
// console.log(jollofParagraph.classList);

// jollofParagraph.classList.add("fav", "tasty");
// console.log(jollofParagraph.classList);

// jollofParagraph.classList.remove("tasty");
// console.log(jollofParagraph.classList);

// jollofParagraph.classList.replace("fav", "favorite");
// console.log(jollofParagraph.classList);

// const isFavorite = jollofParagraph.classList.contains("favorite");
// const isSoup = jollofParagraph.classList.contains("soup");
// console.log("Contains Favorite:", isFavorite);
// console.log(("Contains soup:", isSoup));

// jollofParagraph.classList.toggle("favorite");
// console.log(jollofParagraph.classList);

// jollofParagraph.classList.toggle("favorite");
// console.log(jollofParagraph.classList);

// jollofParagraph.classList.toggle("favorite");
// console.log(jollofParagraph.classList);

const giftBoxElement = document.getElementById("gift-box");
const buttonElement = document.getElementById("click-btn");

buttonElement.addEventListener("click", function () {
  giftBoxElement.classList.remove("hide");
});
