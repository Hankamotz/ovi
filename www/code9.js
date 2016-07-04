gdjs.saltoCode = {};


gdjs.saltoCode.GDarraultzObjects1= [];
gdjs.saltoCode.GDarraultzObjects2= [];
gdjs.saltoCode.GDarraultzObjects3= [];
gdjs.saltoCode.GDarraultzObjects4= [];
gdjs.saltoCode.GDcoinObjects1= [];
gdjs.saltoCode.GDcoinObjects2= [];
gdjs.saltoCode.GDcoinObjects3= [];
gdjs.saltoCode.GDcoinObjects4= [];
gdjs.saltoCode.GDgameoverObjects1= [];
gdjs.saltoCode.GDgameoverObjects2= [];
gdjs.saltoCode.GDgameoverObjects3= [];
gdjs.saltoCode.GDgameoverObjects4= [];
gdjs.saltoCode.GDmonedaObjects1= [];
gdjs.saltoCode.GDmonedaObjects2= [];
gdjs.saltoCode.GDmonedaObjects3= [];
gdjs.saltoCode.GDmonedaObjects4= [];
gdjs.saltoCode.GDlineaObjects1= [];
gdjs.saltoCode.GDlineaObjects2= [];
gdjs.saltoCode.GDlineaObjects3= [];
gdjs.saltoCode.GDlineaObjects4= [];
gdjs.saltoCode.GDlineabiObjects1= [];
gdjs.saltoCode.GDlineabiObjects2= [];
gdjs.saltoCode.GDlineabiObjects3= [];
gdjs.saltoCode.GDlineabiObjects4= [];
gdjs.saltoCode.GDtapObjects1= [];
gdjs.saltoCode.GDtapObjects2= [];
gdjs.saltoCode.GDtapObjects3= [];
gdjs.saltoCode.GDtapObjects4= [];
gdjs.saltoCode.GDinstructionObjects1= [];
gdjs.saltoCode.GDinstructionObjects2= [];
gdjs.saltoCode.GDinstructionObjects3= [];
gdjs.saltoCode.GDinstructionObjects4= [];

gdjs.saltoCode.conditionTrue_0 = {val:false};
gdjs.saltoCode.condition0IsTrue_0 = {val:false};
gdjs.saltoCode.condition1IsTrue_0 = {val:false};

gdjs.saltoCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.saltoCode.GDarraultzObjects1.length = 0;
gdjs.saltoCode.GDarraultzObjects2.length = 0;
gdjs.saltoCode.GDarraultzObjects3.length = 0;
gdjs.saltoCode.GDarraultzObjects4.length = 0;
gdjs.saltoCode.GDcoinObjects1.length = 0;
gdjs.saltoCode.GDcoinObjects2.length = 0;
gdjs.saltoCode.GDcoinObjects3.length = 0;
gdjs.saltoCode.GDcoinObjects4.length = 0;
gdjs.saltoCode.GDgameoverObjects1.length = 0;
gdjs.saltoCode.GDgameoverObjects2.length = 0;
gdjs.saltoCode.GDgameoverObjects3.length = 0;
gdjs.saltoCode.GDgameoverObjects4.length = 0;
gdjs.saltoCode.GDmonedaObjects1.length = 0;
gdjs.saltoCode.GDmonedaObjects2.length = 0;
gdjs.saltoCode.GDmonedaObjects3.length = 0;
gdjs.saltoCode.GDmonedaObjects4.length = 0;
gdjs.saltoCode.GDlineaObjects1.length = 0;
gdjs.saltoCode.GDlineaObjects2.length = 0;
gdjs.saltoCode.GDlineaObjects3.length = 0;
gdjs.saltoCode.GDlineaObjects4.length = 0;
gdjs.saltoCode.GDlineabiObjects1.length = 0;
gdjs.saltoCode.GDlineabiObjects2.length = 0;
gdjs.saltoCode.GDlineabiObjects3.length = 0;
gdjs.saltoCode.GDlineabiObjects4.length = 0;
gdjs.saltoCode.GDtapObjects1.length = 0;
gdjs.saltoCode.GDtapObjects2.length = 0;
gdjs.saltoCode.GDtapObjects3.length = 0;
gdjs.saltoCode.GDtapObjects4.length = 0;
gdjs.saltoCode.GDinstructionObjects1.length = 0;
gdjs.saltoCode.GDinstructionObjects2.length = 0;
gdjs.saltoCode.GDinstructionObjects3.length = 0;
gdjs.saltoCode.GDinstructionObjects4.length = 0;


