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
     skillsBox.innerHTML ='<img src=\'./images/front.jpg\'  alt="front technologies">';
});

$('.btn2').click(function(){
     $(".btn1").removeClass("triangle");
      $(".btn3").removeClass("triangle");

     $('.btn2').addClass("triangle");
      skillsBox.innerHTML ='<img src=\'./images/other.jpg\'  alt="Other technologies">'; 
});

$('.btn3').click(function(){
     $(".btn2").removeClass("triangle");
       $(".btn1").removeClass("triangle");

     $('.btn3').addClass("triangle");
          skillsBox.innerHTML ='<img src=\'./images/WTL.jpg\'  alt="Wish to learm">'; 
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