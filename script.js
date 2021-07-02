$(document).ready(function() {
    var botao = $('.duelista');
    var dropDown = $('.ulduelistas');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

   $(document).ready(function() {
    var botao = $('.sentinela');
    var dropDown = $('.ulsentinelas');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

$(document).ready(function() {
    var botao = $('.controlador');
    var dropDown = $('.ulcontroladores');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

$(document).ready(function() {
    var botao = $('.inicializador');
    var dropDown = $('.ulinicializadores');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });

$(document).ready(function() {
    var botao = $('.mapa'); 
    var dropDown = $('.ulmapas');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });