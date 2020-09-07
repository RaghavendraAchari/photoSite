var brandIcon = document.getElementById("brand-icon");

brandIcon.addEventListener("mouseover", function() {
  console.log(brandIcon.attributes.src);
  brandIcon.setAttribute("src", "./assets/icons/camera_icon_filled_100.png");
});
brandIcon.addEventListener("mouseleave", function() {
  console.log(brandIcon.attributes.src);
  brandIcon.setAttribute("src", "./assets/icons/camera_icon_100.png");
});
