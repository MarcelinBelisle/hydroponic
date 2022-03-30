
  var clickSelectionChartpH = function () {
    hideAll();
    document.getElementById("myChartpH").style.display = "block";
    document.getElementById("myChartpHMean").style.display = "block";
};

var clickSelectionChartTDS = function () {
    hideAll();
    document.getElementById("myChartTDS").style.display = "block";
    document.getElementById("myChartTDSMean").style.display = "block";
};

var clickSelectionChartCO2 = function () {
    hideAll();
    document.getElementById("myChartCO2").style.display = "block";
    document.getElementById("myChartCO2Mean").style.display = "block";
};

var clickSelectionChartWater = function () {
    hideAll();
    document.getElementById("myChartWater").style.display = "block";
    document.getElementById("myChartWaterMean").style.display = "block";
};

var clickSelectionChartHum = function () {
    hideAll();
    document.getElementById("myChartHum").style.display = "block";
    document.getElementById("myChartHumMean").style.display = "block";
};

var clickSelectionChartTemp = function () {
    hideAll();
    document.getElementById("myChartTemp").style.display = "block";
    document.getElementById("myChartTempMean").style.display = "block";
};

var hideAll = function () {

        document.getElementById("myChartpH").style.display = "none";
        document.getElementById("myChartTDS").style.display = "none";
        document.getElementById("myChartCO2").style.display = "none";
        document.getElementById("myChartWater").style.display = "none";
        document.getElementById("myChartHum").style.display = "none";
        document.getElementById("myChartTemp").style.display = "none";
        document.getElementById("myChartTempMean").style.display = "none";
        document.getElementById("myChartpHMean").style.display = "none";
        document.getElementById("myChartTDSMean").style.display = "none";
        document.getElementById("myChartCO2Mean").style.display = "none";
        document.getElementById("myChartHumMean").style.display = "none";
        document.getElementById("myChartWaterMean").style.display = "none";
    
};
(function () {
    hideAll();
})()

