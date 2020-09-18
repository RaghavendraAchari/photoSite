var app = new Vue({
  el: "#app",
  data: {
    images: [
      {
        title: "Bird",
        path: "./assets/images/Bird-edited.jpg",
        original:
          "https://drive.google.com/file/d/1yNMEuqGCEf3oaPhhe79nflYsQfpmtvCf/view?usp=sharing"
      },
      {
        title: "Bird 2",
        path: "./assets/images/Bird-edited-2.jpg",
        original:
          "https://drive.google.com/file/d/1whq9tLIJDaMUUXL6emfuZcXh70ncAOqt/view?usp=sharing"
      },
      {
        title: "Bird 3",
        path: "./assets/images/Bird-edited-3.jpg",
        original:
          "https://drive.google.com/file/d/1hHe_fhv4RewwEAO682NywxYjpnjcVfzW/view?usp=sharing"
      },
      {
        title: "Lamp",
        path: "./assets/images/lamps.jpg",
        original:
          "https://drive.google.com/file/d/1Oa5TJqAQsEUeAOpwGRMYzzidZod7N5pj/view?usp=sharing"
      },
      {
        title: "Bird",
        path: "./assets/images/bird.jpg",
        original:
          "https://drive.google.com/file/d/1CcC26DzGwDjyzm54-56Sv5ShQ_4CIBaG/view?usp=sharing"
      },
      {
        title: "Aghanashini",
        path: "./assets/images/aghanashini-river-edited.jpeg",
        original:
          "https://drive.google.com/file/d/17l1HysblpA6PsN50hLSkwbdfNPKd83F9/view?usp=sharing"
      },
      {
        title: "Mansoon",
        path: "./assets/images/mansoon-edited.jpg",
        original:
          "https://drive.google.com/file/d/1XJO19yTnN4SVN1LOFic071DeUCvJChUP/view?usp=sharing"
      },
      {
        title: "Masur",
        path: "./assets/images/masur-river-edited.jpeg",
        original:
          "https://drive.google.com/file/d/1IJ85puvUbgnAsW6SIhoDNGXuPBp94rSX/view?usp=sharing"
      },
      {
        title: "Rider",
        path: "./assets/images/rider-edited.jpeg",
        original:
          "https://drive.google.com/file/d/1OcAh89iNyxmJlBUFVCzVoCCkXholFeVg/view?usp=sharing"
      },
      {
        title: "Road",
        path: "./assets/images/road-edited.jpg",
        original:
          "https://drive.google.com/file/d/1Jjwlq-wkOSPwGntx8L9ggYTtXLX2nOvJ/view?usp=sharing"
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
