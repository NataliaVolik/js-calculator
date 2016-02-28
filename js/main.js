function setScreen(v){
    $('.screen').html(v);
}

function buttonClickHandler(eventObject){
    setScreen(eventObject.currentTarget.className);
}










$(document).ready(function(){
    $('.button').click(buttonClickHandler);
});