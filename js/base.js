
function buildLoc() {
	// body...
	var 	$loc = $("#loc"),
	searchAddr = $("#search-addr"),
	geoWrap = $("#geo-wrap"),
	geo = $("#geo"),
	locAddr = $("#loc-addr"),
	locLat = $("#loc-lat"),
	locLng = $("#loc-lng"),
	locCity = $("#loc-city"),
	confirmLoc = $("#confirm-loc"),
	cancelLoc = $("#cancel-loc"),
	latlng,
	myLoc = new locUI(document.getElementById("map-canvas"), {
		location: function(ll) {
			locAddr.val(ll.address);
			locLat.val(round(ll.lat()));
			locLng.val(round(ll.lng()));
			locCity.val(ll.cityName);
			latlng = ll;
		}
	});
	myLoc.setCenter(locUI.LatLng(39.904214,116.407413, "北京", "北京", "beijing"));
	myLoc.bindSearch("#search-addr");
	if( !locUI.isSupportGeo() ) {
		geoWrap.hide();
	}else{
		geo.click(function(e) {
			myLoc.geo(null, function() {
				geo.html("自动定位失败！");
			});
			return false;
		});
	}

	function round (num) {
		return Math.round(num*10000000)/10000000;
	}
}
$(buildLoc);
