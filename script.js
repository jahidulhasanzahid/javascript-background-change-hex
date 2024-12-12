function changeColor(){
    var hex_number = ["0","1","2","4","5","6","7","8","9","A","B","C","D","E","F"];

    var hexcode = '';
    for (var i = 0; i < 6; i++) {
        hexcode += hex_number[Math.floor(Math.random() * hex_number.length)];
    }

    document.getElementById("hex-code").innerHTML = hexcode;
    document.getElementsByTagName("body")[0].style.background = "#"+hexcode;
}