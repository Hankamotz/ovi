gdjs.toposCode = {};


gdjs.toposCode.GDarraultzObjects1= [];
gdjs.toposCode.GDarraultzObjects2= [];
gdjs.toposCode.GDtubogoiObjects1= [];
gdjs.toposCode.GDtubogoiObjects2= [];
gdjs.toposCode.GDtubobeheObjects1= [];
gdjs.toposCode.GDtubobeheObjects2= [];
gdjs.toposCode.GDcoinObjects1= [];
gdjs.toposCode.GDcoinObjects2= [];
gdjs.toposCode.GDgameoverObjects1= [];
gdjs.toposCode.GDgameoverObjects2= [];
gdjs.toposCode.GDmonedaObjects1= [];
gdjs.toposCode.GDmonedaObjects2= [];
gdjs.toposCode.GDtapObjects1= [];
gdjs.toposCode.GDtapObjects2= [];
gdjs.toposCode.GDinstructionObjects1= [];
gdjs.toposCode.GDinstructionObjects2= [];

gdjs.toposCode.conditionTrue_0 = {val:false};
gdjs.toposCode.condition0IsTrue_0 = {val:false};
gdjs.toposCode.condition1IsTrue_0 = {val:false};

gdjs.toposCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.toposCode.GDarraultzObjects1.length = 0;
gdjs.toposCode.GDarraultzObjects2.length = 0;
gdjs.toposCode.GDtubogoiObjects1.length = 0;
gdjs.toposCode.GDtubogoiObjects2.length = 0;
gdjs.toposCode.GDtubobeheObjects1.length = 0;
gdjs.toposCode.GDtubobeheObjects2.length = 0;
gdjs.toposCode.GDcoinObjects1.length = 0;
gdjs.toposCode.GDcoinObjects2.length = 0;
gdjs.toposCode.GDgameoverObjects1.length = 0;
gdjs.toposCode.GDgameoverObjects2.length = 0;
gdjs.toposCode.GDmonedaObjects1.length = 0;
gdjs.toposCode.GDmonedaObjects2.length = 0;
gdjs.toposCode.GDtapObjects1.length = 0;
gdjs.toposCode.GDtapObjects2.length = 0;
gdjs.toposCode.GDinstructionObjects1.length = 0;
gdjs.toposCode.GDinstructionObjects2.length = 0;


{

gdjs.toposCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.toposCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.toposCode.GDmonedaObjects1.createFrom(runtimeScene.getObjects("moneda"));

gdjs.toposCode.condition0IsTrue_0.val = false;
{
gdjs.toposCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.toposCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.toposCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDcoinObjects1[i].hide();
}
for(var i = 0, len = gdjs.toposCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDgameoverObjects1[i].hide();
}
for(var i = 0, len = gdjs.toposCode.GDmonedaObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDmonedaObjects1[i].hide();
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "mix.ogg", 1, false, 100, 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("MONEY", "MONEY.xml", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "music");
}}

}


{

gdjs.toposCode.GDinstructionObjects1.createFrom(runtimeScene.getObjects("instruction"));
gdjs.toposCode.GDtapObjects1.createFrom(runtimeScene.getObjects("tap"));

gdjs.toposCode.condition0IsTrue_0.val = false;
{
gdjs.toposCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.5, "hasiera");
}if (gdjs.toposCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.toposCode.GDtapObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtapObjects1[i].setOpacity(gdjs.toposCode.GDtapObjects1[i].getOpacity() - (128*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.toposCode.GDinstructionObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDinstructionObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.toposCode.condition0IsTrue_0.val = false;
{
gdjs.toposCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 24, "music");
}if (gdjs.toposCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "mix.ogg", 1, false, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "music");
}}

}


{


gdjs.toposCode.condition0IsTrue_0.val = false;
{
gdjs.toposCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.toposCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.toposCode.GDarraultzObjects2.createFrom(runtimeScene.getObjects("arraultz"));

gdjs.toposCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.toposCode.GDarraultzObjects2.length;i<l;++i) {
    if ( !(gdjs.toposCode.GDarraultzObjects2[i].getY() <= 90) ) {
        gdjs.toposCode.condition0IsTrue_0.val = true;
        gdjs.toposCode.GDarraultzObjects2[k] = gdjs.toposCode.GDarraultzObjects2[i];
        ++k;
    }
}
gdjs.toposCode.GDarraultzObjects2.length = k;}if (gdjs.toposCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.toposCode.GDarraultzObjects2.length ;i < len;++i) {
    gdjs.toposCode.GDarraultzObjects2[i].addForce(0, -300, 0);
}
}}

}

} //End of subevents
}

}


