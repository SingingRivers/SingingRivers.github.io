mapboxgl.accessToken = 'pk.eyJ1IjoiYXV0b2Rpb3MiLCJhIjoiY2t2aDd6dm93MWswOTJvcTVrNHl5NnAwOCJ9.hlT4XpGVexycp6vVqmf88g';

      const geojson = {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'geometry': {
              type: "Polygon",
              coordinates: [ 
                [
                  [
                    -74.574359,
                    -8.784429, 
                    
                  ],
                  [
                    -74.574359,
                    -8.784429, 
                  ],
                  [
                    -8.923994741838127, 
                    -74.33942985719926,
                  ],
                  [
                    -8.923994741838127, 
                    -74.33942985719926,
                  ],
                  [
                    -8.923994741838127, 
                    -74.33942985719926,
                  ],
                ]
              ]
            },
            'properties': {
              'title': 'Deforestation in the Amazonia',
              'description': 'The Mennonites',
			  'video': 'videos/mennonites.mp4'
              
            }
          },
          {
            'type': 'Feature',
            'geometry': {
              type: "Polygon",
              coordinates: [
                [
                  [
                    -73.766680, -10.702025,
                  ],
                  [
                   -73.766680, -10.702025,
                  ],
                  [
                    -89.48776245117188,
                    18.41056376717653,
                  ],
                  [
                    -90,
                    18.41056376717653,
                  ],
                  [
                    -90,
                    17.81930071664984,
                  ],
                ]
              ]
            },
            'properties': {
             'title': 'Origin of Ucayali River',
              'description': 'Convergence of Apurimac (Ene + Tambo) and Urubamba Rivers',
              'video': 'videos/video.mp4'

            }
          },
        ]
      };
  

      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/autodios/ckvh9tuir0qce14oasbcnakec',
        center: [ -71.300715, -4.772441],
        zoom: 5,
        minZoom: 4,
      });

      // add markers to map
      for (const feature of geojson.features) {
        // create a HTML element for each feature
        const el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add it to the map
        new mapboxgl.Marker(el)
          .setLngLat(feature.geometry.coordinates[0][0])  // AQUI ES DONDE OBTIENES UN PUNTO DEL POLOGINO PARA COLOCAR EL PIN
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML(
                `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p><iframe src=${feature.properties.video} frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe>`
              )
          )
          .addTo(map);
      }
