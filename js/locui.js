/*
* Loction UI
*
* Depends: 
* 	google maps v3.
* 	jquery.ui.autocomplete.
*/

function locUI(mapElement, options){
	var self = this;
	self.options = options || {};
	self.mapElement = mapElement;
	self.geocoder = new google.maps.Geocoder();
}

locUI.isSupportGeo = function() {
	return !!navigator.geolocation;
};

locUI.LatLng = function(posOrlat, lng, address, cityName, cityId) {
	var latlng = lng ? ( new google.maps.LatLng( posOrlat, lng ) ) : posOrlat;
	latlng.address = address;
	latlng.cityName = cityName;
	latlng.cityId = cityId;
	return latlng;
};

locUI.parseCityName = function(addr) {
	var city;
	addr = addr["address_components"];
	for (var j = addr.length - 1; j >= 0; j--) {
		city = addr[j];
		if( city.types[0] == "locality" ) {
			return city.short_name;
		}
	};
	return null;
};

locUI.prototype = {
	initMap: function() {
		var self = this;
		if ( self.map ) return;
		self.map = new google.maps.Map(self.mapElement, {
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});
	},
	initMarker: function(){
		var self = this;
		if ( self.marker ) return;
		self.initMap();
		var map = self.map,
		marker = self.marker = new google.maps.Marker({
			map: map,
			draggable:true,
			cursor: 'move',
			//title: '拖动标记位置',
			animation: google.maps.Animation.DROP,
			position: map.getCenter()
		});
		//var infowindow = new google.maps.InfoWindow();
		//infowindow.setContent('拖动标记位置');
		//infowindow.open(map, marker);
		var stop = true;
		google.maps.event.addListener(map, 'bounds_changed', function() {
			var _show = marker.getPosition() && map.getBounds().contains(marker.getPosition());
			if( !_show && stop ){
				marker.setPosition( map.getCenter() );
				self._code();
			}
		});
		google.maps.event.addListener(marker, 'dragstart', function() {
			stop = false;
		});
		google.maps.event.addListener(marker, 'dragend', function() {
			stop = true;
			self._code();
		});
		//google.maps.event.addListener(marker, 'position_changed', function() {
		//frequency
		//});
		google.maps.event.addListener(marker, 'click', function() {
			if (marker.getAnimation() != null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			}
		});
	},
	_code: function() {
		var self = this, 
		latlng = self.marker.getPosition(),
		location = self.options.location;
		if(latlng.address && (latlng.cityName || latlng.cityId)){
			location && location.call(self, latlng);
			return;
		}
		this.geocoder.geocode({'latLng': latlng}, function(results, status) {
			var res;
			if (status == google.maps.GeocoderStatus.OK && (res = results[0]) ) {
				//Success.
				latlng = locUI.LatLng(latlng, null, res.formatted_address, locUI.parseCityName( res ));
				location && location.call(self, latlng);
			}
		});
	},
	setCenter: function(posOrlat, lng) {
		var self = this;
		self.initMap();
		self.initMarker();
		posOrlat = lng ? ( new google.maps.LatLng( posOrlat, lng ) ) : posOrlat;
		self.marker.setPosition(posOrlat);
		self.map.setCenter(posOrlat);
		self._code();
	},
	geo: function (successFn, errorFn) {
		var self = this;
		if ( locUI.isSupportGeo() ) {
			navigator.geolocation.getCurrentPosition(function(pos) {
				self.setCenter( pos.coords.latitude,pos.coords.longitude );
				successFn && successFn();
			}, function() {
				errorFn && errorFn();
			});
		} else {
			errorFn && errorFn();
		}
	},
	bindSearch: function(element){
		//Search address.
		//http://tech.cibul.org/geocode-with-google-maps-api-v3/
		var self = this,
		geocoder = self.geocoder;
		$(element).autocomplete({
			//This bit uses the geocoder to fetch address values
			source: function(request, response) {
				geocoder.geocode({ 'address': request.term }, function(results, status) {
					response($.map(results, function(item) {
						return {
							label:  item.formatted_address,
							value: item.formatted_address,
							res: item
						}
					}));
				})
			},
			//This bit is executed upon selection of an address
			select: function(event, ui) {
				var res = ui.item.res;
				var latlng = locUI.LatLng(res.geometry.location, null, res.formatted_address, locUI.parseCityName( res ));
				self.setCenter(latlng);
			}
		});
	}
};
