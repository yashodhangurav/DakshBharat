const listing = JSON.parse(document.getElementById('listing-data').textContent);
maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element string
  style: maptilersdk.MapStyle.STREETS,
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 12 // starting zoom
});

const marker = new maptilersdk.Marker({ color: "#FF0000" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new maptilersdk.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h4><p>Exact Location available after booking/hiring.</p>`
    )
  )
  .addTo(map);
