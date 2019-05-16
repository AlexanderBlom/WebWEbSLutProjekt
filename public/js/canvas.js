let
//Variables
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    height = 260,
    width = 240,
    stringdist = (width * 0.87) / 6,
    fretdist = (height - 50) / 4,
    //Strings
    strs = [
        {x: 1, y: 45, width: 3},
        {x: 2, y: 45, width: 3},
        {x: 3, y: 45, width: 3},
        {x: 4, y: 45, width: 3},
        {x: 5, y: 45, width: 3},
        {x: 6, y: 45, width: 3}
    ],
    //Event listeners
    aCBtn = document.getElementById("aChord");

    aCBtn.addEventListener("click", () => {
        getChords(aCBtn.getAttribute("value")).then(resolve, reject);
    });

    bCBtn = document.getElementById("bChord");

    bCBtn.addEventListener("click", () => {
        getChords(bCBtn.getAttribute("value")).then(resolve, reject);
    });

    cCBtn = document.getElementById("cChord");

    cCBtn.addEventListener("click", () => {
        getChords(cCBtn.getAttribute("value")).then(resolve, reject);
    });

    dCBtn = document.getElementById("dChord");

    dCBtn.addEventListener("click", () => {
        getChords(dCBtn.getAttribute("value")).then(resolve, reject);
    });

    eCBtn = document.getElementById("eChord");

    eCBtn.addEventListener("click", () => {
        getChords(eCBtn.getAttribute("value")).then(resolve, reject);
    });

    fCBtn = document.getElementById("fChord");

    fCBtn.addEventListener("click", () => {
        getChords(fCBtn.getAttribute("value")).then(resolve, reject);
    });

    gCBtn = document.getElementById("gChord");

    gCBtn.addEventListener("click", () => {
        getChords(gCBtn.getAttribute("value")).then(resolve, reject);
    });


 
//Promise functions
function resolve(response) {
    chord = JSON.parse(response);
    drawChord();
    console.log("Fetched chord");
}
function reject(response) {
    console.log("Could not fetch chord");
    console.log(response);
}
ctx.canvas.height = height + 45;
ctx.canvas.width = width;

var chord = {}; 
fretboard();

//Draws the fretboard
function fretboard(){
    ctx.clearRect(0, 0, width, height)

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(stringdist, 45, width - 65, height);


    ctx.fillStyle = "#000000";
    strs.forEach(e => {
        ctx.fillRect(e.x * stringdist, e.y, e.width, height);
    });

    ctx.fillRect(stringdist, 45, width - 65, 5);
    ctx.fillRect(stringdist, fretdist + 45, width - 65, 3);
    ctx.fillRect(stringdist, (fretdist * 2) + 45, width - 65, 3);
    ctx.fillRect(stringdist, (fretdist * 3) + 45, width - 65, 3);
    ctx.fillRect(stringdist, (fretdist * 4) + 45, width - 65, 3);
    ctx.fillRect(stringdist, (height - 3) + 45, width - 65, 3);
}

//Draws the chord
function drawChord(){
    fretboard();

    ctx.beginPath();
    ctx.arc((strs[0].x * stringdist) + 2, fretdist * chord.E + 20, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc((strs[1].x * stringdist) + 2, fretdist * chord.A + 20, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc((strs[2].x * stringdist) + 2, fretdist * chord.D + 20, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc((strs[3].x * stringdist) + 2, fretdist * chord.G + 20, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc((strs[4].x * stringdist) + 2, fretdist * chord.B + 20, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc((strs[5].x * stringdist) + 2, fretdist * chord.E2 + 20, 15, 0, 2 * Math.PI);
    ctx.stroke();
}

//Fetch the chord from db
function getChords(id){
    return new Promise( (resolve,reject) => {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == XMLHttpRequest.DONE) {
                if(httpRequest.status == 200) {
                    resolve(httpRequest.responseText);
                } else {
                    console.log("Failed to create request instance");
                    reject(false);
                }
            }
        }
        httpRequest.open('GET', 'chord/' + id);
        httpRequest.send();
    });
    
}