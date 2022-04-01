
  var clickSelectionChartpH = function () {
    hideAll();
    document.getElementById("myChartpH").style.display = "block";
    document.getElementById("myChartpHMean").style.display = "block";
    document.getElementById("myChartpHDif").style.display = "block";
    document.getElementById("myChartpHPercent").style.display = "block";
};

var clickSelectionChartTDS = function () {
    document.getElementById("myChartpH").style.display = "none";
    document.getElementById("myChartpHMean").style.display = "none";
    document.getElementById("myChartpHDif").style.display = "none";
    document.getElementById("myChartpHPercent").style.display = "none";
    hideAll();
    document.getElementById("myChartTDS").style.display = "block";
    document.getElementById("myChartTDSMean").style.display = "block";
    document.getElementById("myChartTDSDif").style.display = "block";
    document.getElementById("myChartTDSPercent").style.display = "block";
};

var clickSelectionChartCO2 = function () {
    document.getElementById("myChartpHMean").style.display = "none";
    document.getElementById("myChartpH").style.display = "none";
    document.getElementById("myChartpHDif").style.display = "none";
    document.getElementById("myChartpHPercent").style.display = "none";
    hideAll();
    document.getElementById("myChartCO2").style.display = "block";
    document.getElementById("myChartCO2Mean").style.display = "block";
    document.getElementById("myChartCO2Dif").style.display = "block";
    document.getElementById("myChartCO2Percent").style.display = "block";
};

var clickSelectionChartWater = function () {
    document.getElementById("myChartpHMean").style.display = "none";
    document.getElementById("myChartpH").style.display = "none";
    document.getElementById("myChartpHDif").style.display = "none";
    document.getElementById("myChartpHPercent").style.display = "none";
    hideAll();
    document.getElementById("myChartWater").style.display = "block";
    document.getElementById("myChartWaterMean").style.display = "block";
    document.getElementById("myChartWaterDif").style.display = "block";
    document.getElementById("myChartWaterPercent").style.display = "block";
};

var clickSelectionChartHum = function () {
    document.getElementById("myChartpHMean").style.display = "none";
    document.getElementById("myChartpH").style.display = "none";
    document.getElementById("myChartpHDif").style.display = "none";
    document.getElementById("myChartpHPercent").style.display = "none";
    hideAll();
    document.getElementById("myChartHum").style.display = "block";
    document.getElementById("myChartHumMean").style.display = "block";
    document.getElementById("myChartHumDif").style.display = "block";
    document.getElementById("myChartHumPercent").style.display = "block";
};

var clickSelectionChartTemp = function () {
    document.getElementById("myChartpHMean").style.display = "none";
    document.getElementById("myChartpH").style.display = "none";
    document.getElementById("myChartpHDif").style.display = "none";
    document.getElementById("myChartpHPercent").style.display = "none";
    hideAll();
    document.getElementById("myChartTemp").style.display = "block";
    document.getElementById("myChartTempMean").style.display = "block";
    document.getElementById("myChartTempDif").style.display = "block";
    document.getElementById("myChartTempPercent").style.display = "block";
};

var hideAll = function () {

        document.getElementById("myChartTDS").style.display = "none";
        document.getElementById("myChartCO2").style.display = "none";
        document.getElementById("myChartWater").style.display = "none";
        document.getElementById("myChartHum").style.display = "none";
        document.getElementById("myChartTemp").style.display = "none";

        document.getElementById("myChartTempMean").style.display = "none";
        document.getElementById("myChartTDSMean").style.display = "none";
        document.getElementById("myChartCO2Mean").style.display = "none";
        document.getElementById("myChartHumMean").style.display = "none";
        document.getElementById("myChartWaterMean").style.display = "none";

        document.getElementById("myChartTempDif").style.display = "none";
        document.getElementById("myChartTDSDif").style.display = "none";
        document.getElementById("myChartCO2Dif").style.display = "none";
        document.getElementById("myChartHumDif").style.display = "none";
        document.getElementById("myChartWaterDif").style.display = "none";

        document.getElementById("myChartTempPercent").style.display = "none";
        document.getElementById("myChartTDSPercent").style.display = "none";
        document.getElementById("myChartCO2Percent").style.display = "none";
        document.getElementById("myChartHumPercent").style.display = "none";
        document.getElementById("myChartWaterPercent").style.display = "none";

};
(function () {
    hideAll();
})()

