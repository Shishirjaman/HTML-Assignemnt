// Price Range Section start here

var customRange1 = document.getElementById('customRange1');
var minrange = Number(customRange1.value);
document.getElementById('minrange').innerHTML = "Min Range: $"+minrange;


var customRange2 = document.getElementById('customRange2');
var maxrange = Number(customRange2.value);
document.getElementById('maxrange').innerHTML = "Max Range: $"+maxrange;

var temp;
// if(minrange>maxrange){
//     temp = minrange;
//     minrange = maxrange;
//     maxrange = temp;
//     document.getElementById('minrange').innerHTML = "Min Range: $"+minrange;
//     document.getElementById('maxrange').innerHTML = "Max Range: $"+maxrange;
//     document.getElementById('customRange1').value = minrange;
//     document.getElementById('customRange2').value = maxrange;
// }


var priceRange = document.getElementById('priceRange');
priceRange.value = "Price range: $"+minrange+"-"+"$"+maxrange;


customRange1 = document.getElementById('customRange1');

customRange1.onchange = function(){

    customRange1 = document.getElementById('customRange1');
    customRange2 = document.getElementById('customRange2');

    minrange = Number(customRange1.value);
    maxrange = Number(customRange2.value);

    if(minrange>maxrange){
      temp = minrange;
      minrange = maxrange;
      maxrange = temp;
      document.getElementById('minrange').innerHTML = "Min Range: $"+minrange;
      document.getElementById('maxrange').innerHTML = "Max Range: $"+maxrange;
      document.getElementById('customRange1').value = minrange;
      document.getElementById('customRange2').value = maxrange;
    }
    else{
      document.getElementById('minrange').innerHTML = "Min Range: $"+minrange;
    }
    
    priceRange = document.getElementById('priceRange');
    priceRange.value = "Price range: $"+minrange+"-"+"$"+maxrange;
}


customRange2 = document.getElementById('customRange2');

customRange2.onchange = function(){

    customRange1 = document.getElementById('customRange1');
    customRange2 = document.getElementById('customRange2');
    
    minrange = Number(customRange1.value);
    maxrange = Number(customRange2.value);
    
    if(minrange>maxrange){
      temp = minrange;
      minrange = maxrange;
      maxrange = temp;
      document.getElementById('minrange').innerHTML = "Min Range: $"+minrange;
      document.getElementById('maxrange').innerHTML = "Max Range: $"+maxrange;
      document.getElementById('customRange1').value = minrange;
      document.getElementById('customRange2').value = maxrange;
    }
    else{
      document.getElementById('maxrange').innerHTML = "Max Range: $"+maxrange;
    }
    
    priceRange = document.getElementById('priceRange');
    priceRange.value = "Price Range: $"+minrange+"-"+"$"+maxrange;
}



var dropdownBtn4 = document.getElementById('dropdownBtn4');

dropdownBtn4.onclick =function(){
    dropdownContent4 = document.getElementById('dropdownContent4');
    dropdownContent4.style.display = "block";
    
}


var price = document.getElementById('price');

price.onclick = function(){
    dropdownContent4 = document.getElementById('dropdownContent4');
    if(minrange!=0 && maxrange!=0){
      document.getElementById('dropdownBtn4').value = "$"+minrange+"-"+"$"+maxrange;
      document.getElementById('minrange').innerHTML = "Min Range: $"+"0";
      document.getElementById('maxrange').innerHTML = "Max Range: $"+"0";
      priceRange = document.getElementById('priceRange');
      priceRange.value = "Price Range: $"+"0"+"-"+"$"+"0";
      document.getElementById('customRange1').value = "0";
      document.getElementById('customRange2').value = "0";
    }
    else{
      document.getElementById('dropdownBtn4').value = "Price range";
    }
    dropdownContent4.style.display = "none";
}

var cancelPrice = document.getElementById("cancelPrice");

cancelPrice.onclick = function(){
  dropdownContent4 = document.getElementById('dropdownContent4');
  document.getElementById('dropdownBtn4').value = "Price range";
  document.getElementById('minrange').innerHTML = "Min Range: $"+"0";
  document.getElementById('maxrange').innerHTML = "Max Range: $"+"0";
  priceRange = document.getElementById('priceRange');
  priceRange.value = "Price Range: $"+"0"+"-"+"$"+"0";
  document.getElementById('customRange1').value = "0";
  document.getElementById('customRange2').value = "0";  

  dropdownContent4.style.display = "none";
}
// Price Range section end here



// Guest Section start here

var count = 0;
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

plus.onclick = function(){
    count += 1;
    document.getElementById('counter').innerHTML = count;
}
minus.onclick = function(){
    if(count<=0){
        count = 0;
        document.getElementById('counter').innerHTML = count;
    }else{
        count-=1;
        document.getElementById('counter').innerHTML = count;
    }
}

