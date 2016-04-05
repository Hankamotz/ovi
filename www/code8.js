gdjs.txanponCode = {};


gdjs.txanponCode.GDcoinObjects1= [];
gdjs.txanponCode.GDcoinObjects2= [];
gdjs.txanponCode.GDgameoverObjects1= [];
gdjs.txanponCode.GDgameoverObjects2= [];
gdjs.txanponCode.GDmonedaObjects1= [];
gdjs.txanponCode.GDmonedaObjects2= [];
gdjs.txanponCode.GDmarratxoObjects1= [];
gdjs.txanponCode.GDmarratxoObjects2= [];
gdjs.txanponCode.GDtxanponObjects1= [];
gdjs.txanponCode.GDtxanponObjects2= [];
gdjs.txanponCode.GDmarrahorizntalObjects1= [];
gdjs.txanponCode.GDmarrahorizntalObjects2= [];
gdjs.txanponCode.GDbasoaObjects1= [];
gdjs.txanponCode.GDbasoaObjects2= [];
gdjs.txanponCode.GDtapObjects1= [];
gdjs.txanponCode.GDtapObjects2= [];
gdjs.txanponCode.GDinstructionObjects1= [];
gdjs.txanponCode.GDinstructionObjects2= [];

gdjs.txanponCode.conditionTrue_0 = {val:false};
gdjs.txanponCode.condition0IsTrue_0 = {val:false};
gdjs.txanponCode.condition1IsTrue_0 = {val:false};

gdjs.txanponCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.txanponCode.GDcoinObjects1.length = 0;
gdjs.txanponCode.GDcoinObjects2.length = 0;
gdjs.txanponCode.GDgameoverObjects1.length = 0;
gdjs.txanponCode.GDgameoverObjects2.length = 0;
gdjs.txanponCode.GDmonedaObjects1.length = 0;
gdjs.txanponCode.GDmonedaObjects2.length = 0;
gdjs.txanponCode.GDmarratxoObjects1.length = 0;
gdjs.txanponCode.GDmarratxoObjects2.length = 0;
gdjs.txanponCode.GDtxanponObjects1.length = 0;
gdjs.txanponCode.GDtxanponObjects2.length = 0;
gdjs.txanponCode.GDmarrahorizntalObjects1.length = 0;
gdjs.txanponCode.GDmarrahorizntalObjects2.length = 0;
gdjs.txanponCode.GDbasoaObjects1.length = 0;
gdjs.txanponCode.GDbasoaObjects2.length = 0;
gdjs.txanponCode.GDtapObjects1.length = 0;
gdjs.txanponCode.GDtapObjects2.length = 0;
gdjs.txanponCode.GDinstructionObjects1.length = 0;
gdjs.txanponCode.GDinstructionObjects2.length = 0;


{

gdjs.txanponCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.txanponCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.txanponCode.GDmonedaObjects1.createFrom(runtimeScene.getObjects("moneda"));

gdjs.txanponCode.condition0IsTrue_0.val = false;
{
gdjs.txanponCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.txanponCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDcoinObjects1[i].hide();
}
for(var i = 0, len = gdjs.txanponCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDgameoverObjects1[i].hide();
}
for(var i = 0, len = gdjs.txanponCode.GDmonedaObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDmonedaObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "funk.ogg", true, 60, 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("MONEY", "MONEY.xml", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


{

gdjs.txanponCode.GDinstructionObjects1.createFrom(runtimeScene.getObjects("instruction"));
gdjs.txanponCode.GDtapObjects1.createFrom(runtimeScene.getObjects("tap"));

gdjs.txanponCode.condition0IsTrue_0.val = false;
{
gdjs.txanponCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.5, "hasiera");
}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.txanponCode.GDtapObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDtapObjects1[i].setOpacity(gdjs.txanponCode.GDtapObjects1[i].getOpacity() - (128*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.txanponCode.GDinstructionObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDinstructionObjects1[i].setOpacity(gdjs.txanponCode.GDinstructionObjects1[i].getOpacity() - (128*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.txanponCode.condition0IsTrue_0.val = false;
{
gdjs.txanponCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 0;
}if (gdjs.txanponCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.txanponCode.GDtxanponObjects2.createFrom(runtimeScene.getObjects("txanpon"));

gdjs.txanponCode.condition0IsTrue_0.val = false;
{
gdjs.txanponCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("txanpon", gdjs.txanponCode.GDtxanponObjects2).getEventsObjectsMap()) < 20;
}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("txanpon", gdjs.txanponCode.GDtxanponObjects2).getEventsObjectsMap(), 40+gdjs.random(680), -20, "juego");
}}

}

} //End of subevents
}

}


{


gdjs.txanponCode.condition0IsTrue_0.val = false;
{
gdjs.txanponCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "start");
}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{

gdjs.txanponCode.GDtxanponObjects1.createFrom(runtimeScene.getObjects("txanpon"));

{for(var i = 0, len = gdjs.txanponCode.GDtxanponObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDtxanponObjects1[i].addForce(0, 200, 0);
}
}
}


