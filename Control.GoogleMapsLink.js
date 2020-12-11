(function () {

    var baseUrls = {
        withPin:    "https://www.google.com/maps/place/<lat>,<lng>/@<lat>,<lng>,<zoom>z",
        withoutPin: "https://www.google.com/maps/@<lat>,<lng>,<zoom>z",
        withQuery:  "https://www.google.com/maps/place/<query>",
    };

    L.Control.GoogleMapsLink = L.Control.extend({
        options: {
            position:      'bottomleft',
            title:         'Link to Google Maps',
            locationQuery: '',
            withPointer:   false,
        },

        onAdd: function (map) {
            var className = 'leaflet-control-gmaps',
                container = L.DomUtil.create('div', className + ' leaflet-bar'),
                content   = '';

            this._createButton(this.options.title, className + '-link', content, container, this.openGoogleMaps, this);

            return container;
        },

        onRemove: function (map) {
        },

        _createButton: function (title, className, content, container, fn, context) {
            this.link           = L.DomUtil.create('a', className, container);
            this.link.href      = '#';
            this.link.title     = title;
            this.link.innerHTML = content;

            this.link.setAttribute('role', 'button');
            this.link.setAttribute('aria-label', title);

            L.DomEvent
                .on(this.link, 'click', L.DomEvent.stopPropagation)
                .on(this.link, 'click', L.DomEvent.preventDefault)
                .on(this.link, 'click', fn, context);

            return this.link;
        },

        openGoogleMaps: function () {
            var url;

            if (typeof this.options.locationQuery !== 'undefined' && this.options.locationQuery !== '') {
                url = baseUrls.withQuery;
                url = url.replace("<query>", this.options.locationQuery)

            } else {
                var center = this._map.getCenter();
                var zoom   = this._map.getZoom();

                if (this.options.withPointer === true) {
                    url = baseUrls.withPin;
                } else {
                    url = baseUrls.withoutPin;
                }

                url = url
                    .replace(/<lat>/g, center.lat)
                    .replace(/<lng>/g, center.lng)
                    .replace("<zoom>", zoom);
            }

            url = url.replace(/\s/g, '+');

            window.open(url);
        },
    });

    L.control.googleMapsLink = function(opts) {
        return new L.Control.GoogleMapsLink(opts);
    }

})();
