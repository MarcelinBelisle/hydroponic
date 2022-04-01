
  //When the option is changed 
  var changeSelectionChart = function () {
    //Hide all of the elements
    hideAll();
    //If the select value is > 0 (is valid)
    if (document.getElementById("select").value != 0) {
        //Set the element display to "block" (block is typically the default display type)
        document.getElementById("myChart" + document.getElementById("select").value).style.display = "block";
        document.getElementById("precision" + document.getElementById("select").value).style.display = "block";
 
    }
};
//Function to hide all of the elements
var hideAll = function () {

        document.getElementById("myChartpH").style.display = "none";
        document.getElementById("myChartTDS").style.display = "none";
        document.getElementById("myChartCO2").style.display = "none";
        document.getElementById("myChartWater").style.display = "none";
        document.getElementById("myChartHum").style.display = "none";
        document.getElementById("myChartTemp").style.display = "none";
        document.getElementById("precisionpH").style.display = "none";
    
};
//This function automaticaly executes when the page is loaded
(function () {
    //Hide all of the elements
    hideAll();
})()
