
var acc = document.getElementsByClassName('accordion');
var i;

for( i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active"); //adds the .active to the button when pressed. 
        var panel = this.nextElementSibling;
        if(panel.style.display === "block") {
            panel.style.display = "none";
        }else{
            panel.style.display = "block"
        }
    });
}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

var arr = document.querySelector('button'); 

for(i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var point = this.firstElementChild;
        point.classList.toggle("rotate");
    });
}
