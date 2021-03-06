
/*
Locale.view
 */

(function() {
  sap.ui.jsview("com.mitsuruog.sapui5.showroom.view.Locale", {
    getControllerName: function() {
      return "com.mitsuruog.sapui5.showroom.view.Locale";
    },
    createContent: function(oController) {
      this.page = new sap.m.Page({
        title: "{i18n>title}",
        subHeader: new sap.m.Bar({
          contentRight: [
            new sap.m.Text({
              text: "{i18n>changeLocale}"
            }), new sap.m.Select({
              id: this.createId("localeSelect"),
              items: [
                new sap.ui.core.Item({
                  key: "en",
                  text: "en"
                }), new sap.ui.core.Item({
                  key: "ja",
                  text: "ja"
                }), new sap.ui.core.Item({
                  key: "de",
                  text: "de"
                }), new sap.ui.core.Item({
                  key: "fr",
                  text: "fr"
                }), new sap.ui.core.Item({
                  key: "zh-cn",
                  text: "zh-cn"
                })
              ],
              change: [oController.onChange, oController]
            })
          ]
        }),
        content: [
          new sap.m.Text({
            text: "{i18n>text}"
          })
        ],
        footer: new sap.m.Bar({
          contentRight: [
            new sap.m.Button({
              type: "Accept",
              text: "{i18n>button}"
            })
          ]
        })
      });
      return this.page;
    }
  });

}).call(this);
