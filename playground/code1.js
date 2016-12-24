gdjs.rockpaperCode = {};


gdjs.rockpaperCode.GDgameoverObjects1= [];
gdjs.rockpaperCode.GDgameoverObjects2= [];
gdjs.rockpaperCode.GDgameoverObjects3= [];
gdjs.rockpaperCode.GDgameoverObjects4= [];
gdjs.rockpaperCode.GDcoinObjects1= [];
gdjs.rockpaperCode.GDcoinObjects2= [];
gdjs.rockpaperCode.GDcoinObjects3= [];
gdjs.rockpaperCode.GDcoinObjects4= [];
gdjs.rockpaperCode.GDmonedaObjects1= [];
gdjs.rockpaperCode.GDmonedaObjects2= [];
gdjs.rockpaperCode.GDmonedaObjects3= [];
gdjs.rockpaperCode.GDmonedaObjects4= [];
gdjs.rockpaperCode.GDtapObjects1= [];
gdjs.rockpaperCode.GDtapObjects2= [];
gdjs.rockpaperCode.GDtapObjects3= [];
gdjs.rockpaperCode.GDtapObjects4= [];
gdjs.rockpaperCode.GDinstructionObjects1= [];
gdjs.rockpaperCode.GDinstructionObjects2= [];
gdjs.rockpaperCode.GDinstructionObjects3= [];
gdjs.rockpaperCode.GDinstructionObjects4= [];
gdjs.rockpaperCode.GDhandObjects1= [];
gdjs.rockpaperCode.GDhandObjects2= [];
gdjs.rockpaperCode.GDhandObjects3= [];
gdjs.rockpaperCode.GDhandObjects4= [];
gdjs.rockpaperCode.GDrockiconObjects1= [];
gdjs.rockpaperCode.GDrockiconObjects2= [];
gdjs.rockpaperCode.GDrockiconObjects3= [];
gdjs.rockpaperCode.GDrockiconObjects4= [];
gdjs.rockpaperCode.GDpapericonObjects1= [];
gdjs.rockpaperCode.GDpapericonObjects2= [];
gdjs.rockpaperCode.GDpapericonObjects3= [];
gdjs.rockpaperCode.GDpapericonObjects4= [];
gdjs.rockpaperCode.GDsccissoriconObjects1= [];
gdjs.rockpaperCode.GDsccissoriconObjects2= [];
gdjs.rockpaperCode.GDsccissoriconObjects3= [];
gdjs.rockpaperCode.GDsccissoriconObjects4= [];
gdjs.rockpaperCode.GDoviObjects1= [];
gdjs.rockpaperCode.GDoviObjects2= [];
gdjs.rockpaperCode.GDoviObjects3= [];
gdjs.rockpaperCode.GDoviObjects4= [];
gdjs.rockpaperCode.GDovihandObjects1= [];
gdjs.rockpaperCode.GDovihandObjects2= [];
gdjs.rockpaperCode.GDovihandObjects3= [];
gdjs.rockpaperCode.GDovihandObjects4= [];

gdjs.rockpaperCode.conditionTrue_0 = {val:false};
gdjs.rockpaperCode.condition0IsTrue_0 = {val:false};
gdjs.rockpaperCode.condition1IsTrue_0 = {val:false};

