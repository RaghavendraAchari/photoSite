var app = new Vue({
  el: "#app",
  data: {
    images: [
      {
        title: "Lamp",
        path: "./assets/images/lamps.jpg"
      },
      {
        title: "Bird",
        path: "./assets/images/bird.jpg"
      },
      {
        title: "Aghanashini",
        path: "./assets/images/aghanashini-river-edited.jpeg"
      },
      {
        title: "Mansoon",
        path: "./assets/images/mansoon-edited.jpg"
      },
      {
        title: "Masur",
        path: "./assets/images/masur-river-edited.jpeg"
      },
      {
        title: "Rider",
        path: "./assets/images/rider-edited.jpeg"
      },
      {
        title: "Road",
        path: "./assets/images/road-edited.jpg"
      }
    ],
    introImages: [
      {
        title: "Lamp",
        path: "./assets/images/lamps.jpg"
      },
      {
        title: "Maasur",
        path: "./assets/images/masur-river-edited.jpeg"
      },
      {
        title: "Mansoon",
        path: "./assets/images/mansoon-edited.jpg"
      }
    ],
    socialLinks: [
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/raghavendraachari/",
        path: "./assets/social_media_icons/linkedin.svg",
        class: "linkedin-icon"
      },
      {
        title: "GitHub",
        link: "https://www.github.com/RaghavendraAchari",
        path: "./assets/social_media_icons/github.svg",
        class: "github-icon"
      },
      {
        title: "Twitter",
        link: "https://www.twitter.com/raghav_achari",
        path: "./assets/social_media_icons/twitter.svg",
        class: "twitter-icon"
      },
      {
        title: "Instagram",
        link: "https://www.instagram.com/raghav_achari",
        path: "./assets/social_media_icons/instagram.svg",
        class: "instagram-icon"
      },
      {
        title: "Facebook",
        link: "https://www.facebook.com/raghav.achari.33/",
        path: "./assets/social_media_icons/facebook.svg",
        class: "facebook-icon"
      }
    ],
    comment: "",
    userName: ""
  },
  methods: {
    commentSubmit: function(event) {
      if (this.comment === "" && this.userName === "") {
        alert("Cannot submit empty details");
      } else {
        alert("Thanks for the feedback");
      }
      event.target.blur();
      event.preventDefault();
    }
  }
});