{

gdjs.saltoCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.saltoCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.saltoCode.GDmonedaObjects1.createFrom(runtimeScene.getObjects("moneda"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDcoinObjects1[i].hide();
}
for(var i = 0, len = gdjs.saltoCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDgameoverObjects1[i].hide();
}
for(var i = 0, len = gdjs.saltoCode.GDmonedaObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDmonedaObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "mix.ogg", true, 60, 1);
}{gdjs.evtTools.storage.readNumberFromJSONFile("MONEY", "MONEY.xml", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}}

}


{

gdjs.saltoCode.GDinstructionObjects1.createFrom(runtimeScene.getObjects("instruction"));
gdjs.saltoCode.GDtapObjects1.createFrom(runtimeScene.getObjects("tap"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3.5, "hasiera");
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDtapObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDtapObjects1[i].setOpacity(gdjs.saltoCode.GDtapObjects1[i].getOpacity() - (128*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.saltoCode.GDinstructionObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDinstructionObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}
{ //Subevents

{


gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.saltoCode.condition0IsTrue_0.val) {

{ //Subevents

{


gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) < 360;
}if (gdjs.saltoCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.saltoCode.GDarraultzObjects4.createFrom(runtimeScene.getObjects("arraultz"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.saltoCode.GDarraultzObjects4.length;i<l;++i) {
    if ( !(gdjs.saltoCode.GDarraultzObjects4[i].getX() <= 90) ) {
        gdjs.saltoCode.condition0IsTrue_0.val = true;
        gdjs.saltoCode.GDarraultzObjects4[k] = gdjs.saltoCode.GDarraultzObjects4[i];
        ++k;
    }
}
gdjs.saltoCode.GDarraultzObjects4.length = k;}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDarraultzObjects4.length ;i < len;++i) {
    gdjs.saltoCode.GDarraultzObjects4[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.saltoCode.GDarraultzObjects4.length ;i < len;++i) {
    gdjs.saltoCode.GDarraultzObjects4[i].rotate(-300, runtimeScene);
}
}}

}

} //End of subevents
}

}


{


gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) > 360;
}if (gdjs.saltoCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.saltoCode.GDarraultzObjects4.createFrom(runtimeScene.getObjects("arraultz"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.saltoCode.GDarraultzObjects4.length;i<l;++i) {
    if ( !(gdjs.saltoCode.GDarraultzObjects4[i].getX() >= 630) ) {
        gdjs.saltoCode.condition0IsTrue_0.val = true;
        gdjs.saltoCode.GDarraultzObjects4[k] = gdjs.saltoCode.GDarraultzObjects4[i];
        ++k;
    }
}
gdjs.saltoCode.GDarraultzObjects4.length = k;}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDarraultzObjects4.length ;i < len;++i) {
    gdjs.saltoCode.GDarraultzObjects4[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.saltoCode.GDarraultzObjects4.length ;i < len;++i) {
    gdjs.saltoCode.GDarraultzObjects4[i].rotate(300, runtimeScene);
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



}


{

gdjs.saltoCode.GDarraultzObjects1.createFrom(runtimeScene.getObjects("arraultz"));
gdjs.saltoCode.GDlineaObjects1.createFrom(runtimeScene.getObjects("linea"));
gdjs.saltoCode.GDlineabiObjects1.createFrom(runtimeScene.getObjects("lineabi"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("linea", gdjs.saltoCode.GDlineaObjects1).addObjectsToEventsMap("lineabi", gdjs.saltoCode.GDlineabiObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("arraultz", gdjs.saltoCode.GDarraultzObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDarraultzObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDarraultzObjects1[i].addForce(0, -300, 0);
}
}}

}


{

gdjs.saltoCode.GDarraultzObjects1.createFrom(runtimeScene.getObjects("arraultz"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.saltoCode.GDarraultzObjects1.length;i<l;++i) {
    if ( !(gdjs.saltoCode.GDarraultzObjects1[i].getY() >= 1132) ) {
        gdjs.saltoCode.condition0IsTrue_0.val = true;
        gdjs.saltoCode.GDarraultzObjects1[k] = gdjs.saltoCode.GDarraultzObjects1[i];
        ++k;
    }
}
gdjs.saltoCode.GDarraultzObjects1.length = k;}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDarraultzObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDarraultzObjects1[i].addForce(0, 150, 0);
}
}}

}


{



}


