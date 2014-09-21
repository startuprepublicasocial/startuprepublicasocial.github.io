
            var icon = new google.maps.MarkerImage("pin.png",
                       new google.maps.Size(32, 32), new google.maps.Point(0, 0),
                       new google.maps.Point(16, 32));
            var center = null;
            var map = null;
            var currentPopup;
            var bounds = new google.maps.LatLngBounds();
            function addMarker(lat, lng, info) {
                var pt = new google.maps.LatLng(lat, lng);
                bounds.extend(pt);
                var marker = new google.maps.Marker({
                    position: pt,
                    icon: icon,
                    map: map
                });
                var popup = new google.maps.InfoWindow({
                    content: info,
                    maxWidth: 300
                });
                google.maps.event.addListener(marker, "click", function() {
                    if (currentPopup != null) {
                        currentPopup.close();
                        currentPopup = null;
                    }
                    popup.open(map, marker);
                    currentPopup = popup;
                });
                google.maps.event.addListener(popup, "closeclick", function() {
                    map.panTo(center);
                    currentPopup = null;
                });
            }
            function initMap() {
                map = new google.maps.Map(document.getElementById("map"), {
                    center: new google.maps.LatLng(0, 0),
                    zoom: 14,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: false,
                    scrollwheel: false,
                    navigationControl: false,
                    scaleControl: false,
                    draggable: false,
                    mapTypeControlOptions: {
                    style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
                    },
                    navigationControl: true,
                    navigationControlOptions: {
                     style: google.maps.NavigationControlStyle.SMALL
                    }
                });
 addMarker(-23.024600, -45.562852,'<b>REPÚBLICA ADMINISTRAÇÃO</b><br/>Av. Nove de Julho - 1026-1160 - Centro');
addMarker(-23.024601, -45.562852,'<b>REPÚBLICA CENTRO</b><br/>Av. Nove de Julho - 1026-1160 - Centro');
addMarker(-23.024603, -45.562852,'<b>REPÚBLICA MADRUGA</b><br/>Av. Nove de Julho - 1026-1160 - Centro');
addMarker(-23.024604, -45.562852,'<b>REPÚBLICA CALOUROS</b><br/>Av. Nove de Julho - 1026-1160 - Centro');
addMarker(-23.024771, -45.555149,'<b>REPÚBLICA LETRAS 1</b><br/>Rua Visconde do Rio Branco - 210 - Centro');
addMarker(-23.024605, -45.562852,'<b>REPÚBLICA ADM</b><br/>Av. Nove de Julho - 1026-1160 - Centro');
addMarker(-23.025977, -45.566514,'<b>REPÚBLICA ARQUITETURA</b><br/>Praça Félix Guisard - 120 - Taubaté - SP - 12020-350 ');
addMarker(-23.030242, -45.565865,'<b>REPÚBLICA BIOLOGIA</b><br/>Av. Tiradentes - 480 - Jardim das Nações - SP 12030-180');
addMarker(-23.025181, -45.518466,'<b>REPÚBLICA CIÊNCIAS AGRÁRIAS</b><br/>Estrada Doutor José Luiz Cembranelli 5000 + DEP C AGRARIAS Taubaté - SP - 12081-010');
addMarker(-23.023345, -45.559659,'<b>REPÚBLICA CIÊNCIAS JURÍDICAS</b><br/>Av. Nove de Julho - 687-775 - Centro - SP');
addMarker(-23.021536, -45.551889,'<b>REPÚBLICA CIÊNCIAS SOCIAIS E LETRAS</b><br/>Rua Visconde do Rio Branco - 22 - Centro - Taubaté-SP - 12020-040');
addMarker(-23.027762, -45.562933,'<b>REPÚBLICA COMUNICAÇÃO SOCIAL</b><br/>R. Expedicionário Ernesto Pereira - 126 - Centro');
addMarker(-23.027763, -45.562934,'<b>REPÚBLICA ECONOMIA, CONTABILIDADE E ADMINISTRAÇÃO</b><br/>R. Expedicionário Ernesto Pereira - 126 - Centro');
addMarker(-23.030242, -45.565865,'<b>REPÚBLICA EDUCAÇÃO FÍSICA</b><br/>Av. Tiradentes - 480 - Jardim das Nações - SP - 12030-180');
addMarker(-23.030241, -45.565866,'<b>REPÚBLICA ENFERMAGEM E NUTRIÇÃO</b><br/>Av. Tiradentes - 480 - Jardim das Nações - SP - 12030-181');
addMarker(-23.027763, -45.562934,'<b>REPÚBLICA ENGENHARIA CIVIL</b><br/>R. Expedicionário Ernesto Pereira - 126 - Centro');
addMarker(-23.028555, -45.549855,'<b>REPÚBLICA ENGENHARIA ELÉTRICA</b><br/>R Daniel Danelli - Jardim Morumby  Taubaté - SP - 12060-440');
addMarker(-23.028556, -45.549856,'<b>REPÚBLICA ENGENHARIA MECÂNICA</b><br/>R Daniel Danelli - Jardim Morumby  Taubaté - SP - 12060-441');
addMarker(-23.030242, -45.565865,'<b>REPÚBLICA FISIOTERAPIA</b><br/>Av. Tiradentes - 480 - Jardim das Nações - SP - 12030-180');
addMarker(-23.014101, -45.550846,'<b>REPÚBLICA INFORMÁTICA</b><br/>Av. Marechal Deodoro - 605 - Jardim Sta. Clara - Taubaté - SP - 12080-000');
addMarker(-23.014142, -45.550846,'<b>REPÚBLICA MATEMÁTICA E FÍSICA</b><br/>Av. Marechal Deodoro - 605 - Jardim Sta. Clara - Taubaté - SP - 12080-001');
addMarker(-23.030242, -45.565865,'<b>REPÚBLICA MEDICINA</b><br/>Av. Tiradentes - 480 - Jardim das Nações - SP - 12030-180');
addMarker(-23.030241, -45.565866,'<b>REPÚBLICA ODONTOLOGIA</b><br/>Av. Tiradentes - 480 - Jardim das Nações - SP - 12030-181');
addMarker(-23.024320, -45.557919,'<b>REPÚBLICA PEDAGOGIA</b><br/>Rua Conselheiro Moreira de Barros - 203 - Centro -  Taubaté-SP  - 12010-080');
addMarker(-23.021536, -45.551889,'<b>REPÚBLICA SERVIÇO SOCIAL</b><br/>Rua Visconde do Rio Branco - 22 - Centro - Taubaté-SP  - 12020-040');
center = bounds.getCenter();
                map.fitBounds(bounds);
                
            }