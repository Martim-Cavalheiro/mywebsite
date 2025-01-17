var freddyAngry = 0;
var hurhurhurhur = (Math.random() * 10) + 1;
function jumpscare() {
    if (freddyAngry < 4) {
        ++freddyAngry;
        var beep = document.getElementById("beep")
        beep.play();
    } else if (hurhurhurhur == 5 || hurhurhurhur == 7) {
        var rolera = document.getElementById("hur");
        rolera.style.visibility = "visible";
        var hur = document.getElementById("funny");
        hur.play();        
    } else {
        var jumpscare = document.getElementById("jumpscare");
        jumpscare.style.visibility = "visible";
        var scream = document.getElementById("scream");
        scream.play();
    }{
    }
}