if(count == 0){
    document.getElementById('dropdownBtn3').value = 'Guest';
    document.getElementById('counter').innerHTML = count;
}



var dropdownBtn3 = document.getElementById('dropdownBtn3');

dropdownBtn3.onclick =function(){
    var dropdownContent3 = document.getElementById('dropdownContent3');
    dropdownContent3.style.display = "block";
    
}

var submit = document.getElementById('submit');

submit.onclick = function(){
    var dropdownContent3 = document.getElementById('dropdownContent3');
    if(count==0){
      document.getElementById('dropdownBtn3').value = "Guest";
      document.getElementById('counter').innerHTML = count;
    }else{
      document.getElementById('dropdownBtn3').value = count;
      document.getElementById('counter').innerHTML = "0";
    }
    dropdownContent3.style.display = "none";
}


var cancelGuest = document.getElementById("cancelGuest");

cancelGuest.onclick = function(){
  count = 0;
  document.getElementById('dropdownBtn3').value = "Guest";
  document.getElementById('counter').innerHTML = "0";
  dropdownContent3.style.display = "none";
}
// Guest Section end here



// Navbar for mobile view start here

var dropdownBtn2 = document.getElementById('dropdownBtn2');

dropdownBtn2.onclick =function(){
    var dropdownContent2 = document.getElementById('dropdownContent2');
    dropdownContent2.style.display = "block";
}

dropdownBtn2.onblur =function(){
    var dropdownContent2 = document.getElementById('dropdownContent2');
    dropdownContent2.style.display = "none";
}

// Navbar for mobile view end here




// Navbar for destop view start here

var dropdownBtn1 = document.getElementById('dropdownBtn1');

dropdownBtn1.onmouseover =function(){
    var dropdownContent1 = document.getElementById('dropdownContent1');
    dropdownContent1.style.display = "block";
}

dropdownBtn1.onmouseout =function(){
    var dropdownContent1 = document.getElementById('dropdownContent1');

    dropdownContent1.onmouseleave= function(){
        dropdownContent1.style.display = "none";
    }

}

// Navbar for desktop view end here




// Place search section start here

var place;
$(document).ready(function(){
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById('searchInput')),{
        types: ['geocode'],
    });

    google.maps.event.addListener(autocomplete,"place_changed",function(){
        place = autocomplete.getPlace();
        console.log(place.formatted_address);
    });
    
});

// place search section end here




// Calander section start here

var hdpkr = new HotelDatepicker(document.getElementById("input-id"));


var dateInput = document.getElementsByClassName('date');
dateInput.onblur = function(){
    var date = document.getElementById('input-id');
    console.log(date);
}
// console.log(hdpkr);
console.log(hdpkr.getValue());

//Calander section end here




//Disable map onclick start here

cancelMapButton = document.getElementById("cancelMapButton");

cancelMapButton.onclick = function(){
    var mapSection = document.getElementById("mapSection");
    mapSection.style.display = "none";

    mapButton = document.getElementById("mapButton");
    mapButton.style.display = "block";

    cancelMapButton = document.getElementById("cancelMapButton");
    cancelMapButton.style.display = "none";

}

//Disable map onclick end here




//Enable map onclick start here
// start of map

mapButton = document.getElementById("mapButton");
var map;

mapButton.onclick = function initMap() {
    var mapSection = document.getElementById("mapSection");
    mapSection.style.display = "block";

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 23.812034192173236, lng: 90.40936723162604 },
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    [{ lat: 23.821349154608658, lng: 90.45298202345245 }, "Boshundhora Residential Area."," Price Range: $3000-$5000"],
    [{ lat: 23.792575052625253, lng: 90.40807402198968 }, "Gulshan.", " Price Range: $5000-$10000"],
    [{ lat: 23.80263479302596, lng: 90.42157169493271 }, "Baridhara.", " Price Range: $4000-$7000"],
    [{ lat: 23.780864846404913, lng: 90.42607888708248 }, "Badda, Dhaka.", " Price Range: $2000-$3000"],
    [{ lat: 23.764821107487293, lng: 90.42138291794144 }, "Rampura, Dhaka.", " Price Range: $2000-$4000"],
    [{lat: 23.794401896131493, lng: 90.40167152371144}, "Banani, Dhaka.", " Price Range: $4000-$9000"],
    [{lat: 23.751923546657537, lng: 90.4225907213687}, "Khilgaon, Dhaka.", " Price Range: $2000-$5000"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title, pricerange]) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${title}`+`${pricerange}`,
      // label: `${pricerange}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });

  mapButton.style.display = "none";
  cancelMapButton = document.getElementById("cancelMapButton");
  cancelMapButton.style.display = "block";
}

//Enable map onclick end here



var search = document.getElementById('search');
search.onclick = function(){
    var location = document.getElementById('location');
    location.innerHTML ="Search : " + place.formatted_address;
    
    var checkIn = ;
    var checkOut= ;
}



