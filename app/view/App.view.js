
/*
App.view
 */

(function() {
  sap.ui.jsview("com.mitsuruog.sapui5.showroom.view.App", {
    createContent: function(oController) {
      this.setDisplayBlock(true);
      this.app = new sap.m.SplitApp("appConteiner", {
        afterDetailNavigate: function() {
          return this.hideMaster();
        },
        homeIcon: {
          "phone": "img/57_iPhone_Desktop_Launch.png",
          "phone@2": "img/114_iPhone-Retina_Web_Clip.png",
          "tablet": "img/72_iPad_Desktop_Launch.png",
          "tablet@2": "img/144_iPad_Retina_Web_Clip.png",
          "favicon": "favicon.ico",
          "precomposed": false
        }
      });
      return this.app;
    }
  });

}).call(this);
