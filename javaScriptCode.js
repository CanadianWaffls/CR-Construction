var contrast = 1;

window.onload = function checkContrast(){
    contrast = localStorage.getItem("contrast");
        if (contrast == 2){
            document.getElementById("highContrastPicture").src = 'HighContrast2.png';
            document.getElementById("styleSheet").href = "stylesHighContrast.css";
        }
        else{
            document.getElementById("highContrastPicture").src = "HighContrast1.png"
            document.getElementById("styleSheet").href = "styles.css";
        }
    }

function navButtonHovered(x){
    var buttonId = "navButton" + String(x);
    document.getElementById(buttonId).className = "navBarButtonHovered";
}

function navButtonReleased(x){
    var buttonId = "navButton" + String(x);
    document.getElementById(buttonId).className = "navBarButton";
}

function highContrast(){
    if (contrast == 1){
        contrast = 2;
        document.getElementById("highContrastPicture").src = 'HighContrast2.png';
        document.getElementById("styleSheet").href = "stylesHighContrast.css";
    }
    else{
        contrast = 1;
        document.getElementById("highContrastPicture").src = "HighContrast1.png"
        document.getElementById("styleSheet").href = "styles.css";
    }
    localStorage.setItem("contrast", contrast);
}