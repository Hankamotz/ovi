gdjs.jokoakCode = {};


gdjs.jokoakCode.GDclouObjects1= [];
gdjs.jokoakCode.GDclouObjects2= [];
gdjs.jokoakCode.GDclouObjects3= [];
gdjs.jokoakCode.GDflappObjects1= [];
gdjs.jokoakCode.GDflappObjects2= [];
gdjs.jokoakCode.GDflappObjects3= [];
gdjs.jokoakCode.GDeggdownObjects1= [];
gdjs.jokoakCode.GDeggdownObjects2= [];
gdjs.jokoakCode.GDeggdownObjects3= [];
gdjs.jokoakCode.GDflappyeggObjects1= [];
gdjs.jokoakCode.GDflappyeggObjects2= [];
gdjs.jokoakCode.GDflappyeggObjects3= [];
gdjs.jokoakCode.GDskydiveObjects1= [];
gdjs.jokoakCode.GDskydiveObjects2= [];
gdjs.jokoakCode.GDskydiveObjects3= [];
gdjs.jokoakCode.GDdowneggObjects1= [];
gdjs.jokoakCode.GDdowneggObjects2= [];
gdjs.jokoakCode.GDdowneggObjects3= [];
gdjs.jokoakCode.GDtwentycoinsObjects1= [];
gdjs.jokoakCode.GDtwentycoinsObjects2= [];
gdjs.jokoakCode.GDtwentycoinsObjects3= [];
gdjs.jokoakCode.GD20coinsObjects1= [];
gdjs.jokoakCode.GD20coinsObjects2= [];
gdjs.jokoakCode.GD20coinsObjects3= [];
gdjs.jokoakCode.GDrockpaperObjects1= [];
gdjs.jokoakCode.GDrockpaperObjects2= [];
gdjs.jokoakCode.GDrockpaperObjects3= [];
gdjs.jokoakCode.GDpapresccissorsObjects1= [];
gdjs.jokoakCode.GDpapresccissorsObjects2= [];
gdjs.jokoakCode.GDpapresccissorsObjects3= [];
gdjs.jokoakCode.GDexitObjects1= [];
gdjs.jokoakCode.GDexitObjects2= [];
gdjs.jokoakCode.GDexitObjects3= [];
gdjs.jokoakCode.GDeggtapObjects1= [];
gdjs.jokoakCode.GDeggtapObjects2= [];
gdjs.jokoakCode.GDeggtapObjects3= [];
gdjs.jokoakCode.GDeggtappObjects1= [];
gdjs.jokoakCode.GDeggtappObjects2= [];
gdjs.jokoakCode.GDeggtappObjects3= [];

gdjs.jokoakCode.conditionTrue_0 = {val:false};
gdjs.jokoakCode.condition0IsTrue_0 = {val:false};
gdjs.jokoakCode.condition1IsTrue_0 = {val:false};

gdjs.jokoakCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.jokoakCode.GDclouObjects1.length = 0;
gdjs.jokoakCode.GDclouObjects2.length = 0;
gdjs.jokoakCode.GDclouObjects3.length = 0;
gdjs.jokoakCode.GDflappObjects1.length = 0;
gdjs.jokoakCode.GDflappObjects2.length = 0;
gdjs.jokoakCode.GDflappObjects3.length = 0;
gdjs.jokoakCode.GDeggdownObjects1.length = 0;
gdjs.jokoakCode.GDeggdownObjects2.length = 0;
gdjs.jokoakCode.GDeggdownObjects3.length = 0;
gdjs.jokoakCode.GDflappyeggObjects1.length = 0;
gdjs.jokoakCode.GDflappyeggObjects2.length = 0;
gdjs.jokoakCode.GDflappyeggObjects3.length = 0;
gdjs.jokoakCode.GDskydiveObjects1.length = 0;
gdjs.jokoakCode.GDskydiveObjects2.length = 0;
gdjs.jokoakCode.GDskydiveObjects3.length = 0;
gdjs.jokoakCode.GDdowneggObjects1.length = 0;
gdjs.jokoakCode.GDdowneggObjects2.length = 0;
gdjs.jokoakCode.GDdowneggObjects3.length = 0;
gdjs.jokoakCode.GDtwentycoinsObjects1.length = 0;
gdjs.jokoakCode.GDtwentycoinsObjects2.length = 0;
gdjs.jokoakCode.GDtwentycoinsObjects3.length = 0;
gdjs.jokoakCode.GD20coinsObjects1.length = 0;
gdjs.jokoakCode.GD20coinsObjects2.length = 0;
gdjs.jokoakCode.GD20coinsObjects3.length = 0;
gdjs.jokoakCode.GDrockpaperObjects1.length = 0;
gdjs.jokoakCode.GDrockpaperObjects2.length = 0;
gdjs.jokoakCode.GDrockpaperObjects3.length = 0;
gdjs.jokoakCode.GDpapresccissorsObjects1.length = 0;
gdjs.jokoakCode.GDpapresccissorsObjects2.length = 0;
gdjs.jokoakCode.GDpapresccissorsObjects3.length = 0;
gdjs.jokoakCode.GDexitObjects1.length = 0;
gdjs.jokoakCode.GDexitObjects2.length = 0;
gdjs.jokoakCode.GDexitObjects3.length = 0;
gdjs.jokoakCode.GDeggtapObjects1.length = 0;
gdjs.jokoakCode.GDeggtapObjects2.length = 0;
gdjs.jokoakCode.GDeggtapObjects3.length = 0;
gdjs.jokoakCode.GDeggtappObjects1.length = 0;
gdjs.jokoakCode.GDeggtappObjects2.length = 0;
gdjs.jokoakCode.GDeggtappObjects3.length = 0;


