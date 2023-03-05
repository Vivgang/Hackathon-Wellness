var x = document.getElementById("frm1");
function submit() {
   
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("correct").innerHTML = "Is this correct?(order of question)<br>" + text + "If something doesn't apply to you, change it and resubmit" ;
}
var fail = false;

function confirm() {
    
    if (document.forms["frm1"]["0"].value == "") {
        alert("All info must be filled out");
        fail = false;
    }
    else {
        if (document.forms["frm1"]["1"].value == "") {
            alert("All info must be filled out");
            fail = false;
        }
        else {
            if (document.forms["frm1"]["2"].value == "") {
                alert("All info must be filled out");
                fail = false;
            }
            else {
                if (document.forms["frm1"]["3"].value == "") {
                    alert("All info must be filled out");
                    fail = false;
                }
                else {
                    if (document.forms["frm1"]["4"].value == "") {
                        alert("All info must be filled out");
                        fail = false;
                    }
                    else {
                        if (document.forms["frm1"]["5"].value == "") {
                            alert("All info must be filled out");
                            fail = false;
                        }
                        else {
                            if (document.forms["frm1"]["6"].value == "") {
                                alert("All info must be filled out");
                                fail = false;
                            }
                            else {
                                fail = true
                            }
                        }
                    }
                }
            }
        }
    }
}

if (fail == true) {

}
