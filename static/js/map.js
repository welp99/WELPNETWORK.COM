// map.js
document.addEventListener("DOMContentLoaded", function() {
    // Chargez la clé API depuis le fichier de configuration
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Définissez la fonction de rappel "initMap"
    window.initMap = function() {
        var myLatLng = { lat: 48.829577, lng: 2.369369 }; // Coordonnées de votre adresse
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: "Mon adresse"
        });
    };

    // Ajoutez le script au document
    document.head.appendChild(script);
});