{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("DIRTY", "DIRTY.xml", runtimeScene, runtimeScene.getVariables().getFromIndex(1));
}{gdjs.evtTools.storage.readNumberFromJSONFile("BORED", "BORED.xml", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


{

gdjs.jokoakCode.GDclouObjects1.createFrom(runtimeScene.getObjects("clou"));

gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("clou", gdjs.jokoakCode.GDclouObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "zerua", true);
}
{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 1;
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("BORED", "BORED.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{runtimeScene.getVariables().getFromIndex(1).add(0+gdjs.random(1));
}{gdjs.evtTools.storage.writeNumberInJSONFile("DIRTY", "DIRTY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}

} //End of subevents
}

}

} //End of subevents
}

}


{

gdjs.jokoakCode.GDflappObjects1.createFrom(runtimeScene.getObjects("flapp"));

gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("flapp", gdjs.jokoakCode.GDflappObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "topos", true);
}
{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 1;
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("BORED", "BORED.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{runtimeScene.getVariables().getFromIndex(1).add(0+gdjs.random(1));
}{gdjs.evtTools.storage.writeNumberInJSONFile("DIRTY", "DIRTY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}

} //End of subevents
}

}

} //End of subevents
}

}


{

gdjs.jokoakCode.GDeggdownObjects1.createFrom(runtimeScene.getObjects("eggdown"));

gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("eggdown", gdjs.jokoakCode.GDeggdownObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "salto", true);
}
{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 1;
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("BORED", "BORED.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{runtimeScene.getVariables().getFromIndex(1).add(0+gdjs.random(1));
}{gdjs.evtTools.storage.writeNumberInJSONFile("DIRTY", "DIRTY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}

} //End of subevents
}

}

} //End of subevents
}

}


{

gdjs.jokoakCode.GDtwentycoinsObjects1.createFrom(runtimeScene.getObjects("twentycoins"));

gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("twentycoins", gdjs.jokoakCode.GDtwentycoinsObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "txanpon", true);
}
{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 1;
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("BORED", "BORED.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{runtimeScene.getVariables().getFromIndex(1).add(0+gdjs.random(1));
}{gdjs.evtTools.storage.writeNumberInJSONFile("DIRTY", "DIRTY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}

} //End of subevents
}

}

} //End of subevents
}

}


{

gdjs.jokoakCode.GDrockpaperObjects1.createFrom(runtimeScene.getObjects("rockpaper"));

gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("rockpaper", gdjs.jokoakCode.GDrockpaperObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "rockpaper", true);
}
{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 1;
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("BORED", "BORED.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{runtimeScene.getVariables().getFromIndex(1).add(0+gdjs.random(1));
}{gdjs.evtTools.storage.writeNumberInJSONFile("DIRTY", "DIRTY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}

} //End of subevents
}

}

} //End of subevents
}

}


{

gdjs.jokoakCode.GDeggtapObjects1.createFrom(runtimeScene.getObjects("eggtap"));

gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("eggtap", gdjs.jokoakCode.GDeggtapObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "crash", true);
}
{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 1;
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).sub(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("BORED", "BORED.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{runtimeScene.getVariables().getFromIndex(1).add(0+gdjs.random(1));
}{gdjs.evtTools.storage.writeNumberInJSONFile("DIRTY", "DIRTY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}}

}

} //End of subevents
}

}

} //End of subevents
}

}


{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "start");
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.jokoakCode.GDexitObjects2.createFrom(runtimeScene.getObjects("exit"));

gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("exit", gdjs.jokoakCode.GDexitObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.jokoakCode.condition0IsTrue_0.val = false;
{
gdjs.jokoakCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.jokoakCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "playground", true);
}}

}

} //End of subevents
}

}

} //End of subevents
}

}

return;
}
gdjs['jokoakCode']= gdjs.jokoakCode;
