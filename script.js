var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100
});

var mySwiper = document.querySelector('.swiper-container').swiper
 
  var map = new ol.Map({
     interactions: ol.interaction.defaults({mouseWheelZoom:false}),
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        target: 'map',
        view: new ol.View({
          center: ol.proj.fromLonLat([19.45, 51.78]),
          zoom: 11
        })
      });


  


  var skillsBox = document.querySelector('.skillsBox');





$('.btn1').click(function(){

    $(".btn3").removeClass("triangle");
     $(".btn2").removeClass("triangle");

     $('.btn1').addClass("triangle");
     skillsBox.innerHTML ="<img src =\"./images/html.jpg\" alt=\"html\" >" +
               "<img src =\"./images/css.jpg\" alt=\"css\">" +
                  "<img src =\"./images/sass.jpg\" alt=\"sass\">"+
                     "<img src =\"./images/bsp.jpg\" alt=\"bsp\">"+
                        "<img src =\"./images/wp.jpg\" alt=\"wp\">"+
                            "<img src =\"./images/js.jpg\" alt=\"js\">"+
                        "<img src =\"./images/react.jpg\" alt=\"react\">"+
                            "<img src =\"./images/redux.jpg\" alt=\"redux\">";
});

$('.btn2').click(function(){
     $(".btn1").removeClass("triangle");
      $(".btn3").removeClass("triangle");

     $('.btn2').addClass("triangle");
      skillsBox.innerHTML ="<img src =\"./images/ps.jpg\" alt=\"ps\" >" +
               "<img src =\"./images/ai.jpg\" alt=\"ai\">" +
                     "<img src =\"./images/git.jpg\" alt=\"git\">"+
                        "<img src =\"./images/java.jpg\" alt=\"java\">"+
                  "<img src =\"./images/db.jpg\" alt=\"db\">";
});

$('.btn3').click(function(){
     $(".btn2").removeClass("triangle");
       $(".btn1").removeClass("triangle");

     $('.btn3').addClass("triangle");
          skillsBox.innerHTML ="<img src =\"./images/angular.jpg\" alt=\"angular\" >" +
               "<img src =\"./images/vue.jpg\" alt=\"vue\">" +
                     "<img src =\"./images/python.jpg\" alt=\"python\">"; 
});


$(".scroll").click(function() {
    $('html,body').animate({
        scrollTop: $(".firstSection").offset().top},
        'slow');
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector('.btnUp').style.display = "block";
    } else {
      document.querySelector('.btnUp').style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}