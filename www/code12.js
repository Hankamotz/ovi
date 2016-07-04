gdjs.crashCode = {};


gdjs.crashCode.GDcoinObjects1= [];
gdjs.crashCode.GDcoinObjects2= [];
gdjs.crashCode.GDgameoverObjects1= [];
gdjs.crashCode.GDgameoverObjects2= [];
gdjs.crashCode.GDmonedaObjects1= [];
gdjs.crashCode.GDmonedaObjects2= [];
gdjs.crashCode.GDtapObjects1= [];
gdjs.crashCode.GDtapObjects2= [];
gdjs.crashCode.GDinstructionObjects1= [];
gdjs.crashCode.GDinstructionObjects2= [];
gdjs.crashCode.GDeggObjects1= [];
gdjs.crashCode.GDeggObjects2= [];
gdjs.crashCode.GDkactusObjects1= [];
gdjs.crashCode.GDkactusObjects2= [];

gdjs.crashCode.conditionTrue_0 = {val:false};
gdjs.crashCode.condition0IsTrue_0 = {val:false};
gdjs.crashCode.condition1IsTrue_0 = {val:false};

gdjs.crashCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.crashCode.GDcoinObjects1.length = 0;
gdjs.crashCode.GDcoinObjects2.length = 0;
gdjs.crashCode.GDgameoverObjects1.length = 0;
gdjs.crashCode.GDgameoverObjects2.length = 0;
gdjs.crashCode.GDmonedaObjects1.length = 0;
gdjs.crashCode.GDmonedaObjects2.length = 0;
gdjs.crashCode.GDtapObjects1.length = 0;
gdjs.crashCode.GDtapObjects2.length = 0;
gdjs.crashCode.GDinstructionObjects1.length = 0;
gdjs.crashCode.GDinstructionObjects2.length = 0;
gdjs.crashCode.GDeggObjects1.length = 0;
gdjs.crashCode.GDeggObjects2.length = 0;
gdjs.crashCode.GDkactusObjects1.length = 0;
gdjs.crashCode.GDkactusObjects2.length = 0;


{

gdjs.crashCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.crashCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.crashCode.GDmonedaObjects1.createFrom(runtimeScene.getObjects("moneda"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.crashCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDcoinObjects1[i].hide();
}
for(var i = 0, len = gdjs.crashCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDgameoverObjects1[i].hide();
}
for(var i = 0, len = gdjs.crashCode.GDmonedaObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDmonedaObjects1[i].hide();
}
}{runtimeScene.getVariables().get("in").setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "mix.ogg", true, 60, 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("MONEY", "MONEY.xml", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


{

gdjs.crashCode.GDinstructionObjects1.createFrom(runtimeScene.getObjects("instruction"));
gdjs.crashCode.GDtapObjects1.createFrom(runtimeScene.getObjects("tap"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.5, "hasiera");
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.crashCode.GDtapObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDtapObjects1[i].setOpacity(gdjs.crashCode.GDtapObjects1[i].getOpacity() - (128*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.crashCode.GDinstructionObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDinstructionObjects1[i].setOpacity(0);
}
}}

}


{



}


{


gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "hasiera");
}if (gdjs.crashCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.crashCode.GDeggObjects2.createFrom(runtimeScene.getObjects("egg"));
gdjs.crashCode.GDkactusObjects2.createFrom(runtimeScene.getObjects("kactus"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects2).addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects2).getEventsObjectsMap()) < 1;
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects2).getEventsObjectsMap(), 600 -gdjs.random(600), 1050 -gdjs.random(1050), "");
}}

}

} //End of subevents
}

}


{


gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.5, "hasiera");
}if (gdjs.crashCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.crashCode.GDeggObjects2.createFrom(runtimeScene.getObjects("egg"));
gdjs.crashCode.GDkactusObjects2.createFrom(runtimeScene.getObjects("kactus"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects2).addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects2).getEventsObjectsMap()) < 3;
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects2).getEventsObjectsMap(), 600 -gdjs.random(600), 1050 -gdjs.random(1050), "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects2).getEventsObjectsMap(), 600 -gdjs.random(600), 1050 -gdjs.random(1050), "");
}}

}

} //End of subevents
}

}


{


gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "hasiera");
}if (gdjs.crashCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.crashCode.GDeggObjects2.createFrom(runtimeScene.getObjects("egg"));
gdjs.crashCode.GDkactusObjects2.createFrom(runtimeScene.getObjects("kactus"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects2).addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects2).getEventsObjectsMap()) < 5;
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects2).getEventsObjectsMap(), 600 -gdjs.random(600), 1050 -gdjs.random(1050), "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects2).getEventsObjectsMap(), 600 -gdjs.random(600), 1050 -gdjs.random(1050), "");
}}

}

} //End of subevents
}

}


{


gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6, "hasiera");
}if (gdjs.crashCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.crashCode.GDeggObjects2.createFrom(runtimeScene.getObjects("egg"));
gdjs.crashCode.GDkactusObjects2.createFrom(runtimeScene.getObjects("kactus"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects2).addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects2).getEventsObjectsMap()) < 7;
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects2).getEventsObjectsMap(), 600 -gdjs.random(600), 1050 -gdjs.random(1050), "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects2).getEventsObjectsMap(), 600 -gdjs.random(600), 1050 -gdjs.random(1050), "");
}}

}

} //End of subevents
}

}


