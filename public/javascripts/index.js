var main = function() {
  $('.notification img').click(function() {
    $('.notification-menu').toggle(); 
  }); 
  
  $('.post .btn').click(function() {
    $(this).toggleClass('btn-like'); 
  }); 
}; 
$(document).ready(main); 

$(document).ready(function(){
	$('.delete').click(function(){
       var id = $(this).val();
       $.post('/remove',{id:id}, function(data){
       	 location.reload('/home');
       })
	})
})
