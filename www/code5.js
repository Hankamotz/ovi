gdjs.zeruaCode = {};


gdjs.zeruaCode.GDtxanponObjects1= [];
gdjs.zeruaCode.GDtxanponObjects2= [];
gdjs.zeruaCode.GDtxanponObjects3= [];
gdjs.zeruaCode.GDtxanponObjects4= [];
gdjs.zeruaCode.GDparachuteObjects1= [];
gdjs.zeruaCode.GDparachuteObjects2= [];
gdjs.zeruaCode.GDparachuteObjects3= [];
gdjs.zeruaCode.GDparachuteObjects4= [];
gdjs.zeruaCode.GDcloudObjects1= [];
gdjs.zeruaCode.GDcloudObjects2= [];
gdjs.zeruaCode.GDcloudObjects3= [];
gdjs.zeruaCode.GDcloudObjects4= [];
gdjs.zeruaCode.GDgameoverObjects1= [];
gdjs.zeruaCode.GDgameoverObjects2= [];
gdjs.zeruaCode.GDgameoverObjects3= [];
gdjs.zeruaCode.GDgameoverObjects4= [];
gdjs.zeruaCode.GDcoinObjects1= [];
gdjs.zeruaCode.GDcoinObjects2= [];
gdjs.zeruaCode.GDcoinObjects3= [];
gdjs.zeruaCode.GDcoinObjects4= [];
gdjs.zeruaCode.GDmonedaObjects1= [];
gdjs.zeruaCode.GDmonedaObjects2= [];
gdjs.zeruaCode.GDmonedaObjects3= [];
gdjs.zeruaCode.GDmonedaObjects4= [];
gdjs.zeruaCode.GDtapObjects1= [];
gdjs.zeruaCode.GDtapObjects2= [];
gdjs.zeruaCode.GDtapObjects3= [];
gdjs.zeruaCode.GDtapObjects4= [];
gdjs.zeruaCode.GDinstructionObjects1= [];
gdjs.zeruaCode.GDinstructionObjects2= [];
gdjs.zeruaCode.GDinstructionObjects3= [];
gdjs.zeruaCode.GDinstructionObjects4= [];

gdjs.zeruaCode.conditionTrue_0 = {val:false};
gdjs.zeruaCode.condition0IsTrue_0 = {val:false};
gdjs.zeruaCode.condition1IsTrue_0 = {val:false};

gdjs.zeruaCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.zeruaCode.GDtxanponObjects1.length = 0;
gdjs.zeruaCode.GDtxanponObjects2.length = 0;
gdjs.zeruaCode.GDtxanponObjects3.length = 0;
gdjs.zeruaCode.GDtxanponObjects4.length = 0;
gdjs.zeruaCode.GDparachuteObjects1.length = 0;
gdjs.zeruaCode.GDparachuteObjects2.length = 0;
gdjs.zeruaCode.GDparachuteObjects3.length = 0;
gdjs.zeruaCode.GDparachuteObjects4.length = 0;
gdjs.zeruaCode.GDcloudObjects1.length = 0;
gdjs.zeruaCode.GDcloudObjects2.length = 0;
gdjs.zeruaCode.GDcloudObjects3.length = 0;
gdjs.zeruaCode.GDcloudObjects4.length = 0;
gdjs.zeruaCode.GDgameoverObjects1.length = 0;
gdjs.zeruaCode.GDgameoverObjects2.length = 0;
gdjs.zeruaCode.GDgameoverObjects3.length = 0;
gdjs.zeruaCode.GDgameoverObjects4.length = 0;
gdjs.zeruaCode.GDcoinObjects1.length = 0;
gdjs.zeruaCode.GDcoinObjects2.length = 0;
gdjs.zeruaCode.GDcoinObjects3.length = 0;
gdjs.zeruaCode.GDcoinObjects4.length = 0;
gdjs.zeruaCode.GDmonedaObjects1.length = 0;
gdjs.zeruaCode.GDmonedaObjects2.length = 0;
gdjs.zeruaCode.GDmonedaObjects3.length = 0;
gdjs.zeruaCode.GDmonedaObjects4.length = 0;
gdjs.zeruaCode.GDtapObjects1.length = 0;
gdjs.zeruaCode.GDtapObjects2.length = 0;
gdjs.zeruaCode.GDtapObjects3.length = 0;
gdjs.zeruaCode.GDtapObjects4.length = 0;
gdjs.zeruaCode.GDinstructionObjects1.length = 0;
gdjs.zeruaCode.GDinstructionObjects2.length = 0;
gdjs.zeruaCode.GDinstructionObjects3.length = 0;
gdjs.zeruaCode.GDinstructionObjects4.length = 0;


{



}


{

gdjs.zeruaCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.zeruaCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.zeruaCode.GDmonedaObjects1.createFrom(runtimeScene.getObjects("moneda"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.zeruaCode.GDmonedaObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDmonedaObjects1[i].hide();
}
for(var i = 0, len = gdjs.zeruaCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDcoinObjects1[i].hide();
}
for(var i = 0, len = gdjs.zeruaCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDgameoverObjects1[i].hide();
}
}{gdjs.evtTools.storage.readNumberFromJSONFile("MONEY", "MONEY.xml", runtimeScene, runtimeScene.getVariables().getFromIndex(3));
}{gdjs.evtTools.sound.playSound(runtimeScene, "funk.ogg", true, 60, 1);
}}

}