{

gdjs.saltoCode.GDlineaObjects1.createFrom(runtimeScene.getObjects("linea"));
gdjs.saltoCode.GDlineabiObjects1.createFrom(runtimeScene.getObjects("lineabi"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("linea", gdjs.saltoCode.GDlineaObjects1).addObjectsToEventsMap("lineabi", gdjs.saltoCode.GDlineabiObjects1).getEventsObjectsMap()) < 1;
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("linea", gdjs.saltoCode.GDlineaObjects1).getEventsObjectsMap(), 300+gdjs.random(280), 1230, "");
}}

}


{

gdjs.saltoCode.GDlineaObjects1.createFrom(runtimeScene.getObjects("linea"));
gdjs.saltoCode.GDlineabiObjects1.createFrom(runtimeScene.getObjects("lineabi"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("linea", gdjs.saltoCode.GDlineaObjects1).addObjectsToEventsMap("lineabi", gdjs.saltoCode.GDlineabiObjects1).getEventsObjectsMap()) < 2;
}if (gdjs.saltoCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.saltoCode.GDlineaObjects2.createFrom(gdjs.saltoCode.GDlineaObjects1);
gdjs.saltoCode.GDlineabiObjects2.createFrom(gdjs.saltoCode.GDlineabiObjects1);

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.saltoCode.GDlineaObjects2.length;i<l;++i) {
    if ( gdjs.saltoCode.GDlineaObjects2[i].getY() < 980 ) {
        gdjs.saltoCode.condition0IsTrue_0.val = true;
        gdjs.saltoCode.GDlineaObjects2[k] = gdjs.saltoCode.GDlineaObjects2[i];
        ++k;
    }
}
gdjs.saltoCode.GDlineaObjects2.length = k;}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("lineabi", gdjs.saltoCode.GDlineabiObjects2).getEventsObjectsMap(), (( gdjs.saltoCode.GDlineaObjects2.length === 0 ) ? 0 :gdjs.saltoCode.GDlineaObjects2[0].getPointX(""))-600, 1230, "");
}}

}

} //End of subevents
}

}


{

gdjs.saltoCode.GDlineaObjects1.createFrom(runtimeScene.getObjects("linea"));
gdjs.saltoCode.GDlineabiObjects1.createFrom(runtimeScene.getObjects("lineabi"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("linea", gdjs.saltoCode.GDlineaObjects1).addObjectsToEventsMap("lineabi", gdjs.saltoCode.GDlineabiObjects1).getEventsObjectsMap()) < 3;
}if (gdjs.saltoCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.saltoCode.GDlineaObjects2.createFrom(gdjs.saltoCode.GDlineaObjects1);

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.saltoCode.GDlineaObjects2.length;i<l;++i) {
    if ( gdjs.saltoCode.GDlineaObjects2[i].getY() < 730 ) {
        gdjs.saltoCode.condition0IsTrue_0.val = true;
        gdjs.saltoCode.GDlineaObjects2[k] = gdjs.saltoCode.GDlineaObjects2[i];
        ++k;
    }
}
gdjs.saltoCode.GDlineaObjects2.length = k;}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("linea", gdjs.saltoCode.GDlineaObjects2).getEventsObjectsMap(), 300+gdjs.random(280), 1230, "");
}}

}

} //End of subevents
}

}


{

gdjs.saltoCode.GDlineaObjects1.createFrom(runtimeScene.getObjects("linea"));
gdjs.saltoCode.GDlineabiObjects1.createFrom(runtimeScene.getObjects("lineabi"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("linea", gdjs.saltoCode.GDlineaObjects1).addObjectsToEventsMap("lineabi", gdjs.saltoCode.GDlineabiObjects1).getEventsObjectsMap()) < 4;
}if (gdjs.saltoCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.saltoCode.GDlineaObjects2.createFrom(gdjs.saltoCode.GDlineaObjects1);
gdjs.saltoCode.GDlineabiObjects2.createFrom(gdjs.saltoCode.GDlineabiObjects1);

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.saltoCode.GDlineaObjects2.length;i<l;++i) {
    if ( gdjs.saltoCode.GDlineaObjects2[i].getY() < 480 ) {
        gdjs.saltoCode.condition0IsTrue_0.val = true;
        gdjs.saltoCode.GDlineaObjects2[k] = gdjs.saltoCode.GDlineaObjects2[i];
        ++k;
    }
}
gdjs.saltoCode.GDlineaObjects2.length = k;}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("lineabi", gdjs.saltoCode.GDlineabiObjects2).getEventsObjectsMap(), (( gdjs.saltoCode.GDlineaObjects2.length === 0 ) ? 0 :gdjs.saltoCode.GDlineaObjects2[0].getPointX(""))-600, 1230, "");
}}

}

} //End of subevents
}

}


