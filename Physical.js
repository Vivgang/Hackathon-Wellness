
function submit() {
    var x = document.getElementById("frm1");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("correct").innerHTML = "Is this correct?(order of question)<br>" + text + "If something doesn't apply to you, change it and resubmit" ;
}
