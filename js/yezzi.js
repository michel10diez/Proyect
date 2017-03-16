var btnMenuE= document.getElementById('btn-menu');

var navE= document.getElementById('nav');

btnMenuE.addEventListener('click', function (){
  nav.classList.toggle('mostrar');
})



$(document).ready(function() 
{
  var height = $(window).height();
  ajustesIniciales();
  
  function ajustesIniciales() 
  {
    $("section#body_id").css({"margin-top": height - 380 + "px"});
  }

  $(document).scroll(function() 
  {
    var scrollTop = $(this).scrollTop();
    var pixeles = scrollTop / 70;
   
    if (scrollTop < height)
    {
      $("section#contenedor").css(
      {
        "-webkit-filter": "blur(" + pixeles + "px)",
        "background-position": "center -" + pixeles + 10 * "px"
      });
  
    }
   
  });
});