{


gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 10;
}if (gdjs.crashCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.crashCode.GDeggObjects2.createFrom(runtimeScene.getObjects("egg"));
gdjs.crashCode.GDkactusObjects2.createFrom(runtimeScene.getObjects("kactus"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects2).addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects2).getEventsObjectsMap()) < 9;
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects2).getEventsObjectsMap(), 600 -gdjs.random(600), 1050 -gdjs.random(1050), "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects2).getEventsObjectsMap(), 600 -gdjs.random(600), 1050 -gdjs.random(1050), "");
}}

}

} //End of subevents
}

}


{

gdjs.crashCode.GDeggObjects1.createFrom(runtimeScene.getObjects("egg"));
gdjs.crashCode.GDkactusObjects1.createFrom(runtimeScene.getObjects("kactus"));

{gdjs.evtTools.object.pickAllObjects(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects1).addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects1).getEventsObjectsMap());
}{for(var i = 0, len = gdjs.crashCode.GDkactusObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDkactusObjects1[i].setOpacity(gdjs.crashCode.GDkactusObjects1[i].getOpacity() - (32*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.crashCode.GDeggObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDeggObjects1[i].setOpacity(gdjs.crashCode.GDeggObjects1[i].getOpacity() - (32*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}


{

gdjs.crashCode.GDeggObjects1.createFrom(runtimeScene.getObjects("egg"));
gdjs.crashCode.GDkactusObjects1.createFrom(runtimeScene.getObjects("kactus"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 10;
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.pickAllObjects(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects1).addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects1).getEventsObjectsMap());
}{for(var i = 0, len = gdjs.crashCode.GDkactusObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDkactusObjects1[i].setOpacity(gdjs.crashCode.GDkactusObjects1[i].getOpacity() - (32*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.crashCode.GDeggObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDeggObjects1[i].setOpacity(gdjs.crashCode.GDeggObjects1[i].getOpacity() - (32*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.crashCode.GDeggObjects1.createFrom(runtimeScene.getObjects("egg"));
gdjs.crashCode.GDkactusObjects1.createFrom(runtimeScene.getObjects("kactus"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 20;
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.pickAllObjects(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects1).addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects1).getEventsObjectsMap());
}{for(var i = 0, len = gdjs.crashCode.GDkactusObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDkactusObjects1[i].setOpacity(gdjs.crashCode.GDkactusObjects1[i].getOpacity() - (32*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
for(var i = 0, len = gdjs.crashCode.GDeggObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDeggObjects1[i].setOpacity(gdjs.crashCode.GDeggObjects1[i].getOpacity() - (32*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.crashCode.GDkactusObjects1.createFrom(runtimeScene.getObjects("kactus"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.crashCode.GDkactusObjects1.length;i<l;++i) {
    if ( gdjs.crashCode.GDkactusObjects1[i].getOpacity() == 0 ) {
        gdjs.crashCode.condition0IsTrue_0.val = true;
        gdjs.crashCode.GDkactusObjects1[k] = gdjs.crashCode.GDkactusObjects1[i];
        ++k;
    }
}
gdjs.crashCode.GDkactusObjects1.length = k;}if (gdjs.crashCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.crashCode.GDkactusObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDkactusObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.crashCode.GDeggObjects1.createFrom(runtimeScene.getObjects("egg"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.crashCode.GDeggObjects1.length;i<l;++i) {
    if ( gdjs.crashCode.GDeggObjects1[i].getOpacity() == 0 ) {
        gdjs.crashCode.condition0IsTrue_0.val = true;
        gdjs.crashCode.GDeggObjects1[k] = gdjs.crashCode.GDeggObjects1[i];
        ++k;
    }
}
gdjs.crashCode.GDeggObjects1.length = k;}if (gdjs.crashCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.crashCode.GDeggObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDeggObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.crashCode.GDeggObjects1.createFrom(runtimeScene.getObjects("egg"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("egg", gdjs.crashCode.GDeggObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.crashCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.crashCode.GDeggObjects2.createFrom(gdjs.crashCode.GDeggObjects1);

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.crashCode.GDeggObjects2.length ;i < len;++i) {
    gdjs.crashCode.GDeggObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.ogg", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("MONEY", "MONEY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}

} //End of subevents
}

}


{

gdjs.crashCode.GDkactusObjects1.createFrom(runtimeScene.getObjects("kactus"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("kactus", gdjs.crashCode.GDkactusObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.crashCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}

} //End of subevents
}

}


{



}


{

gdjs.crashCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.crashCode.GDeggObjects1.createFrom(runtimeScene.getObjects("egg"));
gdjs.crashCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.crashCode.GDkactusObjects1.createFrom(runtimeScene.getObjects("kactus"));
gdjs.crashCode.GDmonedaObjects1.createFrom(runtimeScene.getObjects("moneda"));

gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{for(var i = 0, len = gdjs.crashCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDcoinObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.crashCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDgameoverObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.crashCode.GDmonedaObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDmonedaObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.crashCode.GDkactusObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDkactusObjects1[i].hide();
}
for(var i = 0, len = gdjs.crashCode.GDeggObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDeggObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.crashCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.crashCode.GDcoinObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fin");
}
{ //Subevents

{


gdjs.crashCode.condition0IsTrue_0.val = false;
{
gdjs.crashCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fin");
}if (gdjs.crashCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "playground", true);
}}

}

} //End of subevents
}

}

return;
}
gdjs['crashCode']= gdjs.crashCode;
