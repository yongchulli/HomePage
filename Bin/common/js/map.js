var oPoint = new nhn.api.map.LatLng(37.5151220, 127.0639389);
var defaultLevel = 11;
var oMap = new nhn.api.map.Map(document.getElementById('map'), { 
			point : oPoint,
			zoom : defaultLevel,
			enableWheelZoom : true,
			enableDragPan : true,
			enableDblClickZoom : false,
			mapMode : 0,
			activateTrafficMap : false,
			activateBicycleMap : false,
			minMaxLevel : [ 1, 14 ],
			size : new nhn.api.map.Size(960, 400)
		});

var oSlider = new nhn.api.map.ZoomControl();
oMap.addControl(oSlider);
oSlider.setPosition({
	top : 40,
	right : 10
});

var oMapTypeBtn = new nhn.api.map.MapTypeBtn();
oMap.addControl(oMapTypeBtn);
oMapTypeBtn.setPosition({
	top : 10,
	right : 10
});

/*
var oThemeMapBtn = new nhn.api.map.ThemeMapBtn();
oThemeMapBtn.setPosition({
	top : 10,
	right : 10
});
oMap.addControl(oThemeMapBtn);

var trafficButton = new nhn.api.map.TrafficMapBtn(); // - 실시간 교통지도 버튼 선언
trafficButton.setPosition({
	top:10, 
	right:150
}); // - 실시간 교통지도 버튼 위치 지정

oMap.addControl(trafficButton);
*/

var oSize = new nhn.api.map.Size(28, 37);
var oOffset = new nhn.api.map.Size(14, 37);
var oIcon = new nhn.api.map.Icon('http://static.naver.com/maps2/icons/pin_spot2.png', oSize, oOffset);

var oMarker1 = new nhn.api.map.Marker(oIcon, { title : 'LIYZ' });  //마커 생성 
oMarker1.setPoint(oPoint);
oMap.addOverlay(oMarker1);
var oLabel1 = new nhn.api.map.MarkerLabel();
oMap.addOverlay(oLabel1);
oLabel1.setVisible(true, oMarker1);