{

gdjs.zeruaCode.GDinstructionObjects1.createFrom(runtimeScene.getObjects("instruction"));
gdjs.zeruaCode.GDtapObjects1.createFrom(runtimeScene.getObjects("tap"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.5, "hasiera");
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.zeruaCode.GDtapObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDtapObjects1[i].setOpacity(gdjs.zeruaCode.GDtapObjects1[i].getOpacity() - (128*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.zeruaCode.GDinstructionObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDinstructionObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}
{ //Subevents

{


gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) < 360;
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.zeruaCode.GDparachuteObjects4.createFrom(runtimeScene.getObjects("parachute"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.zeruaCode.GDparachuteObjects4.length;i<l;++i) {
    if ( !(gdjs.zeruaCode.GDparachuteObjects4[i].getX() <= 90) ) {
        gdjs.zeruaCode.condition0IsTrue_0.val = true;
        gdjs.zeruaCode.GDparachuteObjects4[k] = gdjs.zeruaCode.GDparachuteObjects4[i];
        ++k;
    }
}
gdjs.zeruaCode.GDparachuteObjects4.length = k;}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.zeruaCode.GDparachuteObjects4.length ;i < len;++i) {
    gdjs.zeruaCode.GDparachuteObjects4[i].addPolarForce(180, 400, 0);
}
}{for(var i = 0, len = gdjs.zeruaCode.GDparachuteObjects4.length ;i < len;++i) {
    gdjs.zeruaCode.GDparachuteObjects4[i].setAngle(20);
}
}}

}

} //End of subevents
}

}


{


gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) > 360;
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.zeruaCode.GDparachuteObjects4.createFrom(runtimeScene.getObjects("parachute"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.zeruaCode.GDparachuteObjects4.length;i<l;++i) {
    if ( !(gdjs.zeruaCode.GDparachuteObjects4[i].getX() >= 630) ) {
        gdjs.zeruaCode.condition0IsTrue_0.val = true;
        gdjs.zeruaCode.GDparachuteObjects4[k] = gdjs.zeruaCode.GDparachuteObjects4[i];
        ++k;
    }
}
gdjs.zeruaCode.GDparachuteObjects4.length = k;}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.zeruaCode.GDparachuteObjects4.length ;i < len;++i) {
    gdjs.zeruaCode.GDparachuteObjects4[i].addPolarForce(0, 400, 0);
}
}{for(var i = 0, len = gdjs.zeruaCode.GDparachuteObjects4.length ;i < len;++i) {
    gdjs.zeruaCode.GDparachuteObjects4[i].setAngle(340);
}
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

gdjs.zeruaCode.GDparachuteObjects1.createFrom(runtimeScene.getObjects("parachute"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.zeruaCode.GDparachuteObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDparachuteObjects1[i].setAngle(0);
}
}}

}


{



}


{

gdjs.zeruaCode.GDcloudObjects1.createFrom(runtimeScene.getObjects("cloud"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("cloud", gdjs.zeruaCode.GDcloudObjects1).getEventsObjectsMap()) < 1;
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("cloud", gdjs.zeruaCode.GDcloudObjects1).getEventsObjectsMap(), 700-gdjs.random(680), 1282, "");
}
{ //Subevents

{



}

} //End of subevents
}

}


{

gdjs.zeruaCode.GDcloudObjects1.createFrom(runtimeScene.getObjects("cloud"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("cloud", gdjs.zeruaCode.GDcloudObjects1).getEventsObjectsMap()) < 2;
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.zeruaCode.GDcloudObjects2.createFrom(gdjs.zeruaCode.GDcloudObjects1);

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.zeruaCode.GDcloudObjects2.length;i<l;++i) {
    if ( gdjs.zeruaCode.GDcloudObjects2[i].getY() < 700 ) {
        gdjs.zeruaCode.condition0IsTrue_0.val = true;
        gdjs.zeruaCode.GDcloudObjects2[k] = gdjs.zeruaCode.GDcloudObjects2[i];
        ++k;
    }
}
gdjs.zeruaCode.GDcloudObjects2.length = k;}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("cloud", gdjs.zeruaCode.GDcloudObjects2).getEventsObjectsMap(), 700-gdjs.random(680), 1282, "");
}}

}

} //End of subevents
}

}


{

gdjs.zeruaCode.GDcloudObjects1.createFrom(runtimeScene.getObjects("cloud"));

{for(var i = 0, len = gdjs.zeruaCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDcloudObjects1[i].addForce(0, -150, 0);
}
}
}


