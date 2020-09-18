var app = new Vue({
  el: "#app",
  data: {
    images: [
      {
        title: "Bird",
        path: "./assets/images/Bird-edited.jpg",
        original: "./assets/original-images/Bird-original.JPG"
      },
      {
        title: "Bird 2",
        path: "./assets/images/Bird-edited-2.jpg",
        original: "./assets/original-images/Bird-original-2.JPG"
      },
      {
        title: "Bird 3",
        path: "./assets/images/Bird-edited-3.jpg",
        original: "./assets/original-images/Bird-original-3.JPG"
      },
      {
        title: "Lamp",
        path: "./assets/images/lamps.jpg",
        original: "./assets/original-images/lamps-original.jpg"
      },
      {
        title: "Bird",
        path: "./assets/images/bird.jpg",
        original: "./assets/original-images/bird-01-original.jpg"
      },
      {
        title: "Aghanashini",
        path: "./assets/images/aghanashini-river-edited.jpeg",
        original: "./assets/original-images/aghanashini-river-original.jpeg"
      },
      {
        title: "Mansoon",
        path: "./assets/images/mansoon-edited.jpg",
        original: "./assets/original-images/mansoon-original.jpg"
      },
      {
        title: "Masur",
        path: "./assets/images/masur-river-edited.jpeg",
        original: "./assets/original-images/masur-river-original"
      },
      {
        title: "Rider",
        path: "./assets/images/rider-edited.jpeg",
        original: "./assets/original-images/rider-original.jpeg"
      },
      {
        title: "Road",
        path: "./assets/images/road-edited.jpg",
        original: "./assets/original-images/road-original.jpg"
      }
    ],
    introImages: [
      {
        title: "Bird",
        path: "./assets/images/Bird-edited.jpg"
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
