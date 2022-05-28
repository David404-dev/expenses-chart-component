const mon = document.querySelector(".mon");
const tue = document.querySelector(".tue");
const wed = document.querySelector(".wed");
const thu = document.querySelector(".thu");
const fri = document.querySelector(".fri");
const sat = document.querySelector(".sat");
const sun = document.querySelector(".sun");
const priceBox1 = document.querySelector(".price-box-1");
const priceBox2 = document.querySelector(".price-box-2");
const priceBox3 = document.querySelector(".price-box-3");
const priceBox4 = document.querySelector(".price-box-4");
const priceBox5 = document.querySelector(".price-box-5");
const priceBox6 = document.querySelector(".price-box-6");
const priceBox7 = document.querySelector(".price-box-7");

mon.addEventListener("mouseover", () => {
  priceBox1.style.display = "block";
});

mon.addEventListener("mouseout", () => {
  priceBox1.style.display = "none";
});

tue.addEventListener("mouseover", () => {
  priceBox2.style.display = "block";
});

tue.addEventListener("mouseout", () => {
  priceBox2.style.display = "none";
});

wed.addEventListener("mouseover", () => {
  priceBox3.style.display = "block";
});

wed.addEventListener("mouseout", () => {
  priceBox3.style.display = "none";
});

thu.addEventListener("mouseover", () => {
  priceBox4.style.display = "block";
});

thu.addEventListener("mouseout", () => {
  priceBox4.style.display = "none";
});

fri.addEventListener("mouseover", () => {
  priceBox5.style.display = "block";
});

fri.addEventListener("mouseout", () => {
  priceBox5.style.display = "none";
});

sat.addEventListener("mouseover", () => {
  priceBox6.style.display = "block";
});

sat.addEventListener("mouseout", () => {
  priceBox6.style.display = "none";
});

sun.addEventListener("mouseover", () => {
  priceBox7.style.display = "block";
});

sun.addEventListener("mouseout", () => {
  priceBox7.style.display = "none";
});