{

gdjs.saltoCode.GDlineaObjects1.createFrom(runtimeScene.getObjects("linea"));
gdjs.saltoCode.GDlineabiObjects1.createFrom(runtimeScene.getObjects("lineabi"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("linea", gdjs.saltoCode.GDlineaObjects1).addObjectsToEventsMap("lineabi", gdjs.saltoCode.GDlineabiObjects1).getEventsObjectsMap()) < 5;
}if (gdjs.saltoCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.saltoCode.GDlineaObjects2.createFrom(gdjs.saltoCode.GDlineaObjects1);

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.saltoCode.GDlineaObjects2.length;i<l;++i) {
    if ( gdjs.saltoCode.GDlineaObjects2[i].getY() < 230 ) {
        gdjs.saltoCode.condition0IsTrue_0.val = true;
        gdjs.saltoCode.GDlineaObjects2[k] = gdjs.saltoCode.GDlineaObjects2[i];
        ++k;
    }
}
gdjs.saltoCode.GDlineaObjects2.length = k;}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("linea", gdjs.saltoCode.GDlineaObjects2).getEventsObjectsMap(), 300+gdjs.random(280), 1230, "");
}}

}

} //End of subevents
}

}


{

gdjs.saltoCode.GDlineaObjects1.createFrom(runtimeScene.getObjects("linea"));
gdjs.saltoCode.GDlineabiObjects1.length = 0;

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.saltoCode.GDlineaObjects1.length;i<l;++i) {
    if ( gdjs.saltoCode.GDlineaObjects1[i].getY() < -20 ) {
        gdjs.saltoCode.condition0IsTrue_0.val = true;
        gdjs.saltoCode.GDlineaObjects1[k] = gdjs.saltoCode.GDlineaObjects1[i];
        ++k;
    }
}
gdjs.saltoCode.GDlineaObjects1.length = k;}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("lineabi", gdjs.saltoCode.GDlineabiObjects1).getEventsObjectsMap(), (( gdjs.saltoCode.GDlineaObjects1.length === 0 ) ? 0 :gdjs.saltoCode.GDlineaObjects1[0].getPointX(""))-600, 1230, "");
}{runtimeScene.getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.ogg", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("MONEY", "MONEY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.saltoCode.GDlineaObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDlineaObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.saltoCode.GDlineabiObjects1.createFrom(runtimeScene.getObjects("lineabi"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.saltoCode.GDlineabiObjects1.length;i<l;++i) {
    if ( gdjs.saltoCode.GDlineabiObjects1[i].getY() < -20 ) {
        gdjs.saltoCode.condition0IsTrue_0.val = true;
        gdjs.saltoCode.GDlineabiObjects1[k] = gdjs.saltoCode.GDlineabiObjects1[i];
        ++k;
    }
}
gdjs.saltoCode.GDlineabiObjects1.length = k;}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.ogg", false, 100, 1);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("MONEY", "MONEY.xml", gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.saltoCode.GDlineabiObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDlineabiObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.saltoCode.GDlineaObjects1.createFrom(runtimeScene.getObjects("linea"));
gdjs.saltoCode.GDlineabiObjects1.createFrom(runtimeScene.getObjects("lineabi"));

{for(var i = 0, len = gdjs.saltoCode.GDlineaObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDlineaObjects1[i].addForce(0, -150, 0);
}
for(var i = 0, len = gdjs.saltoCode.GDlineabiObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDlineabiObjects1[i].addForce(0, -150, 0);
}
}
}


{

gdjs.saltoCode.GDlineaObjects1.createFrom(runtimeScene.getObjects("linea"));
gdjs.saltoCode.GDlineabiObjects1.createFrom(runtimeScene.getObjects("lineabi"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 5;
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDlineaObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDlineaObjects1[i].addForce(0, -50, 0);
}
for(var i = 0, len = gdjs.saltoCode.GDlineabiObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDlineabiObjects1[i].addForce(0, -50, 0);
}
}
{ //Subevents

{

gdjs.saltoCode.GDarraultzObjects2.createFrom(runtimeScene.getObjects("arraultz"));
gdjs.saltoCode.GDlineaObjects2.createFrom(gdjs.saltoCode.GDlineaObjects1);
gdjs.saltoCode.GDlineabiObjects2.createFrom(gdjs.saltoCode.GDlineabiObjects1);

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("linea", gdjs.saltoCode.GDlineaObjects2).addObjectsToEventsMap("lineabi", gdjs.saltoCode.GDlineabiObjects2).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("arraultz", gdjs.saltoCode.GDarraultzObjects2).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDarraultzObjects2.length ;i < len;++i) {
    gdjs.saltoCode.GDarraultzObjects2[i].addForce(0, -50, 0);
}
}}

}

} //End of subevents
}

}


