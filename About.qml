import QtQuick 2.4
import Ubuntu.Components 1.3

/*!
    \brief MainView with a Label and Button elements.
*/

            
    Page {
            
            id: aboutPage
            visible: false

            header: PageHeader {
            id: pageHeader
            title: i18n.tr("About")
            StyleHints {
                           backgroundColor: "#FEDB00"
                           foregroundColor: "#000000"
                           dividerColor: "transparent"

                       }
            leadingActionBar {
                           numberOfSlots: 1
                           actions: [
                               Action {
                                   id: actionSettings
                                   iconName: "back"
                                   text: i18n.tr("Back")
                                   onTriggered: {
                                                           onClicked: mainPageStack.pop(aboutPage)
                                                       }
                               }
                           ]
                       }
        }


            UbuntuShape {
                                           id: appImage
                                           anchors{

                                               horizontalCenter: parent.horizontalCenter
                                               top: pageHeader.bottom
                                               topMargin: units.gu(6)
                                       }
                                           width: units.gu(15)
                                           height: units.gu(15)
                                           source: Image {
                                               source: Qt.resolvedUrl("ovi.png")
                                           }
        Label {
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: appImage.bottom
                topMargin: units.gu(6)
            }
            id: label
            objectName: "label"
            text: i18n.tr("0vi v.0.4")
            fontSize: "large"
        }
        Label {
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: label.bottom
                topMargin: units.gu(2)
            }
            id: label1
            objectName: "label"
            text: i18n.tr("2016")
        }
        Label {
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: label1.bottom
                topMargin: units.gu(2)
            }
            id: label2
            objectName: "label"
            text: i18n.tr("Andima Landaluze  <a href=\"mailto://andimalo@hotmail.es\">andimalo@hotmail.es</a>")
        }
        Label {
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: label2.bottom
                topMargin: units.gu(2)
            }
            id: label3
            objectName: "label"
            text: i18n.tr("license GNU GPL v.3")

        }
        Label {
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: label3.bottom
                topMargin: units.gu(2)
            }
            id: label4
            objectName: "label"
            text: i18n.tr("Source code available on <a href=\"https://github.com/Hankamotz/ovi\">GitHub</a>")

        }
        Label {
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: label4.bottom
                topMargin: units.gu(2)
            }
            id: label5
            objectName: "label"
            text: i18n.tr("made with Gdevelop")

        }
        Image {
            anchors {
                horizontalCenter: parent.horizontalCenter
                top: label5.bottom
                topMargin: units.gu(6)
            }
            id: imageGdevelop
            source: "logogdevelop.png"

        }

        }
    }




