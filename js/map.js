let center = [45.01700207459904,38.967308999999986];
function init(){
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 16,
    });
    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/address-geo.png',
        iconImageSize: [50, 62],
        iconImageOffset: [-20, -30]
    });
    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('zoomControl');
    map.controls.remove('rulerControl');
    map.behaviors.disable(['scrollZoom']);
    map.geoObjects.add(placemark);
}
ymaps.ready(init);