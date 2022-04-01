
  //When the option is changed 
  var changeSelection = function () {
      //Hide all of the elements
      hideAll();
      //If the select value is > 0 (is valid)
      if (document.getElementById("select").value > 0) {
          //Set the element display to "block" (block is typically the default display type)
          document.getElementById("grow" + document.getElementById("select").value).style.display = "block";
          document.getElementById("comp" + document.getElementById("select").value).style.display = "block";
          document.getElementById("img" + document.getElementById("select").value).style.display = "block";
          document.getElementById("nav0").style.display = "none";
          document.getElementById("nav" + document.getElementById("select").value).style.display = "block";
      }
      else if (document.getElementById("select").value == 0){
        document.getElementById("nav0").style.display = "block";
      }
  };
  //Function to hide all of the elements
  var hideAll = function () {
      //Loop through the elements
      for (var i = 1; i <= 2; i++) {
          //Hide each one
          document.getElementById("grow" + i).style.display = "none";
          document.getElementById("comp" + i).style.display = "none";
          document.getElementById("img" + i).style.display = "none";
          document.getElementById("nav" + i).style.display = "none";
      }
  };
  //This function automaticaly executes when the page is loaded
  (function () {
      //Hide all of the elements
      hideAll();
  })()
