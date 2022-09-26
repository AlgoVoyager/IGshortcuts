let sm = document.createElement('li');
sm.setAttribute("style", "order:9");
sm.setAttribute("class","MainList")
sm.innerHTML = "<a style='color:black' href='#js-scroll-to-studyMaterials'>StudyMaterials</a>";
document.querySelector('#mainMenu').appendChild(sm);

let lect = document.createElement('li');
lect.setAttribute("style", "order:11");
lect.setAttribute("class","MainList")
lect.innerHTML = "<a style='color:black' href='#js-scroll-to-videos'>Lectures</a>";
document.querySelector('#mainMenu').appendChild(lect);

let tests = document.createElement('li');
tests.setAttribute("style", "order:13");
tests.setAttribute("class","MainList")
tests.innerHTML = "<a style='color:black' href='#js-scroll-to-tests'>Tests</a>";
document.querySelector('#mainMenu').appendChild(tests);

document.querySelector('.banner').style.display="none";
document.querySelector('.packageDiv').style.display="none";
document.querySelector('.additional-benefits').style.display="none";


var expandmath  = document.querySelector (".std_material_caption");

var clickEvent  = document.createEvent ('MouseEvents');
window.addEventListener("keydown", (event)=> {
    if (event.keyCode === 220) { 
      event.preventDefault();
clickEvent.initEvent ('click', true, true);
expandmath.dispatchEvent (clickEvent);
setTimeout(function(){
 	window.open('#loginModalAppend','_self');
}, 500);

}
  });