{

gdjs.saltoCode.GDlineaObjects1.createFrom(runtimeScene.getObjects("linea"));
gdjs.saltoCode.GDlineabiObjects1.createFrom(runtimeScene.getObjects("lineabi"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 10;
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDlineaObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDlineaObjects1[i].addForce(0, -50, 0);
}
for(var i = 0, len = gdjs.saltoCode.GDlineabiObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDlineabiObjects1[i].addForce(0, -50, 0);
}
}
{ //Subevents

{

gdjs.saltoCode.GDarraultzObjects2.createFrom(runtimeScene.getObjects("arraultz"));
gdjs.saltoCode.GDlineaObjects2.createFrom(gdjs.saltoCode.GDlineaObjects1);
gdjs.saltoCode.GDlineabiObjects2.createFrom(gdjs.saltoCode.GDlineabiObjects1);

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("linea", gdjs.saltoCode.GDlineaObjects2).addObjectsToEventsMap("lineabi", gdjs.saltoCode.GDlineabiObjects2).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("arraultz", gdjs.saltoCode.GDarraultzObjects2).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDarraultzObjects2.length ;i < len;++i) {
    gdjs.saltoCode.GDarraultzObjects2[i].addForce(0, -50, 0);
}
}}

}

} //End of subevents
}

}


{

gdjs.saltoCode.GDlineaObjects1.createFrom(runtimeScene.getObjects("linea"));
gdjs.saltoCode.GDlineabiObjects1.createFrom(runtimeScene.getObjects("lineabi"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 20;
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDlineaObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDlineaObjects1[i].addForce(0, -50, 0);
}
for(var i = 0, len = gdjs.saltoCode.GDlineabiObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDlineabiObjects1[i].addForce(0, -50, 0);
}
}
{ //Subevents

{

gdjs.saltoCode.GDarraultzObjects2.createFrom(runtimeScene.getObjects("arraultz"));
gdjs.saltoCode.GDlineaObjects2.createFrom(gdjs.saltoCode.GDlineaObjects1);
gdjs.saltoCode.GDlineabiObjects2.createFrom(gdjs.saltoCode.GDlineabiObjects1);

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("linea", gdjs.saltoCode.GDlineaObjects2).addObjectsToEventsMap("lineabi", gdjs.saltoCode.GDlineabiObjects2).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("arraultz", gdjs.saltoCode.GDarraultzObjects2).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDarraultzObjects2.length ;i < len;++i) {
    gdjs.saltoCode.GDarraultzObjects2[i].addForce(0, -50, 0);
}
}}

}

} //End of subevents
}

}


{

gdjs.saltoCode.GDarraultzObjects1.createFrom(runtimeScene.getObjects("arraultz"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.saltoCode.GDarraultzObjects1.length;i<l;++i) {
    if ( gdjs.saltoCode.GDarraultzObjects1[i].getY() < -20 ) {
        gdjs.saltoCode.condition0IsTrue_0.val = true;
        gdjs.saltoCode.GDarraultzObjects1[k] = gdjs.saltoCode.GDarraultzObjects1[i];
        ++k;
    }
}
gdjs.saltoCode.GDarraultzObjects1.length = k;}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{



}


{

gdjs.saltoCode.GDarraultzObjects1.createFrom(runtimeScene.getObjects("arraultz"));
gdjs.saltoCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.saltoCode.GDgameoverObjects1.createFrom(runtimeScene.getObjects("gameover"));
gdjs.saltoCode.GDlineaObjects1.createFrom(runtimeScene.getObjects("linea"));
gdjs.saltoCode.GDlineabiObjects1.createFrom(runtimeScene.getObjects("lineabi"));
gdjs.saltoCode.GDmonedaObjects1.createFrom(runtimeScene.getObjects("moneda"));

gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.saltoCode.GDarraultzObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDarraultzObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.saltoCode.GDlineaObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDlineaObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.saltoCode.GDlineabiObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDlineabiObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}{for(var i = 0, len = gdjs.saltoCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDcoinObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.saltoCode.GDgameoverObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDgameoverObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.saltoCode.GDmonedaObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDmonedaObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.saltoCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.saltoCode.GDcoinObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fin");
}
{ //Subevents

{


gdjs.saltoCode.condition0IsTrue_0.val = false;
{
gdjs.saltoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "fin");
}if (gdjs.saltoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "playground", true);
}}

}

} //End of subevents
}

}

return;
}
gdjs['saltoCode']= gdjs.saltoCode;
