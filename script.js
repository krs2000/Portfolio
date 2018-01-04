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


  

  var mySwiper = document.querySelector('.triangle');

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



