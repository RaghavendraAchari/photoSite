var brandIcon = document.getElementById("brand-icon");

brandIcon.addEventListener("mouseover", function() {
  console.log(brandIcon.attributes.src);
  brandIcon.setAttribute("src", "./assets/icons/camera_icon_filled_100.png");
});
brandIcon.addEventListener("mouseleave", function() {
  console.log(brandIcon.attributes.src);
  brandIcon.setAttribute("src", "./assets/icons/camera_icon_100.png");
});

// banner image change
var imageArr = [
  "./assets/images/lamps.jpg",
  "./assets/images/bird.jpg",
  "./assets/images/mansoon-edited.jpg"
];

var imageElement = document.getElementsByClassName("sample-image");
var roundCursorElement = document.getElementsByClassName("slides-icon");

var index = 0;
imageElement[index].style.display = "block";
var lastIndex = index;
var interval = setInterval(function() {
  index++;

  if (index > 2) {
    index = 0;
  }
  imageElement[index].style.display = "block";
  roundCursorElement[index].setAttribute(
    "src",
    "./assets/icons/circle-filled.svg"
  );

  imageElement[lastIndex].style.display = "none";
  roundCursorElement[lastIndex].setAttribute(
    "src",
    "./assets/icons/circle-outlined.svg"
  );
  lastIndex = index;
}, 3000);

// function onSubmit(event) {
//   alert("Thanks for your comments.");
//   event.preventDefault();

//   document.getElementById("submit-button").blur();
//   document.getElementById("comment-form").reset();
// }
