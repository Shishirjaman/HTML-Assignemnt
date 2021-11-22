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

dropdownBtn1.onmouseleave =function(){
    var dropdownContent1 = document.getElementById('dropdownContent1');

    dropdownContent1.onmouseleave = function(){
        dropdownContent1.style.display = "none";
    }

}