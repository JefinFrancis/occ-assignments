define(
  //-------------------------------------------------------------------
  // DEPENDENCIES
  //-------------------------------------------------------------------
  // 
  //-------------------------------------------------------------------
  // WIDGET DEFINITION
  //-------------------------------------------------------------------
  function () {
    "use strict";

    function Brands(brandName, imageUrl) {
      this.brandName = brandName;
      this.imageUrl = imageUrl;

      return this;
    }

    return {
      onLoad: function (widget) {
        widget.brands = [];
        widget.brands.push(new Brands("Centennial", "/file/general/centennial.png"));
        widget.brands.push(new Brands("GBC", "/file/general/gbc.png"));
        widget.brands.push(new Brands("Greenball", "/file/general/greenball.png"));
        widget.brands.push(new Brands("Kanati", "/file/general/kanati.png"));
      }
    }
  }
);
