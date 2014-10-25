function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(34.022449,-118.286043),
		zoom: 16,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("map-canvas_learn"),
		mapOptions);

	/*------ 1) Ronald Tutor Campus Center ------*/
	var campusCenterMyLatlng = new google.maps.LatLng(34.019921,-118.286078)
	var campusCenterContentString = document.getElementById("campusCenterText");
	var campusCenterInfowindow = new google.maps.InfoWindow({
			content: campusCenterContentString,
			maxWidth: 900
	});
	var campusCenterMarker = new google.maps.Marker({
			position: campusCenterMyLatlng,
			map: map,
			title: 'Ronald Tutor Campus Center'
	});
	google.maps.event.addListener(campusCenterMarker, 'click', function() {
		campusCenterInfowindow.open(map,campusCenterMarker);
		droughtInfowindow.close(map,droughtMarker);
		cromwellInfowindow.close(map,cromwellMarker);
		annenbergInfowindow.close(map,annenbergMarker);
		recyclingInfowindow.close(map,recyclingMarker);
		evkInfowindow.close(map,evkMarker);
		transportationInfowindow.close(map,transportationMarker);
		urbangardenInfowindow.close(map,urbangardenMarker);
	});


	/*------ 2) Drought Tolerant Landscaping ------*/
	var droughtMyLatlng = new google.maps.LatLng(34.020499, -118.290824)
	var droughtContentString = document.getElementById("droughtText");
	var droughtInfowindow = new google.maps.InfoWindow({
			content: droughtContentString,
			maxWidth: 900
	});
	var droughtMarker = new google.maps.Marker({
			position: droughtMyLatlng,
			map: map,
			title: 'Drought Tolerant Landscaping'
	});
	google.maps.event.addListener(droughtMarker, 'click', function() {
		campusCenterInfowindow.close(map,campusCenterMarker);
		droughtInfowindow.open(map,droughtMarker);
		cromwellInfowindow.close(map,cromwellMarker);
		annenbergInfowindow.close(map,annenbergMarker);
		recyclingInfowindow.close(map,recyclingMarker);
		evkInfowindow.close(map,evkMarker);
		transportationInfowindow.close(map,transportationMarker);
		urbangardenInfowindow.close(map,urbangardenMarker);

	});


	/*------ 3) Cromwell Track and Field Stadium ------*/
	var cromwellMyLatlng = new google.maps.LatLng(34.021969, -118.287851)
	var cromwellContentString = document.getElementById("cromwellText");
	var cromwellInfowindow = new google.maps.InfoWindow({
			content: cromwellContentString,
			maxWidth: 900
	});
	var cromwellMarker = new google.maps.Marker({
			position: cromwellMyLatlng,
			map: map,
			title: 'cromwell Arts Complex'
	});
	google.maps.event.addListener(cromwellMarker, 'click', function() {
		campusCenterInfowindow.close(map,campusCenterMarker);
		droughtInfowindow.close(map,droughtMarker);
		cromwellInfowindow.open(map,cromwellMarker);
		annenbergInfowindow.close(map,annenbergMarker);
		recyclingInfowindow.close(map,recyclingMarker);
		evkInfowindow.close(map,evkMarker);
		transportationInfowindow.close(map,transportationMarker);
		urbangardenInfowindow.close(map,urbangardenMarker);
	});

	/*------ 4) The Annenberg School for Communication and Journalism ------*/
	var annenbergMyLatlng = new google.maps.LatLng(34.022036, -118.286156)
	var annenbergContentString = document.getElementById("annenbergText");
	var annenbergInfowindow = new google.maps.InfoWindow({
			content: annenbergContentString,
			maxWidth: 900
	});
	var annenbergMarker = new google.maps.Marker({
			position: annenbergMyLatlng,
			map: map,
			title: 'annenberg Tolerant Landscaping'
	});
	google.maps.event.addListener(annenbergMarker, 'click', function() {
		campusCenterInfowindow.close(map,campusCenterMarker);
		droughtInfowindow.close(map,droughtMarker);
		cromwellInfowindow.close(map,cromwellMarker);
		annenbergInfowindow.open(map,annenbergMarker);
		recyclingInfowindow.close(map,recyclingMarker);
		evkInfowindow.close(map,evkMarker);
		transportationInfowindow.close(map,transportationMarker);
		urbangardenInfowindow.close(map,urbangardenMarker);
	});

	/*------ 5) USC Recycling ------*/
	var recyclingMyLatlng = new google.maps.LatLng(34.020924, -118.283125)
	var recyclingContentString = document.getElementById("recyclingText");
	var recyclingInfowindow = new google.maps.InfoWindow({
			content: recyclingContentString,
			maxWidth: 900
	});
	var recyclingMarker = new google.maps.Marker({
			position: recyclingMyLatlng,
			map: map,
			title: 'recycling Tolerant Landscaping'
	});
	google.maps.event.addListener(recyclingMarker, 'click', function() {
		campusCenterInfowindow.close(map,campusCenterMarker);
		droughtInfowindow.close(map,droughtMarker);
		cromwellInfowindow.close(map,cromwellMarker);
		annenbergInfowindow.close(map,annenbergMarker);
		recyclingInfowindow.open(map,recyclingMarker);
		evkInfowindow.close(map,evkMarker);
		transportationInfowindow.close(map,transportationMarker);
		urbangardenInfowindow.close(map,urbangardenMarker);
	});

	/*------ 6) Everybody's Kitchen ------*/
	var evkMyLatlng = new google.maps.LatLng(34.021235, -118.282111)
	var evkContentString = document.getElementById("evkText");
	var evkInfowindow = new google.maps.InfoWindow({
			content: evkContentString,
			maxWidth: 900
	});
	var evkMarker = new google.maps.Marker({
			position: evkMyLatlng,
			map: map,
			title: 'evk Tolerant Landscaping'
	});
	google.maps.event.addListener(evkMarker, 'click', function() {
		campusCenterInfowindow.close(map,campusCenterMarker);
		droughtInfowindow.close(map,droughtMarker);
		cromwellInfowindow.close(map,cromwellMarker);
		annenbergInfowindow.close(map,annenbergMarker);
		recyclingInfowindow.close(map,recyclingMarker);
		evkInfowindow.open(map,evkMarker);
		transportationInfowindow.close(map,transportationMarker);
		urbangardenInfowindow.close(map,urbangardenMarker);
	});

	/*------ 7) Alternative Transportation ------*/
	var transportationMyLatlng = new google.maps.LatLng(34.022897, -118.283948)
	var transportationContentString = document.getElementById("transportationText");
	var transportationInfowindow = new google.maps.InfoWindow({
			content: transportationContentString,
			maxWidth: 900
	});
	var transportationMarker = new google.maps.Marker({
			position: transportationMyLatlng,
			map: map,
			title: 'transportation Tolerant Landscaping'
	});
	google.maps.event.addListener(transportationMarker, 'click', function() {
		campusCenterInfowindow.close(map,campusCenterMarker);
		droughtInfowindow.close(map,droughtMarker);
		cromwellInfowindow.close(map,cromwellMarker);
		annenbergInfowindow.close(map,annenbergMarker);
		recyclingInfowindow.close(map,recyclingMarker);
		evkInfowindow.close(map,evkMarker);
		transportationInfowindow.open(map,transportationMarker);
		urbangardenInfowindow.close(map,urbangardenMarker);
	});

	/*------ 8) Urban Garden ------*/
	var urbangardenMyLatlng = new google.maps.LatLng(34.024817, -118.281544)
	var urbangardenContentString = document.getElementById("urbangardenText");
	var urbangardenInfowindow = new google.maps.InfoWindow({
			content: urbangardenContentString,
			maxWidth: 900
	});
	var urbangardenMarker = new google.maps.Marker({
			position: urbangardenMyLatlng,
			map: map,
			title: 'urbangarden Tolerant Landscaping'
	});
	google.maps.event.addListener(urbangardenMarker, 'click', function() {
		campusCenterInfowindow.close(map,campusCenterMarker);
		droughtInfowindow.close(map,droughtMarker);
		cromwellInfowindow.close(map,cromwellMarker);
		annenbergInfowindow.close(map,annenbergMarker);
		recyclingInfowindow.close(map,recyclingMarker);
		evkInfowindow.close(map,evkMarker);
		transportationInfowindow.close(map,transportationMarker);
		urbangardenInfowindow.open(map,urbangardenMarker);
	});


}


google.maps.event.addDomListener(window, 'load', initialize);

