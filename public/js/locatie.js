// Initialize and add the map
function initMap() {
    // The location of Uluru
    const locatie = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: Tulcea,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: Tulcea,
      map: map,
    });
  }
  
  window.initMap = initMap;