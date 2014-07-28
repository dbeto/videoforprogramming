$(document).ready(function(){


var w =  ($(window).width());
var h =  ($(window).height());
	
	
$("video").width(w);
$(window).resize(function() {
var w =  ($(window).width());
$("video").width(w);

});

$("#boton1").mouseenter(function() {
if($('#cell_video_1')[0].play)
    $('#cell_video_1')[0].play();
	$("#boton2").fadeIn(500);
	$("#boton3").fadeIn(500);
});
		
	
$("#boton2").mouseenter(function() {
if($('#cell_video_1')[0].pause)
    $('#cell_video_1')[0].pause();
	
 });
	
$("#boton2").mouseout(function() {
if($('#cell_video_1')[0].play)
    $('#cell_video_1')[0].play(0);
 });	
	
$("#boton3").mouseenter(function() {
$("#boton2").css("background-color","yellow");
$("#boton2").css("color","black");
 $("#boton1").css("background-color","black");
	
 });
	
$("#boton3").mouseout(function() {
$("#boton2").css("background-color","transparent");
$("#boton2").css("color","white");
 $("#boton1").css("background-color","transparent");  
 });
	
$("#boton4").mouseenter(function() {
	if($('#cell_video_1')[0].pause)
    $('#cell_video_1')[0].pause();
	$("#boton2").fadeOut(500);
	$("#boton3").fadeOut(500);
});



$("#boton5").mouseenter(function() {
if($('#train_video_1')[0].play)
    $('#train_video_1')[0].play();
	$("#boton6").fadeIn(500);
	$("#boton7").fadeIn(500);
});
		
	
$("#boton6").mouseenter(function() {
if($('#train_video_1')[0].pause)
    $('#train_video_1')[0].pause();
	
 });
	
$("#boton6").mouseout(function() {
if($('#train_video_1')[0].play)
    $('#train_video_1')[0].play(100);
 });	
	
$("#boton7").mouseenter(function() {
	$("#oscuro1").css("background-color","black");
	$("#oscuro2").css("background-color","black");
	});
	
$("#boton7").mouseout(function() {
	$("#oscuro1").css("background-color","transparent");
	$("#oscuro2").css("background-color","transparent");
 });
	
$("#boton8").mouseenter(function() {
	if($('#train_video_1')[0].pause)
    $('#train_video_1')[0].pause();
	$("#boton6").fadeOut(500);
	$("#boton7").fadeOut(500);
});

	
	$.fx.speeds._default = 1000;
	$("#next").click(function() {
$( ".contenedor" ).transition({ x: -w });
$('#cell_video_1')[0].pause();
});
	
	$("#back").click(function() {
$( ".contenedor" ).transition({ x: 0 });
$('#train_video_1')[0].pause();
});


});