{


gdjs.toposCode.condition0IsTrue_0.val = false;
{
gdjs.toposCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.toposCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.toposCode.GDarraultzObjects2.createFrom(runtimeScene.getObjects("arraultz"));

gdjs.toposCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.toposCode.GDarraultzObjects2.length;i<l;++i) {
    if ( !(gdjs.toposCode.GDarraultzObjects2[i].getY() >= 1020) ) {
        gdjs.toposCode.condition0IsTrue_0.val = true;
        gdjs.toposCode.GDarraultzObjects2[k] = gdjs.toposCode.GDarraultzObjects2[i];
        ++k;
    }
}
gdjs.toposCode.GDarraultzObjects2.length = k;}if (gdjs.toposCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.toposCode.GDarraultzObjects2.length ;i < len;++i) {
    gdjs.toposCode.GDarraultzObjects2[i].addForce(0, 300, 0);
}
}}

}

} //End of subevents
}

}


{



}


{

gdjs.toposCode.GDtubobeheObjects1.createFrom(runtimeScene.getObjects("tubobehe"));
gdjs.toposCode.GDtubogoiObjects1.createFrom(runtimeScene.getObjects("tubogoi"));

gdjs.toposCode.condition0IsTrue_0.val = false;
{
gdjs.toposCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("tubobehe", gdjs.toposCode.GDtubobeheObjects1).addObjectsToEventsMap("tubogoi", gdjs.toposCode.GDtubogoiObjects1).getEventsObjectsMap()) < 1;
}if (gdjs.toposCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("tubogoi", gdjs.toposCode.GDtubogoiObjects1).getEventsObjectsMap(), 780, 0-gdjs.random(760), "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("tubobehe", gdjs.toposCode.GDtubobeheObjects1).getEventsObjectsMap(), (( gdjs.toposCode.GDtubogoiObjects1.length === 0 ) ? 0 :gdjs.toposCode.GDtubogoiObjects1[0].getPointX("")), 1200+(( gdjs.toposCode.GDtubogoiObjects1.length === 0 ) ? 0 :gdjs.toposCode.GDtubogoiObjects1[0].getPointY("")), "");
}}

}


{

gdjs.toposCode.GDtubobeheObjects1.createFrom(runtimeScene.getObjects("tubobehe"));
gdjs.toposCode.GDtubogoiObjects1.createFrom(runtimeScene.getObjects("tubogoi"));

{for(var i = 0, len = gdjs.toposCode.GDtubobeheObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtubobeheObjects1[i].addForce(-150, 0, 0);
}
for(var i = 0, len = gdjs.toposCode.GDtubogoiObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtubogoiObjects1[i].addForce(-150, 0, 0);
}
}
}


{

gdjs.toposCode.GDtubobeheObjects1.createFrom(runtimeScene.getObjects("tubobehe"));
gdjs.toposCode.GDtubogoiObjects1.createFrom(runtimeScene.getObjects("tubogoi"));

gdjs.toposCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.toposCode.GDtubobeheObjects1.length;i<l;++i) {
    if ( gdjs.toposCode.GDtubobeheObjects1[i].getX() <= -150 ) {
        gdjs.toposCode.condition0IsTrue_0.val = true;
        gdjs.toposCode.GDtubobeheObjects1[k] = gdjs.toposCode.GDtubobeheObjects1[i];
        ++k;
    }
}
gdjs.toposCode.GDtubobeheObjects1.length = k;for(var i = 0, k = 0, l = gdjs.toposCode.GDtubogoiObjects1.length;i<l;++i) {
    if ( gdjs.toposCode.GDtubogoiObjects1[i].getX() <= -150 ) {
        gdjs.toposCode.condition0IsTrue_0.val = true;
        gdjs.toposCode.GDtubogoiObjects1[k] = gdjs.toposCode.GDtubogoiObjects1[i];
        ++k;
    }
}
gdjs.toposCode.GDtubogoiObjects1.length = k;}if (gdjs.toposCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.ogg", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("MONEY", "MONEY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.toposCode.GDtubobeheObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtubobeheObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.toposCode.GDtubogoiObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtubogoiObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.toposCode.GDtubobeheObjects1.createFrom(runtimeScene.getObjects("tubobehe"));
gdjs.toposCode.GDtubogoiObjects1.createFrom(runtimeScene.getObjects("tubogoi"));

gdjs.toposCode.condition0IsTrue_0.val = false;
{
gdjs.toposCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 5;
}if (gdjs.toposCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.toposCode.GDtubobeheObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtubobeheObjects1[i].addForce(-50, 0, 0);
}
for(var i = 0, len = gdjs.toposCode.GDtubogoiObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtubogoiObjects1[i].addForce(-50, 0, 0);
}
}}

}


