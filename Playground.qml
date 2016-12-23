import QtQuick 2.4
import Ubuntu.Components 1.3
import Ubuntu.Web 0.2



        Page {
            id: playgroundPage
            visible: true

        header: PageHeader {
            id: pageHeader
            title: i18n.tr("Playground")
            StyleHints {
                           backgroundColor: "#FEDB00"
                           foregroundColor: "#000000"
                           dividerColor: "transparent"

                       }
            leadingActionBar {
                           numberOfSlots:1
                           actions: [
                               Action {
                                   id: actionback
                                   iconName: "go-previous"
                                   text: i18n.tr("Back")
                                   onTriggered: {
                                                           onClicked: mainPageStack.pop(playgroundPage)
                                                       }
                               }
                           ]
                       }

        }


        WebContext {
                    id: webcontext
                    userAgent: myUA

                    }

        WebView {


                    id: webview
                    anchors {
                        fill: parent
                        bottom: parent.bottom
                        top: pageHeader.bottom
                        topMargin: units.gu(6)

                    }



                    context: webcontext
                    url: "playground/index.html"
                    preferences.localStorageEnabled: true
                                      preferences.allowFileAccessFromFileUrls: true
                                      preferences.allowUniversalAccessFromFileUrls: true
                                      preferences.appCacheEnabled: true
                                      preferences.javascriptCanAccessClipboard: true
                                      filePicker: filePickerLoader.item

                                      function navigationRequestedDelegate(request) {
                                                      var url = request.url.toString();
                                                      var pattern = myPattern.split(',');
                                                      var isvalid = false;

                                                      if (Conf.hapticLinks) {
                                                          vibration.start()
                                                      }

                                                      if (Conf.audibleLinks) {
                                                          clicksound.play()
                                                      }

                                                      for (var i=0; i<pattern.length; i++) {
                                                          var tmpsearch = pattern[i].replace(/\*/g,'(.*)')
                                                          var search = tmpsearch.replace(/^https\?:\/\//g, '(http|https):\/\/');
                                                          if (url.match(search)) {
                                                             isvalid = true;
                                                             break
                                                          }
                                                      }
                                                      if(isvalid == false) {
                                                          console.warn("Opening remote: " + url);
                                                          Qt.openUrlExternally(url)
                                                          request.action = Oxide.NavigationRequest.ActionReject
                                                      }
                                                  }
                                                  Component.onCompleted: {
                                                      preferences.localStorageEnabled = true
                                                      if (Qt.application.arguments[1].toString().indexOf(myUrl) > -1) {
                                                          console.warn("got argument: " + Qt.application.arguments[1])
                                                          url = Qt.application.arguments[1]
                                                      }
                                                      console.warn("url is: " + url)
                                                  }
                                                  onGeolocationPermissionRequested: { request.accept() }
                                                  Loader {
                                                      id: filePickerLoader
                                                      source: "ContentPickerDialog.qml"
                                                      asynchronous: true
                                                  }
                                              }
                          Connections {
                                  target: UriHandler
                                  onOpened: {
                                      if (uris.length === 0 ) {
                                          return;
                                      }
                                      webview.url = uris[0]
                                      console.warn("uri-handler request")
                                  }
                              }


                          }