gdjs.rockpaperCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.rockpaperCode.GDgameoverObjects1.length = 0;
gdjs.rockpaperCode.GDgameoverObjects2.length = 0;
gdjs.rockpaperCode.GDgameoverObjects3.length = 0;
gdjs.rockpaperCode.GDgameoverObjects4.length = 0;
gdjs.rockpaperCode.GDcoinObjects1.length = 0;
gdjs.rockpaperCode.GDcoinObjects2.length = 0;
gdjs.rockpaperCode.GDcoinObjects3.length = 0;
gdjs.rockpaperCode.GDcoinObjects4.length = 0;
gdjs.rockpaperCode.GDmonedaObjects1.length = 0;
gdjs.rockpaperCode.GDmonedaObjects2.length = 0;
gdjs.rockpaperCode.GDmonedaObjects3.length = 0;
gdjs.rockpaperCode.GDmonedaObjects4.length = 0;
gdjs.rockpaperCode.GDtapObjects1.length = 0;
gdjs.rockpaperCode.GDtapObjects2.length = 0;
gdjs.rockpaperCode.GDtapObjects3.length = 0;
gdjs.rockpaperCode.GDtapObjects4.length = 0;
gdjs.rockpaperCode.GDinstructionObjects1.length = 0;
gdjs.rockpaperCode.GDinstructionObjects2.length = 0;
gdjs.rockpaperCode.GDinstructionObjects3.length = 0;
gdjs.rockpaperCode.GDinstructionObjects4.length = 0;
gdjs.rockpaperCode.GDhandObjects1.length = 0;
gdjs.rockpaperCode.GDhandObjects2.length = 0;
gdjs.rockpaperCode.GDhandObjects3.length = 0;
gdjs.rockpaperCode.GDhandObjects4.length = 0;
gdjs.rockpaperCode.GDrockiconObjects1.length = 0;
gdjs.rockpaperCode.GDrockiconObjects2.length = 0;
gdjs.rockpaperCode.GDrockiconObjects3.length = 0;
gdjs.rockpaperCode.GDrockiconObjects4.length = 0;
gdjs.rockpaperCode.GDpapericonObjects1.length = 0;
gdjs.rockpaperCode.GDpapericonObjects2.length = 0;
gdjs.rockpaperCode.GDpapericonObjects3.length = 0;
gdjs.rockpaperCode.GDpapericonObjects4.length = 0;
gdjs.rockpaperCode.GDsccissoriconObjects1.length = 0;
gdjs.rockpaperCode.GDsccissoriconObjects2.length = 0;
gdjs.rockpaperCode.GDsccissoriconObjects3.length = 0;
gdjs.rockpaperCode.GDsccissoriconObjects4.length = 0;
gdjs.rockpaperCode.GDoviObjects1.length = 0;
gdjs.rockpaperCode.GDoviObjects2.length = 0;
gdjs.rockpaperCode.GDoviObjects3.length = 0;
gdjs.rockpaperCode.GDoviObjects4.length = 0;
gdjs.rockpaperCode.GDovihandObjects1.length = 0;
gdjs.rockpaperCode.GDovihandObjects2.length = 0;
gdjs.rockpaperCode.GDovihandObjects3.length = 0;
gdjs.rockpaperCode.GDovihandObjects4.length = 0;


{



}


{

gdjs.rockpaperCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.rockpaperCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.rockpaperCode.GDmonedaObjects1.createFrom(runtimeScene.getObjects("moneda"));
gdjs.rockpaperCode.GDovihandObjects1.createFrom(runtimeScene.getObjects("ovihand"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.rockpaperCode.GDmonedaObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDmonedaObjects1[i].hide();
}
for(var i = 0, len = gdjs.rockpaperCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDcoinObjects1[i].hide();
}
for(var i = 0, len = gdjs.rockpaperCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDgameoverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDovihandObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDovihandObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.storage.readNumberFromJSONFile("MONEY", "MONEY.xml", runtimeScene, runtimeScene.getVariables().getFromIndex(2));
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "mix.ogg", 1, false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(7).setNumber(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "music");
}}

}


{

gdjs.rockpaperCode.GDinstructionObjects1.createFrom(runtimeScene.getObjects("instruction"));
gdjs.rockpaperCode.GDtapObjects1.createFrom(runtimeScene.getObjects("tap"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.5, "hasiera");
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.rockpaperCode.GDtapObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDtapObjects1[i].setOpacity(gdjs.rockpaperCode.GDtapObjects1[i].getOpacity() - (128*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDinstructionObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDinstructionObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 24, "music");
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "music");
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "mix.ogg", 1, false, 100, 1);
}}

}


{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "hasiera");
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(4).setNumber(1);
}}

}


{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) == 1;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.rockpaperCode.GDrockiconObjects3.createFrom(runtimeScene.getObjects("rockicon"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("rockicon", gdjs.rockpaperCode.GDrockiconObjects3).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.rockpaperCode.GDhandObjects4.createFrom(runtimeScene.getObjects("hand"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.rockpaperCode.GDhandObjects4.length ;i < len;++i) {
    gdjs.rockpaperCode.GDhandObjects4[i].setAnimation(0);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(8).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(10).setNumber(0);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "restart");
}}

}

} //End of subevents
}

}


