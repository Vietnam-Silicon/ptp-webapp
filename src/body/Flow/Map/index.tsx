"use client"
import { useEffect } from 'react';

const Index = () => {

  useEffect(() => {
    if (window.google) {
      var map = new google.maps.Map(document.getElementById("map_div"), {
        center: new google.maps.LatLng(33.808678, -117.918921),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      /*
       * create infowindow (which will be used by markers)
       */
      var infoWindow = new google.maps.InfoWindow();

      /*
       * marker creater function (acts as a closure for html parameter)
       */
      function createMarker(options, html) {
        var marker = new google.maps.Marker(options);
        if (html) {
          infoWindow.setContent(html);
          infoWindow.open(options.map, marker);
          google.maps.event.addListener(marker, "click", function () {
            infoWindow.setContent(html);
            infoWindow.open(options.map, this);
          });

        }
        return marker;
      }

      /*
       * add markers to map
       */
      var marker0 = createMarker({
        position: new google.maps.LatLng(33.808678, -117.918921),
        map: map,
        icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
      }, "<h1>Person 2</h1><p>This is first point for person 2</p>");

      var marker1 = createMarker({
        position: new google.maps.LatLng(33.818038, -117.928492),
        map: map
      }, "<h1>Person1</h1><p>This is first point for person 1</p>");

      var marker2 = createMarker({
        position: new google.maps.LatLng(33.803333, -117.915278),
        map: map
      });
      var marker3 = createMarker({
        position: new google.maps.LatLng(33.808038, -117.928495),
        map: map,
        icon: "http://1.bp.blogspot.com/_GZzKwf6g1o8/S6xwK6CSghI/AAAAAAAAA98/_iA3r4Ehclk/s1600/marker-green.png"
      });
    }

  }, [window]);

  return (
    <div>
      <div id="map_div" style={{ height: 400 }}></div>
    </div>
  );
};

export default Index;
