// loader effect
$(".grid_content").ready(function(){
	$(".grid_content div.layer").hide();

});

$(window).on('load', function () {
	$(".grid_content div").removeClass("lyr");
	$(".grid_content div.layer").show();

});

//-----------------------------------------------



// Social Icons hover effect

function socilIconEffect(x) {
  document.getElementById(x).style.color = "lightseagreen";
}

function socilIconEffectEnd(x) {
  document.getElementByClassName('.socialIconRow').style.color = "DarkGray";
}


//------------------------------------------------------------------


// menu

$(function(){
$(".menuIcon").click(function(){
    $(".menuContainer").show('slow');
});
$("#menuXicon").click(function(){
    $(".menuContainer").hide('slow');
});
$(".menuLink").click(function(){
    $(".menuContainer").hide('slow');
});
$(window).scroll(function(){
    $(".menuContainer").hide('slow');
});
$(".container,.other,#content4").click(function(){
    $(".menuContainer").hide('slow');
});
});
//------------------------------------------------------


// Contact input styles when onfocus
$(function(){
$(".socialIconEffect").mouseover(function(){
    $(".socialIconRow").slideDown();
});
$(".socialIconEffect").mouseout(function(){
    $(".socialIconRow").fadeOut();
});
$(".socialIconEffect2").mouseover(function(){
    $(".socialIconRow2").slideDown();
});
$(".socialIconEffect2").mouseout(function(){
    $(".socialIconRow2").fadeOut();
});
$(".socialIconEffect3").mouseover(function(){
    $(".socialIconRow3").slideDown();
});
$(".socialIconEffect3").mouseout(function(){
    $(".socialIconRow3").fadeOut();
});
});
//------------------------------------------------------------------




// Changing burger menu icons color when scrolling

function scrolling(){

    var icon = document.getElementById("menuIcon");
    var divHeight_particles_js = document.getElementById('particles-js').clientHeight;
    var divHeight_content1 = document.getElementById('content1').clientHeight;
    // var a = 20;
    var sum_height_top = divHeight_particles_js + divHeight_content1-50;
   
    var divHeight_content2=document.getElementById('content2').clientHeight;
    var sum_height_center = divHeight_content2+sum_height_top;

    if(scrollY>sum_height_top && scrollY<sum_height_center){
        icon.style.color="#222222";
    }
    else{
        icon.style.color="lightseagreen";
    }
}
addEventListener("scroll",scrolling);

//-------------------------------------------------------------------------------