{

gdjs.zeruaCode.GDcloudObjects1.createFrom(runtimeScene.getObjects("cloud"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.zeruaCode.GDcloudObjects1.length;i<l;++i) {
    if ( gdjs.zeruaCode.GDcloudObjects1[i].getY() <= -60 ) {
        gdjs.zeruaCode.condition0IsTrue_0.val = true;
        gdjs.zeruaCode.GDcloudObjects1[k] = gdjs.zeruaCode.GDcloudObjects1[i];
        ++k;
    }
}
gdjs.zeruaCode.GDcloudObjects1.length = k;}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.zeruaCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDcloudObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.zeruaCode.GDtxanponObjects1.createFrom(runtimeScene.getObjects("txanpon"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("txanpon", gdjs.zeruaCode.GDtxanponObjects1).getEventsObjectsMap()) < 1;
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("txanpon", gdjs.zeruaCode.GDtxanponObjects1).getEventsObjectsMap(), 700-gdjs.random(680), 1550, "");
}}

}


{

gdjs.zeruaCode.GDtxanponObjects1.createFrom(runtimeScene.getObjects("txanpon"));

{for(var i = 0, len = gdjs.zeruaCode.GDtxanponObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDtxanponObjects1[i].addForce(0, -150, 0);
}
}
}


{

gdjs.zeruaCode.GDtxanponObjects1.createFrom(runtimeScene.getObjects("txanpon"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.zeruaCode.GDtxanponObjects1.length;i<l;++i) {
    if ( gdjs.zeruaCode.GDtxanponObjects1[i].getY() <= -30 ) {
        gdjs.zeruaCode.condition0IsTrue_0.val = true;
        gdjs.zeruaCode.GDtxanponObjects1[k] = gdjs.zeruaCode.GDtxanponObjects1[i];
        ++k;
    }
}
gdjs.zeruaCode.GDtxanponObjects1.length = k;}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.zeruaCode.GDtxanponObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDtxanponObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.zeruaCode.GDcloudObjects1.createFrom(runtimeScene.getObjects("cloud"));
gdjs.zeruaCode.GDtxanponObjects1.createFrom(runtimeScene.getObjects("txanpon"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 5;
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.zeruaCode.GDtxanponObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDtxanponObjects1[i].addForce(0, -50, 0);
}
}{for(var i = 0, len = gdjs.zeruaCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDcloudObjects1[i].addForce(0, -50, 0);
}
}}

}


{

gdjs.zeruaCode.GDcloudObjects1.createFrom(runtimeScene.getObjects("cloud"));
gdjs.zeruaCode.GDtxanponObjects1.createFrom(runtimeScene.getObjects("txanpon"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 10;
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.zeruaCode.GDtxanponObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDtxanponObjects1[i].addForce(0, -50, 0);
}
}{for(var i = 0, len = gdjs.zeruaCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDcloudObjects1[i].addForce(0, -50, 0);
}
}}

}


{

gdjs.zeruaCode.GDcloudObjects1.createFrom(runtimeScene.getObjects("cloud"));
gdjs.zeruaCode.GDtxanponObjects1.createFrom(runtimeScene.getObjects("txanpon"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 20;
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.zeruaCode.GDtxanponObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDtxanponObjects1[i].addForce(0, -100, 0);
}
}{for(var i = 0, len = gdjs.zeruaCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDcloudObjects1[i].addForce(0, -100, 0);
}
}}

}


{



}


{

gdjs.zeruaCode.GDcloudObjects1.createFrom(runtimeScene.getObjects("cloud"));
gdjs.zeruaCode.GDparachuteObjects1.createFrom(runtimeScene.getObjects("parachute"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("parachute", gdjs.zeruaCode.GDparachuteObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("cloud", gdjs.zeruaCode.GDcloudObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.zeruaCode.GDparachuteObjects1.createFrom(runtimeScene.getObjects("parachute"));
gdjs.zeruaCode.GDtxanponObjects1.createFrom(runtimeScene.getObjects("txanpon"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("parachute", gdjs.zeruaCode.GDparachuteObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("txanpon", gdjs.zeruaCode.GDtxanponObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.ogg", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("MONEY", "MONEY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)));
}{for(var i = 0, len = gdjs.zeruaCode.GDtxanponObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDtxanponObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.zeruaCode.GDcloudObjects1.createFrom(runtimeScene.getObjects("cloud"));
gdjs.zeruaCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.zeruaCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.zeruaCode.GDmonedaObjects1.createFrom(runtimeScene.getObjects("moneda"));
gdjs.zeruaCode.GDparachuteObjects1.createFrom(runtimeScene.getObjects("parachute"));
gdjs.zeruaCode.GDtxanponObjects1.createFrom(runtimeScene.getObjects("txanpon"));

gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.zeruaCode.GDtxanponObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDtxanponObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.zeruaCode.GDparachuteObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDparachuteObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.zeruaCode.GDcloudObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDcloudObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{for(var i = 0, len = gdjs.zeruaCode.GDmonedaObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDmonedaObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.zeruaCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDcoinObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.zeruaCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDgameoverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.zeruaCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.zeruaCode.GDcoinObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fin");
}
{ //Subevents

{


gdjs.zeruaCode.condition0IsTrue_0.val = false;
{
gdjs.zeruaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fin");
}if (gdjs.zeruaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "playground", true);
}}

}

} //End of subevents
}

}

return;
}
gdjs['zeruaCode']= gdjs.zeruaCode;
