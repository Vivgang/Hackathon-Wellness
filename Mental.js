var x = document.getElementById("frm1");
var weight_need = 0;
var lifestyle = "";
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
                var sleep = "0";
                var age = document.forms["frm1"]["2"].value;
                var stress = document.forms["frm1"]["3"].value;
                if (age <= 2) {
                    sleep = "11-14";
                }
                else if (age <= 5) {
                    sleep = "10-13";
                }
                else if (age <= 12) {
                    sleep = "9-12";
                }
                else if (age <= 18) {
                    sleep = "8-10";
                }
                else if (age <= 64) {
                    sleep = "7-9";
                }
                else if (age >= 65) {
                    sleep = "7-8";
                }
                var stress_h = "";
                if (stress == "High") {
                    stress_h = "Given your stress levels, we believe that you should try to increase your recreational time throughout you day so you can reduce some of your load.";
                }
                else if (stess == "Low") {
                    stress_h = "Given your stress levels, we believe that you should try to decrease your recreational time throughout you day so you can be more prepared for future work overload.";
                }
                else if (stress == "Medium") {
                    stress_h = "Given your stress levels, we believe that you should try to maintain your recreational time throughout you day and try not to alter your schedule to much because it looks to be that your life is running smoothly.";
                }
                document.getElementById("help").innerHTML = "Seeing your results, your age indicates that, for you, it is recomended to sleep " + sleep + "hrs a night for a well rested day. Additionally, " + stress_h + " Thanks for using Nutrimind! Go back to the home page for more wellness information!";

            }

        }

    }

}    


