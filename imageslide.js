var slideNum = 1;
showDivs(slideNum);

function plusDivs(n){
    showDivs(slideNum += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("imageslide");

    
    if(n > x.length){
        slideNum = 1;
    }
    if(n < 1){
        slideNum = x.length;
    }
    for(i=0; i < x.length; i++)
    {
        x[i].style.display="none";
    }
    x[slideNum-1].style.display="block";
}