{

gdjs.rockpaperCode.GDpapericonObjects3.createFrom(runtimeScene.getObjects("papericon"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("papericon", gdjs.rockpaperCode.GDpapericonObjects3).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.rockpaperCode.GDhandObjects4.createFrom(runtimeScene.getObjects("hand"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.rockpaperCode.GDhandObjects4.length ;i < len;++i) {
    gdjs.rockpaperCode.GDhandObjects4[i].setAnimation(1);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(2);
}{runtimeScene.getVariables().getFromIndex(8).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(10).setNumber(0);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "restart");
}}

}

} //End of subevents
}

}


{

gdjs.rockpaperCode.GDsccissoriconObjects3.createFrom(runtimeScene.getObjects("sccissoricon"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("sccissoricon", gdjs.rockpaperCode.GDsccissoriconObjects3).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.rockpaperCode.GDhandObjects4.createFrom(runtimeScene.getObjects("hand"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.rockpaperCode.GDhandObjects4.length ;i < len;++i) {
    gdjs.rockpaperCode.GDhandObjects4[i].setAnimation(2);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(3);
}{runtimeScene.getVariables().getFromIndex(8).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(6).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(10).setNumber(0);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "restart");
}}

}

} //End of subevents
}

}

} //End of subevents
}

}

} //End of subevents
}

}


{

gdjs.rockpaperCode.GDhandObjects1.createFrom(runtimeScene.getObjects("hand"));
gdjs.rockpaperCode.GDpapericonObjects1.createFrom(runtimeScene.getObjects("papericon"));
gdjs.rockpaperCode.GDrockiconObjects1.createFrom(runtimeScene.getObjects("rockicon"));
gdjs.rockpaperCode.GDsccissoriconObjects1.createFrom(runtimeScene.getObjects("sccissoricon"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 1;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.rockpaperCode.GDpapericonObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDpapericonObjects1[i].setOpacity(gdjs.rockpaperCode.GDpapericonObjects1[i].getOpacity() - (512*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDrockiconObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDrockiconObjects1[i].setOpacity(gdjs.rockpaperCode.GDrockiconObjects1[i].getOpacity() - (512*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDsccissoriconObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDsccissoriconObjects1[i].setOpacity(gdjs.rockpaperCode.GDsccissoriconObjects1[i].getOpacity() - (512*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDhandObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDhandObjects1[i].addForceTowardPosition(406, 340, 800, 0);
}
}}

}


{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 1;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setNumber(0+gdjs.random(2));
}{runtimeScene.getVariables().getFromIndex(8).setNumber(0);
}}

}


{

gdjs.rockpaperCode.GDhandObjects1.createFrom(runtimeScene.getObjects("hand"));
gdjs.rockpaperCode.GDovihandObjects1.createFrom(runtimeScene.getObjects("ovihand"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.rockpaperCode.GDhandObjects1.length;i<l;++i) {
    if ( gdjs.rockpaperCode.GDhandObjects1[i].getY() < 560 ) {
        gdjs.rockpaperCode.condition0IsTrue_0.val = true;
        gdjs.rockpaperCode.GDhandObjects1[k] = gdjs.rockpaperCode.GDhandObjects1[i];
        ++k;
    }
}
gdjs.rockpaperCode.GDhandObjects1.length = k;}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.rockpaperCode.GDovihandObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDovihandObjects1[i].setOpacity(gdjs.rockpaperCode.GDovihandObjects1[i].getOpacity() + (512*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDhandObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDhandObjects1[i].clearForces();
}
}{runtimeScene.getVariables().getFromIndex(9).setNumber(1);
}}

}


{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(10)) == 1;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(6).setNumber(0);
}
{ //Subevents

{

gdjs.rockpaperCode.GDhandObjects2.createFrom(runtimeScene.getObjects("hand"));
gdjs.rockpaperCode.GDovihandObjects2.createFrom(runtimeScene.getObjects("ovihand"));
gdjs.rockpaperCode.GDpapericonObjects2.createFrom(runtimeScene.getObjects("papericon"));
gdjs.rockpaperCode.GDrockiconObjects2.createFrom(runtimeScene.getObjects("rockicon"));
gdjs.rockpaperCode.GDsccissoriconObjects2.createFrom(runtimeScene.getObjects("sccissoricon"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "restart");
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.rockpaperCode.GDovihandObjects2.length ;i < len;++i) {
    gdjs.rockpaperCode.GDovihandObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDhandObjects2.length ;i < len;++i) {
    gdjs.rockpaperCode.GDhandObjects2[i].setY(1200);
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDrockiconObjects2.length ;i < len;++i) {
    gdjs.rockpaperCode.GDrockiconObjects2[i].setOpacity(1000);
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDpapericonObjects2.length ;i < len;++i) {
    gdjs.rockpaperCode.GDpapericonObjects2[i].setOpacity(1000);
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDsccissoriconObjects2.length ;i < len;++i) {
    gdjs.rockpaperCode.GDsccissoriconObjects2[i].setOpacity(1000);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "restart");
}{runtimeScene.getVariables().getFromIndex(7).setNumber(1);
}}

}

} //End of subevents
}

}


