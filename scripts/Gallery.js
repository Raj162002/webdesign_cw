function expandImage(expandedId) {
    var allExpandedImages = document.querySelectorAll('.expanded-image');
    allExpandedImages.forEach(function(expandedImage) {
      if (expandedImage.id === expandedId) {
        if (expandedImage.style.display === "none") {
          expandedImage.style.display = "block";
        } else {
          expandedImage.style.display = "none";
        }
      } else {
        expandedImage.style.display = "none";
      }
    });
  }
  
  function changeColor(elementId) {
    var colorId = elementId.charAt(elementId.length - 1);
    var color = document.getElementById("color" + colorId).value;
    document.getElementById(elementId).style.color = color;
  }
  
  function changeFont(elementId) {
    var fontId = elementId.charAt(elementId.length - 1);
    var font = document.getElementById("font" + fontId).value;
    document.getElementById(elementId).style.fontFamily = font;
  }
  function changeBackgroundColor(colorId, expandedId) {
    var bgColor = document.getElementById(colorId).value;
    document.getElementById(expandedId).style.backgroundColor = bgColor;
  }
