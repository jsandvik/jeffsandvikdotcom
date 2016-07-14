$(function() {
    var rainbow = ['#8012ed','#b301ca','#de079a','#f82165','#fe4c35','#ed7f12','#cab301','#9ade07','#65f821','#35fe4c','#12ed7f','#01cab3','#079ade','#2165f8','#4c35fe'];
    var i = 0;
    window.setInterval(function(){
      $(".rainbow-fun").css("color", rainbow[i]);
      if (i < rainbow.length - 1) {
        i++;
      } else {
        i = 0;
      }
    }, 80);

})