/**
*
* Parse location.
*
* /beijing/39.904214,116.407413|北京
*
*/

var _reLL = /^-?\d+\.\d+\,\s?-?\d+\.\d+$/;
function parseLoc(loc){
	if(typeof loc == 'string'){
		var ob = {id: loc};
		loc= loc.split('/');
		if (loc[1]) {
			ob.divisionId = loc[1];
			if( loc[2] ) {
				loc = loc[2].split("|");
				if( loc[1] )
					ob.name = loc[1];
				if( loc[2] )
					ob.address = loc[2] || loc[1];
				if( loc[0] ) {
					if(_reLL.test( loc[0] )) {
						loc = loc[0].split(",");
						ob.lat = parseFloat( loc[0] );
						ob.lng = parseFloat( loc[1] );
					}
				}
			}
		}
		loc = ob;
	}
	return loc;
}

function formatLoc(divisionId, lat, lng, name, address){
	if( !divisionId ) return null;
	if(typeof divisionId == 'object'){
		lat = divisionId['lat'];
		lng = divisionId['lng'];
		name = divisionId['name'];
		address = divisionId['address'];
		divisionId = divisionId['divisionId'];
	}
	var str = divisionId.indexOf("/") == 0 ? divisionId : ("/" + divisionId);
	if( lat && lng) {
		str += "/" + lat + "," + lng;
		if( name )
			str += "|" + name;
		if( address )
			str += "|" + address;
	}
	return str;
}

function parseLocs(locs){
	if(locs && typeof locs == 'string'){
		locs = locs.split(";");
		var ar = [], loc;
		for (var i = locs.length - 1; i >= 0; i--){
			loc = parseLoc(locs[i]);
			loc && ar.unshift( loc );
		}
		locs = ar;
	}
	return locs;
}

function formatLocs(locs){
	if(locs && typeof locs == 'object'){
		for (var i = locs.length - 1; i >= 0; i--) {
			locs[i] = formatLoc(locs[i]);
		}
		locs = locs.join(";");
	}
	return locs;
}

//Module for node.js
if ( typeof require != "undefined" && typeof module != "undefined" ) {
	module.exports = {
		parseLocs: parseLocs,
		parseLoc: parseLoc,
		formatLocs: formatLocs,
		formatLoc: formatLoc
	};
}