{

gdjs.txanponCode.GDmarrahorizntalObjects1.createFrom(runtimeScene.getObjects("marrahorizntal"));

gdjs.txanponCode.condition0IsTrue_0.val = false;
{
gdjs.txanponCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.txanponCode.GDmarrahorizntalObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDmarrahorizntalObjects1[i].rotateTowardAngle(90, 200, runtimeScene);
}
}}

}


{

gdjs.txanponCode.GDmarrahorizntalObjects1.createFrom(runtimeScene.getObjects("marrahorizntal"));

gdjs.txanponCode.condition0IsTrue_0.val = false;
{
gdjs.txanponCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.txanponCode.GDmarrahorizntalObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDmarrahorizntalObjects1[i].rotateTowardAngle(0, 200, runtimeScene);
}
}}

}


{

gdjs.txanponCode.GDtxanponObjects1.createFrom(runtimeScene.getObjects("txanpon"));

gdjs.txanponCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.txanponCode.GDtxanponObjects1.length;i<l;++i) {
    if ( gdjs.txanponCode.GDtxanponObjects1[i].getY() > 1240 ) {
        gdjs.txanponCode.condition0IsTrue_0.val = true;
        gdjs.txanponCode.GDtxanponObjects1[k] = gdjs.txanponCode.GDtxanponObjects1[i];
        ++k;
    }
}
gdjs.txanponCode.GDtxanponObjects1.length = k;}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.txanponCode.GDtxanponObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDtxanponObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.txanponCode.GDbasoaObjects1.createFrom(runtimeScene.getObjects("basoa"));

gdjs.txanponCode.condition0IsTrue_0.val = false;
{
gdjs.txanponCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("basoa", gdjs.txanponCode.GDbasoaObjects1).getEventsObjectsMap()) < 1;
}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("basoa", gdjs.txanponCode.GDbasoaObjects1).getEventsObjectsMap(), 800, 1000, "juego");
}}

}


{

gdjs.txanponCode.GDbasoaObjects1.createFrom(runtimeScene.getObjects("basoa"));

{for(var i = 0, len = gdjs.txanponCode.GDbasoaObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDbasoaObjects1[i].addForce(-200, 0, 0);
}
}
}


{

gdjs.txanponCode.GDbasoaObjects1.createFrom(runtimeScene.getObjects("basoa"));

gdjs.txanponCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.txanponCode.GDbasoaObjects1.length;i<l;++i) {
    if ( gdjs.txanponCode.GDbasoaObjects1[i].getX() < -200 ) {
        gdjs.txanponCode.condition0IsTrue_0.val = true;
        gdjs.txanponCode.GDbasoaObjects1[k] = gdjs.txanponCode.GDbasoaObjects1[i];
        ++k;
    }
}
gdjs.txanponCode.GDbasoaObjects1.length = k;}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.txanponCode.GDbasoaObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDbasoaObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.txanponCode.GDbasoaObjects1.createFrom(runtimeScene.getObjects("basoa"));
gdjs.txanponCode.GDtxanponObjects1.createFrom(runtimeScene.getObjects("txanpon"));

gdjs.txanponCode.condition0IsTrue_0.val = false;
{
gdjs.txanponCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("basoa", gdjs.txanponCode.GDbasoaObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("txanpon", gdjs.txanponCode.GDtxanponObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.txanponCode.GDtxanponObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDtxanponObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("MONEY", "MONEY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.ogg", false, 100, 1);
}}

}


{



}


{

gdjs.txanponCode.GDtxanponObjects1.createFrom(runtimeScene.getObjects("txanpon"));

gdjs.txanponCode.condition0IsTrue_0.val = false;
{
gdjs.txanponCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("txanpon", gdjs.txanponCode.GDtxanponObjects1).getEventsObjectsMap()) == 0;
}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{



}


{

gdjs.txanponCode.GDbasoaObjects1.createFrom(runtimeScene.getObjects("basoa"));
gdjs.txanponCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.txanponCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.txanponCode.GDmarrahorizntalObjects1.createFrom(runtimeScene.getObjects("marrahorizntal"));
gdjs.txanponCode.GDmarratxoObjects1.createFrom(runtimeScene.getObjects("marratxo"));
gdjs.txanponCode.GDmonedaObjects1.createFrom(runtimeScene.getObjects("moneda"));

gdjs.txanponCode.condition0IsTrue_0.val = false;
{
gdjs.txanponCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{for(var i = 0, len = gdjs.txanponCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDcoinObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.txanponCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDgameoverObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.txanponCode.GDmonedaObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDmonedaObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.txanponCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDcoinObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fin");
}{for(var i = 0, len = gdjs.txanponCode.GDbasoaObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDbasoaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.txanponCode.GDmarratxoObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDmarratxoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.txanponCode.GDmarrahorizntalObjects1.length ;i < len;++i) {
    gdjs.txanponCode.GDmarrahorizntalObjects1[i].hide();
}
}
{ //Subevents

{


gdjs.txanponCode.condition0IsTrue_0.val = false;
{
gdjs.txanponCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fin");
}if (gdjs.txanponCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "playground", true);
}}

}

} //End of subevents
}

}

return;
}
gdjs['txanponCode']= gdjs.txanponCode;
