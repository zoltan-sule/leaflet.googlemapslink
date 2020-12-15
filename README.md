# leaflet.googlemapslink

It is a simple plugin for Leaflet that adds a Google Maps button to your maps pointing to google maps.
It is useful when you want to use Leaflet Map but want to access Street View or Route Planning of Google Maps.

## Using the plugin

Include the plugin CSS and JS files on your page after Leaflet files, using your method of choice:
* [Download the latest release](https://github.com/zoltan-sule/leaflet.googlemapslink/archive/main.zip)
* Install with npm: `npm install leaflet.googlemapslink`
* Install with yarn: `yarn add leaflet.googlemapslink`

## Usage

Include Control.GoogleMapsLink.js and Control.GoogleMapsLink.css in your page:

``` html
 <link rel="stylesheet" href="Control.GoogleMapsLink.css" />
 <script src="Control.GoogleMapsLink.js"></script>
```

Add Control.GoogleMapsLink button to the map:

```javascript
L.control.googleMapsLink().addTo(map);
```

## Options

* **position**: it is bottomleft by default
* **title**: the title of the button
* **locationQuery**: opens google maps by the address query
* **withPointer**:  by default the plugin disables the marker.


## Examples

opens google maps with the current center coordinates of the leaflet map without a marker

```javascript
L.control.googleMapsLink().addTo(map);
```

opens google maps with the current center coordinates of the leaflet map and shows a marker

```javascript
var googleMapsLinkControlOptions = {
    withPointer: true
};
L.control.googleMapsLink(googleMapsLinkControlOptions).addTo(map);
```

regardless of the coordinates it opens google maps by the address query

```javascript
var googleMapsLinkControlOptions = {
    locationQuery: 'Leopoldstadt,+1020+Vienna'
};
L.control.googleMapsLink(googleMapsLinkControlOptions).addTo(map);
```

## Source code

https://github.com/zoltan-sule/leaflet.googlemapslink

## License

Control.GoogleMapsLink is free software and redistributed under the MIT-LICENSE.