{

gdjs.toposCode.GDtubobeheObjects1.createFrom(runtimeScene.getObjects("tubobehe"));
gdjs.toposCode.GDtubogoiObjects1.createFrom(runtimeScene.getObjects("tubogoi"));

gdjs.toposCode.condition0IsTrue_0.val = false;
{
gdjs.toposCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 10;
}if (gdjs.toposCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.toposCode.GDtubobeheObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtubobeheObjects1[i].addForce(-50, 0, 0);
}
for(var i = 0, len = gdjs.toposCode.GDtubogoiObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtubogoiObjects1[i].addForce(-50, 0, 0);
}
}}

}


{

gdjs.toposCode.GDtubobeheObjects1.createFrom(runtimeScene.getObjects("tubobehe"));
gdjs.toposCode.GDtubogoiObjects1.createFrom(runtimeScene.getObjects("tubogoi"));

gdjs.toposCode.condition0IsTrue_0.val = false;
{
gdjs.toposCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 20;
}if (gdjs.toposCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.toposCode.GDtubobeheObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtubobeheObjects1[i].addForce(-50, 0, 0);
}
for(var i = 0, len = gdjs.toposCode.GDtubogoiObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtubogoiObjects1[i].addForce(-50, 0, 0);
}
}}

}


{



}


{

gdjs.toposCode.GDarraultzObjects1.createFrom(runtimeScene.getObjects("arraultz"));
gdjs.toposCode.GDtubobeheObjects1.createFrom(runtimeScene.getObjects("tubobehe"));
gdjs.toposCode.GDtubogoiObjects1.createFrom(runtimeScene.getObjects("tubogoi"));

gdjs.toposCode.condition0IsTrue_0.val = false;
{
gdjs.toposCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("arraultz", gdjs.toposCode.GDarraultzObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("tubobehe", gdjs.toposCode.GDtubobeheObjects1).addObjectsToEventsMap("tubogoi", gdjs.toposCode.GDtubogoiObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.toposCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{



}


{

gdjs.toposCode.GDarraultzObjects1.createFrom(runtimeScene.getObjects("arraultz"));
gdjs.toposCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.toposCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.toposCode.GDmonedaObjects1.createFrom(runtimeScene.getObjects("moneda"));
gdjs.toposCode.GDtubobeheObjects1.createFrom(runtimeScene.getObjects("tubobehe"));
gdjs.toposCode.GDtubogoiObjects1.createFrom(runtimeScene.getObjects("tubogoi"));

gdjs.toposCode.condition0IsTrue_0.val = false;
{
gdjs.toposCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.toposCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.toposCode.GDarraultzObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDarraultzObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.toposCode.GDtubobeheObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtubobeheObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.toposCode.GDtubogoiObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDtubogoiObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{for(var i = 0, len = gdjs.toposCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDcoinObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.toposCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDgameoverObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.toposCode.GDmonedaObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDmonedaObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.toposCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.toposCode.GDcoinObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fin");
}
{ //Subevents

{


gdjs.toposCode.condition0IsTrue_0.val = false;
{
gdjs.toposCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fin");
}if (gdjs.toposCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "playground", true);
}}

}

} //End of subevents
}

}

return;
}
gdjs['toposCode']= gdjs.toposCode;
