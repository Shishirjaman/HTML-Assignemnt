
var customRange1 = document.getElementById('customRange1');
var minrange = customRange1.value;
document.getElementById('minrange').innerHTML = "Min Range: $"+minrange;

var customRange2 = document.getElementById('customRange2');
var maxrange = customRange2.value;
document.getElementById('maxrange').innerHTML = "Max Range: $"+maxrange;

var temp;
if(minrange>maxrange){
    temp = minrange;
    minrange = maxrange;
    maxrange = temp;
}


var priceRange = document.getElementById('priceRange');
priceRange.value = "Price range: $"+minrange+"-"+"$"+maxrange;

customRange1.onchange = function(){
    minrange = customRange1.value;
    document.getElementById('minrange').innerHTML = "Min Range: $"+minrange;

    var priceRange = document.getElementById('priceRange');
    if(minrange>maxrange){
        temp = minrange;
        minrange = maxrange;
        maxrange = temp;
    }
    priceRange.value = "Price range: $"+minrange+"-"+"$"+maxrange;
}

customRange2.onchange = function(){
    maxrange = customRange2.value;
    document.getElementById('maxrange').innerHTML = "Max Range: $"+maxrange;

    var priceRange = document.getElementById('priceRange');
    if(minrange>maxrange){
        temp = minrange;
        minrange = maxrange;
        maxrange = temp;
    }
    priceRange.value = "Price Range: $"+minrange+"-"+"$"+maxrange;
}





var dropdownBtn4 = document.getElementById('dropdownBtn4');


dropdownBtn4.onclick =function(){
    var dropdownContent4 = document.getElementById('dropdownContent4');
    dropdownContent4.style.display = "block";
    
}


var price = document.getElementById('price');

price.onclick = function(){
    var dropdownContent4 = document.getElementById('dropdownContent4');
    document.getElementById('dropdownBtn4').value = "$"+minrange+"-"+"$"+maxrange;
    dropdownContent4.style.display = "none";
}




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
    }else{
        count-=1;
        document.getElementById('counter').innerHTML = count;
    }
}

if(count){
    document.getElementById('dropdownBtn3').innerHTML = count;
}else{
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
    document.getElementById('dropdownBtn3').value = count;
    dropdownContent3.style.display = "none";
}


var dropdownBtn2 = document.getElementById('dropdownBtn2');

dropdownBtn2.onclick =function(){
    var dropdownContent2 = document.getElementById('dropdownContent2');
    dropdownContent2.style.display = "block";
}

dropdownBtn2.onblur =function(){
    var dropdownContent2 = document.getElementById('dropdownContent2');
    dropdownContent2.style.display = "none";
}

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



var hdpkr = new HotelDatepicker(document.getElementById("input-id"));


var dateInput = document.getElementsByClassName('date');
dateInput.onblur = function(){
    var date = document.getElementById('input-id');
    console.log(date);
}
// console.log(hdpkr);
console.log(hdpkr.getValue());

// hdpkr.onclick(function(){
//     var date = document.getElementById("input-id").value;
//     console.log(date);
// });




// $(function(){
//     $("#datepicker").datepicker({ minDate: 0, 
//     changeMonth: true, changeYear: true,
//    });
// });
// $( function() {
//     $( ".datepicker" ).datepicker({
//       showButtonPanel: true,
//       minDate: 0,
//       changeMonth: true,
//       changeYear: true,
//     });
//   } );



var search = document.getElementById('search');
search.onclick = function(){
    var location = document.getElementById('place');
    location.innerHTML = place.formatted_address;
}



