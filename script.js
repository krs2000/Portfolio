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


  $(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
});