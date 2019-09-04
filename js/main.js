function initMap() {
  const loc = {
    lat: 51.510536,
    lng: -0.595041
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: loc
  });

  const marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}

// Sticky menu backgroun
window.addEventListener('scroll', function () {

  if (this.window.scrollY > 150) {
    this.document.querySelector('.navbar').style.opacity = 0.9;

  } else {
    this.document.querySelector('.navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('.navbar a, .btn').on('click', function (event) {

  let topDistance = 0;
  if (window.innerWidth < 500) {
    topDistance = 105;
  } else if (window.innerWidth < 1025) {
    topDistance = 55;
  } else {
    topDistance = 50;
  }

  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top - topDistance
    }, 800);
  }

});