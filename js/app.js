const form = document.querySelector("form");
const img = document.querySelector(".img");
const text = document.querySelector(".text");
const name = document.querySelector(".name");
img.style.display = "none";
form.addEventListener("click", (e) => {
  e.preventDefault();
  let height = document.querySelector(".height").value;
  let height2 = height / 100;
  let weight = document.querySelector(".weight").value;
  let bmi = weight / height2 ** 2;
  if (height2 > 0 && weight > 0) {
    if (bmi < 18.5) {
      text.textContent = `You are underweight person`;
      img.style.display = "block";
      img.src = "../images/underweight.jpg";
    } else if (bmi >= 18.5 && bmi <= 25) {
      text.textContent = `You are normal person`;
      img.style.display = "block";
      img.src = "../images/normal.png";
    } else if (bmi <= 30 && bmi >= 25) {
      text.textContent = `You are overweight person`;
      img.style.display = "block";
      img.src = "../images/overweight.jpg";
    } else if (bmi <= 35 && bmi >= 30) {
      text.textContent = `You are obese person`;
      img.style.display = "block";
      img.src = "../images/obese.jpg";
    } else if (bmi <= 40 && bmi >= 35) {
      text.textContent = `You are very obese person`;
      img.style.display = "block";
      img.src = "../images/very.png";
    }
  }
});
