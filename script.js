var skillsBox = document.querySelector(".skillsBox");

$(".btn1").click(function() {
  $(".btn3").removeClass("triangle");
  $(".btn2").removeClass("triangle");

  $(".btn1").addClass("triangle");
  skillsBox.innerHTML =
    '<img src ="./images/html.jpg" alt="html" >' +
    '<img src ="./images/css.jpg" alt="css">' +
    '<img src ="./images/sass.jpg" alt="sass">' +
    '<img src ="./images/bsp.jpg" alt="bsp">' +
    '<img src ="./images/wp.jpg" alt="wp">' +
    '<img src ="./images/js.jpg" alt="js">' +
    '<img src ="./images/react.jpg" alt="react">' +
    '<img src ="./images/redux.jpg" alt="redux">';
});

$(".btn2").click(function() {
  $(".btn1").removeClass("triangle");
  $(".btn3").removeClass("triangle");

  $(".btn2").addClass("triangle");
  skillsBox.innerHTML =
    '<img src ="./images/ps.jpg" alt="ps" >' +
    '<img src ="./images/ai.jpg" alt="ai">' +
    '<img src ="./images/git.jpg" alt="git">' +
    '<img src ="./images/java.jpg" alt="java">' +
    '<img src ="./images/db.jpg" alt="db">';
});

$(".btn3").click(function() {
  $(".btn2").removeClass("triangle");
  $(".btn1").removeClass("triangle");

  $(".btn3").addClass("triangle");
  skillsBox.innerHTML =
    '<img src ="./images/angular.jpg" alt="angular" >' +
    '<img src ="./images/vue.jpg" alt="vue">' +
    '<img src ="./images/python.jpg" alt="python">';
});

$(".scroll").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".firstSection").offset().top
    },
    "slow"
  );
});

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".btnUp").style.display = "block";
  } else {
    document.querySelector(".btnUp").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//SWIPER
var mySwiper = new Swiper(".swiper-container", {
  speed: 400,
  spaceBetween: 100
});

var mySwiper = document.querySelector(".swiper-container").swiper;


//MAP

var map = new ol.Map({
  interactions: ol.interaction.defaults({ mouseWheelZoom: false }),
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: "map",
  view: new ol.View({
    center: ol.proj.fromLonLat([19.45, 51.78]),
    zoom: 11
  })
});


//PARTICLESJS

particlesJS("particles-js", {
  particles: {
    number: {
      value: 66,
      density: { enable: true, value_area: 2446.3576890600452 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.9,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