{



}


{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 1;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.rockpaperCode.GDovihandObjects2.createFrom(runtimeScene.getObjects("ovihand"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.rockpaperCode.GDovihandObjects2.length ;i < len;++i) {
    gdjs.rockpaperCode.GDovihandObjects2[i].setAnimation(0);
}
}
{ //Subevents

{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 3;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.ogg", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("MONEY", "MONEY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(10).setNumber(1);
}}

}


{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 2;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).setNumber(1);
}}

}

} //End of subevents
}

}


{

gdjs.rockpaperCode.GDovihandObjects2.createFrom(runtimeScene.getObjects("ovihand"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.rockpaperCode.GDovihandObjects2.length ;i < len;++i) {
    gdjs.rockpaperCode.GDovihandObjects2[i].setAnimation(1);
}
}
{ //Subevents

{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 2;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.ogg", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("MONEY", "MONEY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(10).setNumber(1);
}}

}


{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 3;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).setNumber(1);
}}

}

} //End of subevents
}

}


{

gdjs.rockpaperCode.GDovihandObjects2.createFrom(runtimeScene.getObjects("ovihand"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 2;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.rockpaperCode.GDovihandObjects2.length ;i < len;++i) {
    gdjs.rockpaperCode.GDovihandObjects2[i].setAnimation(2);
}
}
{ //Subevents

{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.ogg", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("MONEY", "MONEY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(10).setNumber(1);
}}

}


{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 2;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 3;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).setNumber(1);
}}

}

} //End of subevents
}

}

} //End of subevents
}

}


{



}


{

gdjs.rockpaperCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.rockpaperCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.rockpaperCode.GDhandObjects1.createFrom(runtimeScene.getObjects("hand"));
gdjs.rockpaperCode.GDmonedaObjects1.createFrom(runtimeScene.getObjects("moneda"));
gdjs.rockpaperCode.GDoviObjects1.createFrom(runtimeScene.getObjects("ovi"));
gdjs.rockpaperCode.GDovihandObjects1.createFrom(runtimeScene.getObjects("ovihand"));

gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.rockpaperCode.GDovihandObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDovihandObjects1[i].setOpacity(gdjs.rockpaperCode.GDovihandObjects1[i].getOpacity() - (128*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDoviObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDoviObjects1[i].setOpacity(gdjs.rockpaperCode.GDoviObjects1[i].getOpacity() - (128*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDhandObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDhandObjects1[i].setOpacity(gdjs.rockpaperCode.GDhandObjects1[i].getOpacity() - (128*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{for(var i = 0, len = gdjs.rockpaperCode.GDmonedaObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDmonedaObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.rockpaperCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDcoinObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.rockpaperCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDgameoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.rockpaperCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.rockpaperCode.GDcoinObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fin");
}
{ //Subevents

{


gdjs.rockpaperCode.condition0IsTrue_0.val = false;
{
gdjs.rockpaperCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fin");
}if (gdjs.rockpaperCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "playground", true);
}}

}

} //End of subevents
}

}

return;
}
gdjs['rockpaperCode']= gdjs.rockpaperCode;
