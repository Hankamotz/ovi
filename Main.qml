import QtQuick 2.4
import Ubuntu.Components 1.3


MainView {

    objectName: "mainView"


    applicationName: "ovi.hankamotz"
    Image {
        width: 2400; height: 2400
        fillMode: Image.Tile
            horizontalAlignment: Image.AlignLeft
            verticalAlignment: Image.AlignTop
        source: "patron.png"
    }


    width: units.gu(100)
    height: units.gu(75)

    PageStack {
                     id: mainPageStack
                     Component.onCompleted: push(pageMain)
                     anchors.fill: parent
                            width: parent.width

    Page {
        id: pageMain
        visible: false



        header: PageHeader {
            id: pageHeader
            title: i18n.tr("Ovi")
                       StyleHints {
                           backgroundColor: "#FEDB00"
                           foregroundColor: "#000000"
                           dividerColor: "transparent"

                       }
            leadingActionBar {
                                                             numberOfSlots: 1
                                                             actions: [

                                                                 Action {
                                                                     id: actionAbout
                                                                     iconName: "info"
                                                                     text: i18n.tr("About")
                                                                     onTriggered:  mainPageStack.push(Qt.resolvedUrl("About.qml"))
                                                                      },

                                                                 Action {
                                                                     id: actionDesktop
                                                                     iconName: "like"
                                                                     text: i18n.tr("Rate this App")
                                                                     onTriggered: {
                                                                                         Qt.openUrlExternally("scope://com.canonical.scopes.clickstore?q=ovi.hankamotz")
                                                                         }
                                                                                     }



                                                             ]
                                                         }
            Image {
                id: splashImage
                source: "splash.png"
                anchors{

                    horizontalCenter: parent.horizontalCenter
                    top: pageHeader.bottom
                    topMargin: units.gu(5)
            }

            }

            Label {
                anchors {
                    horizontalCenter: parent.horizontalCenter
                    top: splashImage.bottom
                }
                id: label
                objectName: "label"
                text: i18n.tr("v.0.4")
                fontSize: "large"
            }

            Button {

                id:houseButton
                width: units.gu(16)
                height: units.gu(6)
                color: UbuntuColors.green
                text: i18n.tr("Ovi's house")
                onTriggered:  mainPageStack.push(Qt.resolvedUrl("Room.qml"))
                anchors {
                    horizontalCenter: parent.horizontalCenter
                    top: label.bottom
                    topMargin: units.gu(5)
                }

            }
            Button {

                id:playgroundButton
                width: units.gu(16)
                height: units.gu(6)
                color: UbuntuColors.green
                text: i18n.tr("playground")
                onTriggered:  mainPageStack.push(Qt.resolvedUrl("Playground.qml"))
                anchors {
                    horizontalCenter: parent.horizontalCenter
                    top: houseButton.bottom
                    topMargin: units.gu(3)
                }

            }
            Image {
                id: bottomImage
                 source: "pic.png"
                anchors {
                    horizontalCenter: parent.horizontalCenter
                    top: playgroundButton.bottom
                    topMargin: units.gu(6)
                }

            }

        }
       }
    }
}

