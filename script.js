"use strict";
/*
const contactBtn = document.querySelector(".btn"); */
const modal = document.querySelector("#contact-modal");
const blurwall = document.querySelector(".blur-wall");

document.querySelector(".btn").addEventListener("click", function () {
  modal.style.display = "inline";
  blurwall.style.display = "inline";
});

document.querySelector(".closex").addEventListener("click", function () {
  modal.style.display = "none";
  blurwall.style.display = "none";
});

document.querySelector(".blurwall").addEventListener("click", function () {
  modal.style.display = "none";
  blurwall.style.display = "none";
});
