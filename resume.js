"use strict";


//Smooth scroll
var buttons= document.getElementsByClassName('navbarlist-a');

for(var i=0; i<buttons.length;i++){
    buttons[i].addEventListener('click', function(event){
        event.preventDefault();
        var currentpos=0;
       var targetpos= document.querySelector(this.getAttribute('href')).getBoundingClientRect();
       var coordinate= targetpos.y;
       // console.log(coordinate);

       var id= setInterval(function(){
           if(currentpos>=coordinate){
               clearInterval(id);
           }else{
               window.scrollBy(0,100);
               currentpos+=100;
           }
       },25)

    });
}

//Fill-SkillBar
var skillSection= document.getElementById('skills-indicators-section');
var skillbar= document.getElementsByClassName('skill-indicator-inner');
var animation=false;

function initialiseBars(){
    for (var i of skillbar){
        i.style.width='0px';
    }
}

initialiseBars();
window.addEventListener('scroll',function(){

        var currentpos=window.pageYOffset;
        var pos=skillSection.getBoundingClientRect();

        if(!animation&&currentpos>=pos.top){
            animation=true;
            for(var i=0; i<skillbar.length;i++){
                var barWidth=skillbar[i].getAttribute('data-bar-width');
                skillbar[i].style.width= barWidth+'%';
            }
        }else if(currentpos<=pos.top){
            animation=false;
            initialiseBars();
        }


})