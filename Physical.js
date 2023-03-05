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
                                if(document.forms["frm1"]["7"].value == "") {
                                    alert("All info must be filled out");
                                    fail = false;
                                }
                                else {
                                    var weight = document.forms["frm1"]["5"].value;
                                    var iweight = document.forms["frm1"]["6"].value;
                                    var age = document.forms["frm1"]["3"].value;
                                    var height = document.forms["frm1"]["4"].value;
                                    var gender = document.forms["frm1"]["2"].value;
                                    var activeness = document.forms["frm1"]["7"].value
                                    weight_need = Math.abs(weight - iweight);
                                    if (weight > iweight) {
                                        lifestyle = "cut"
                                    }
                                    else if (weight < iweight) {
                                        lifestyle = "bulk";
                                    }
                                    else if (weight = iweight) {
                                        var lifestyle = "maintain";
                                    }
                                    if (lifestyle == "cut" || lifestyle == "bulk") {
                                        document.getElementById("help_title").innerHTML = "According to your data you want to " + lifestyle + " by " + weight_need + "lbs. If you want to change your path resubmit your info that fits your needs.";
                                    }
                                    else if (lifestyle == "maintain") {
                                        document.getElementById("help_title").innerHTML = "According to your data you want to " + lifestyle + " your weight. If you want to change your path resubmit your info that fits your needs.";
                                    }
                                    if (lifestyle == "cut" || lifestyle == "bulk") {
                                        document.getElementById("help_title").innerHTML = "According to your data you want to " + lifestyle + " by " + weight_need + "lbs. If you want to change your path resubmit your info that fits your needs.";
                                    }
                                    else if (lifestyle == "maintain") {
                                        document.getElementById("help_title").innerHTML = "According to your data you want to " + lifestyle + " your weight. If you want to change your path resubmit your info that fits your needs.";
                                    }
                                    var BMR = 0;
                                    if (gender == "M") {
                                        BMR = 655 + (9.6 * weight * 0.453592) + (1.8 * height * 2.54) - (4.7 * age);
                                    }
                                    else if (gender == "F") {
                                        BMR = 66 + (13.7 * weight * 0.453592) + (5 * height * 2.54) - (6.3 * age);
                                    }
                                    var TDEE = 0;
                                    if (activeness == "Sedentary") {
                                        TDEE = BMR * 1.2;
                                    }
                                    else if (activeness == "Lightly") {
                                        TDEE = BMR * 1.375;
                                    }
                                    else if (activeness == "Moderately") {
                                        TDEE = BMR * 1.55;
                                    }
                                    else if (activeness == "Very") {
                                        TDEE = BMR * 1.725;
                                    }
                                    else if (activeness == "Extremely") {
                                        TDEE = BMR * 1.9;
                                    }
                                    if (lifestyle == "cut") {
                                        TDEE = TDEE * .80;
                                    }
                                    else if (lifestyle == "bulk") {
                                        TDEE = TDEE + 250;
                                    }
                                    BMR = Math.round(BMR);
                                    TDEE = Math.round(TDEE);
                                    var protein = weight;
                                    var fat = 0.5 * weight;
                                    var carbs = TDEE - protein - fat;
                                    document.getElementById("help").innerHTML = "According to your data your estimated BMR(Basal Metobolic Rate) is " + BMR + " and using this and your chosen lifestyle pathway(cut/bulk/maintain), we believe that your TDEE(Total Daily Energy Expenditure) would be " + TDEE + ". In other words to achieve your intended weight we recommend you consume " + TDEE + " calories everyday. More specifically, " + protein + "g of protein, " + fat + "g of fat, and " + carbs + "g of carbohydrates. Thanks for using Nutrimind and click the button to go back to home page."
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


