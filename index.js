let btn = document.querySelector(".name");
let btn2 = document.querySelector(".back");

let btnOut = () => {
  let add = document.querySelector(".additional");
  let addContent = document.querySelector(".additional-content");
  let addContent2 = document.querySelector(".additional-content2");
  let content = document.querySelector(".content");
  let infoLogo = document.querySelector(".info-logo");
  let mainImg = document.querySelector(".main-img");
  let name = document.querySelector(".name");
  let back = document.querySelector(".back");
  let warranty = document.querySelector(".warranty");
  let infoContent = document.querySelector(".info-content");
  let comfort = document.querySelector(".comfort");
  let level = document.querySelector(".level");
  let hard = document.querySelector(".hard");
  let slider = document.querySelector(".slider");
  let hardness = document.querySelector(".hardness");
  let bio = document.querySelector(".bio");
  let schedule = document.querySelector(".schedule");
  let feature = document.querySelector(".feature");
  let start = document.querySelector(".start");

  addContent.classList.toggle("additional-content-active");
  addContent2.classList.toggle("additional-content2-active");
  add.classList.toggle("additional-active");
  content.classList.toggle("content-active");
  infoLogo.classList.toggle("info-logo-active");
  mainImg.classList.toggle("main-img-active");
  name.classList.toggle("name-active");
  warranty.classList.toggle("none");
  back.classList.toggle("back-active");
  infoContent.classList.toggle("info-content-active");
  comfort.classList.toggle("comfort-active");
  level.classList.toggle("level-active");
  hard.classList.toggle("hard-active");
  slider.classList.toggle("slider-active");
  hardness.classList.toggle("hardness-active");
  bio.classList.toggle("bio-active");
  schedule.classList.toggle("none");
  feature.classList.toggle("feature-active");
  start.classList.toggle("none");
};

btn.addEventListener("click", btnOut);
btn2.addEventListener("click", btnOut);
