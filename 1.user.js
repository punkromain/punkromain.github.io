// ==UserScript==
// @name         trupbot
// @description  test
// @author       soloromail@gmail.com, Deimon, Ненчык-патыр, Старовер
// @match        http://trupgame.ru/*
// ==/UserScript==
/* jshint -W097 */
if(location.href.match('trupgame.ru')) {
var i=0;
var tx='';
speed=1;
kast = 0;
/*
Поиск текста на странице
пример: legendsFindText("Победа");
*/
function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}


/*
Поиск ссылок на странице
пример: legendsFindLink("Бой");
*/

function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkA(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text==tx) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkEnd(tx) {l=0;
for(i=0;i<document.links.length;i++){
if(document.links[i].text.match(tx)) {l=document.links[i].href;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkD(tx,bx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].innerHTML.match(bx)&&document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinker(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].href.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
/*
Переход по ссылке с интервалом
*/
function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}

/*
Проверка значения хранилища
*/
function legendsIsStorage(name, tx) {if(localStorage.getItem(name)==tx) { return true; } else { return false;}}
function legendsCoord(hh) {
for(var i=0;i<document.getElementsByTagName('b').length;i++)
{
if(document.getElementsByTagName('b')[i].innerHTML.match("/"))
{
var sdf=document.getElementsByTagName('b')[i].innerHTML;
var hgf=sdf.split('/');
y=parseInt(hgf[0]);
x=parseInt(hgf[1]);
i=document.getElementsByTagName('b').length;
}
}
if(hh=="x") {return x;} if(hh=="y") {return y;}
}
/*
Назначение для хранилища
*/
function legendsSet(name, tx) {if(localStorage.setItem(name, tx)) { return true; } else { return false;}}
function legendsI(name, tx) {document.getElementById(name).innerHTML=tx;}

function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;}


legendsLink('http://trupgame.ru/?select=mb0&ataka', 5000);



}
