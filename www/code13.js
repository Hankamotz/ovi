gdjs.creditsCode = {};


gdjs.creditsCode.GDNuevoObjetoObjects1= [];
gdjs.creditsCode.GDNuevoObjetoObjects2= [];
gdjs.creditsCode.GDexitObjects1= [];
gdjs.creditsCode.GDexitObjects2= [];
gdjs.creditsCode.GDcreditObjects1= [];
gdjs.creditsCode.GDcreditObjects2= [];

gdjs.creditsCode.conditionTrue_0 = {val:false};
gdjs.creditsCode.condition0IsTrue_0 = {val:false};
gdjs.creditsCode.condition1IsTrue_0 = {val:false};

gdjs.creditsCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.creditsCode.GDNuevoObjetoObjects1.length = 0;
gdjs.creditsCode.GDNuevoObjetoObjects2.length = 0;
gdjs.creditsCode.GDexitObjects1.length = 0;
gdjs.creditsCode.GDexitObjects2.length = 0;
gdjs.creditsCode.GDcreditObjects1.length = 0;
gdjs.creditsCode.GDcreditObjects2.length = 0;


{

gdjs.creditsCode.GDexitObjects1.createFrom(runtimeScene.getObjects("exit"));

gdjs.creditsCode.condition0IsTrue_0.val = false;
{
gdjs.creditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("exit", gdjs.creditsCode.GDexitObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.creditsCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.creditsCode.condition0IsTrue_0.val = false;
{
gdjs.creditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.creditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "juego", true);
}}

}

} //End of subevents
}

}

return;
}
gdjs['creditsCode']= gdjs.creditsCode;
