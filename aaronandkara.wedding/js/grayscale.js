/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(48.5185584,-122.6122217), // Majestic inn and spa anacortes

        // Disables the default Google Maps UI components
       // disableDefaultUI: true,
        scrollwheel: false,
        //draggable: false,

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
          {"featureType":"all",
          "elementType":"geometry",
          "stylers":[
            {"color":"#ffffff"}
          ]},
          {"featureType":"all",
          "elementType":"labels.text.fill",
          "stylers":[
            {"gamma":0.01},
            {"lightness":20}
          ]},
          {"featureType":"all",
          "elementType":"labels.text.stroke",
          "stylers":[
            {"saturation":-31},
            {"lightness":-33},
            {"weight":2},
            {"gamma":0.8}
          ]},
          {"featureType":"all",
          "elementType":"labels.icon",
          "stylers":[{"visibility":"off"}
        ]},
        {"featureType":"administrative.locality",
        "elementType":"labels.text.fill",
        "stylers":[
          {"color":"#050505"}
        ]},
        {"featureType":"administrative.locality",
        "elementType":"labels.text.stroke",
        "stylers":[
          {"color":"#fef3f3"},
          {"weight":"3.01"}
        ]},
        {"featureType":"administrative.neighborhood",
        "elementType":"labels.text.fill",
        "stylers":[
          {"color":"#0a0a0a"},
          {"visibility":"off"}
        ]},
        {"featureType":"administrative.neighborhood",
        "elementType":"labels.text.stroke",
        "stylers":[
          {"color":"#fffbfb"},
          {"weight":"3.01"},
          {"visibility":"off"}
        ]},
        {"featureType":"landscape",
        "elementType":"geometry",
        "stylers":[
          {"color": "#D6EBFA"}
        ]},
        {"featureType":"road",
        "elementType":"geometry",
        "stylers":[
          {"lightness":10},
          {"saturation":-30}
        ]},
        {"featureType":"road",
        "elementType":"geometry.stroke",
        "stylers":[
          {"saturation":25},
          {"lightness":25}
        ]},
        {"featureType":"road.highway",
        "elementType":"geometry.fill",
        "stylers":[
          {"visibility":"on"},
          {"color":"#a1a1a1"}
        ]},
        {"featureType":"road.highway",
        "elementType":"geometry.stroke",
        "stylers":[{"color":"#292929"}
      ]},
      {"featureType":"road.highway",
      "elementType":"labels.text.fill",
      "stylers":[
        {"visibility":"on"},
        {"color":"#202020"}
      ]},
      {"featureType":"road.highway",
      "elementType":"labels.text.stroke",
      "stylers":[
        {"visibility":"on"},
        {"color":"#ffffff"}
      ]},
      {"featureType":"road.highway",
      "elementType":"labels.icon",
      "stylers":[
        {"visibility":"simplified"},
        {"hue":"#0006ff"},
        {"saturation":"-100"},
        {"lightness":"13"},
        {"gamma":"0.00"}
      ]},
      {"featureType":"road.arterial",
      "elementType":"geometry.fill",
      "stylers":[
        {"visibility":"on"},
        {"color":"#686868"}
      ]},
      {"featureType":"road.arterial",
      "elementType":"geometry.stroke",
      "stylers":[
        {"visibility":"off"},
        {"color":"#8d8d8d"}
      ]},
      {"featureType":"road.arterial",
      "elementType":"labels.text.fill",
      "stylers":[
        {"visibility":"on"},
        {"color":"#353535"},
        {"lightness":"6"}
      ]},
      {"featureType":"road.arterial",
      "elementType":"labels.text.stroke",
      "stylers":[
        {"visibility":"on"},
        {"color":"#ffffff"},
        {"weight":"3.45"}
      ]},
      {"featureType":"road.local",
      "elementType":"geometry.fill",
      "stylers":[
        {"color":"#d0d0d0"}
      ]},
      {"featureType":"road.local",
      "elementType":"geometry.stroke",
      "stylers":[
        {"lightness":"2"},
        {"visibility":"on"},
        {"color":"#999898"}
      ]},
      {"featureType":"road.local",
      "elementType":"labels.text.fill",
      "stylers":[
        {"color":"#383838"}
      ]},
      {"featureType":"road.local",
      "elementType":"labels.text.stroke",
      "stylers":[
        {"color":"#faf8f8"}
      ]},
      {"featureType":"water",
      "elementType":"all",
      "stylers":[
        {"color": "#FFFFFF"}
      ]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(48.518465, -122.612075);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });

    marker.addListener('click', function() {
        location.href = "https://www.google.com/maps/dir//Majestic+Inn+%26+Spa,+419+Commercial+Ave,+Anacortes,+WA+98221,+United+States/@48.288843,-122.6663516,10z/data=!4m9!4m8!1m0!1m5!1m1!1s0x548579e12705e52f:0x9d5de961b6790b52!2m2!1d-122.6122217!2d48.5185584!3e0";
    });

    map.addListener('center_changed', function() {
        // after 6 seconds return to the marker
        window.setTimeout(function() {
            map.panTo(marker.getPosition());
            map.setZoom(15);
        }, 20000);
    });
}


/*
 *  Countdown
 */
// set the date we are counting down to
var target_date = new Date('Mar, 4, 2017').getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag elements
var countdown = document.getElementById('countdown');
var day = document.getElementById('day');
var hour = document.getElementById('hour');
var min = document.getElementById('min');
var sec = document.getElementById('sec');

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    day.innerHTML = '<span class="days">' + days +  '<b><span class="counter-label"> Days</span></b></span>';
    hour.innerHTML = '<span class="hours">' + hours + '<b><span class="counter-label"> Hours</span></b></span>';
    min.innerHTML = '<span class="minutes">' + minutes + '<b><span class="counter-label"> Minutes</span></b></span>';
    sec.innerHTML = '<span class="seconds">' + seconds + '<b><span class="counter-label"> Seconds</span></b></span>';
}, 1000);
