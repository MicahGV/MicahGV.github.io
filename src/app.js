/*jshint esversion: 6 */

import './app.scss';

import whiteIcon from './assets/WhiteIcon.png';
import calendar from './assets/Calendar.png';
import particle from './assets/particle.png';
import sketchify from './assets/Sketchify.png';
import simon from './assets/Simon.png';
import calc from './assets/jsCalculator.png';
import life from './assets/gameOfLife.png';
import me from './assets/me.png';

$(document).ready(function(){
    var $root = $('html,body'),
        $nav = $('nav'),
        $about = $('.aboutProject'),
        $navPos = $nav.position().top;

    $('a[href^="#"]').click(function(){
        var href = $.attr(this,'href');
        $root.animate({
            scrollTop: href === "#nav"? $(href).offset().top : $(href).offset().top - 45
        }, 500);
        return false;
    });


    $(window).scroll(function(){
        var window_top = $(window).scrollTop(),
            nav_top = $nav.position().top;
        if(window_top >= $navPos){
            $nav.addClass('fixed');
            $about.addClass('fixHeight');
        } else {
            $nav.removeClass('fixed');
            $about.removeClass('fixHeight');
        }
    });

    textCreater();
});

var textLoader = function(ids,wordArray, timer){
    var word = wordArray[0];
    if(word != undefined){
        var letter = word.shift();
        if(letter != undefined){
            var content = document.createTextNode(letter);
            ids[0].appendChild(content);
        } else {
            wordArray.shift();
            ids.shift();
       }
    } else {
        clearInterval(timer);
    }
},
textCreater = function(){
    var titleWords = "Hello,\n I'm\nMicah.\nA developer of some kind.";
    var titleHtml = [
        document.getElementById('hello'),
        document.getElementById('im'), 
        document.getElementById('me'), 
        document.getElementById('dev'),
    ];
    var linesplit = titleWords.split('\n');
    var wordArray = linesplit.map(word => {
        var arraySpot = word.split('');
        return arraySpot;
    });
    var timer = setInterval(e=> textLoader(titleHtml,wordArray, timer),100);
};


