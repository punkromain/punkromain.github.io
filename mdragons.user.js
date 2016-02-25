// ==UserScript==
// @name         epoxa_Bot
// @description  полный
// @author       soloromail@gmail.com, Deimon, Ненчык-патыр, Старовер
// @match        http://mdragons.mobi/*
// ==/UserScript==
/* jshint -W097 */
//mdragons.mobi
//legendsLink(dk,500);
if(location.href.match('mdragons.mobi')) {
speed=1;
oazis = 14902;
atak = 24;
//ТЕКСТ
function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}
//ССЫЛКИ
function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)&&!document.links[i].text.match('Собрать все')) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkA(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text==tx) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkAn(tx) {for(i=0;i<document.links.length;i++){if(document.links[i].text==tx) {l=i; break;}} return l;}

function legendsFindLinkEnd(tx) {l=0;for(i=0;i<document.links.length-1;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinkD(tx,bx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].innerHTML.match(bx)&&document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
//function legendsFindLinkD(tx,bx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].innerHTML.match(bx)&&document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsFindLinker(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].href.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
/*Переход по ссылке с интервалом*/
function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}
/*Проверка значения хранилища*/
function legendsIsStorage(name, tx) {if(localStorage.getItem(name)==tx) { return true; } else { return false;}}
function legendsGet(name) {return localStorage.getItem(name);}


function legendsSetInput(n,a) {if(n!=""&&a!="") {document.getElementsByTagName('input')[n].value=a;}}

function legendsCoord(hh) {for(var i=0;i<document.getElementsByTagName('b').length;i++){if(document.getElementsByTagName('b')[i].innerHTML.match("/")){var sdf=document.getElementsByTagName('b')[i].innerHTML;var hgf=sdf.split('/');y=parseInt(hgf[0]);x=parseInt(hgf[1]);i=document.getElementsByTagName('b').length;}}if(hh=="x") {return x;} if(hh=="y") {return y;}}
/*Назначение для хранилища*/
function legendsSet(name, tx) {if(localStorage.setItem(name, tx)) { return true; } else { return false;}}
function legendsI(name, tx) {document.getElementById(name).innerHTML=tx;}
function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;}
function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


if(2==2){

if(legendsFindText('Ферма')&&location.href.match('farm')) {
legendsLink(legendsFindLinkA('Посадить'), 1);
legendsLink(legendsFindLinkA('Собрать'), 1);
legendsLink('http://mdragons.mobi/farm', 5000);
}
if(legendsFindText('Список обителей')&&location.href.match('habitats')) {
legendsLink(legendsFindLink('Собрать'), 10000);

}
if(legendsFindText('Удачи в бою!')){
legendsLink(legendsFindLink('Обновить'), 1000);
}
if(legendsFindLink('Сменить')&&!legendsFindText('Напасть')){
j = 0;
lk=0;
var dk = legendsFindLink('Обновить');
for(i=0;i<document.links.length;i++){
	el = document.links[i];
if(el.getAttribute('class')!=null) {dk = (el.getAttribute('class').match('pe') ? el.href : dk);	lk=1;}
}
legendsLink(dk,(lk==1 ? 500 : 1000));
//legendsLink(document.getElementsByClassName('perk_border')[1].href,500);
//legendsLink(document.getElementsByClassName('perk_border')[0].href,1000);
//alert(document.getElementsByClassName('perk_border')[0]);
}
if(location.href.match('duel')){
//btn_g_in
if(document.links[legendsFindLinkAn('Напасть')].getAttribute('class')=='btn_g w120') {
legendsLink(legendsFindLink('Напасть'), 1);
}else{
legendsLink(legendsFindLink('Сменить'), 1);
}
//legendsLink(document.getElementsByClassName('perk_border')[0],1000);


}
if(legendsFindText('Состязания')&&location.href.match('comp')&&location.href.match('pvp')) {
legendsLink(legendsFindLink('Записаться'), 1);
legendsLink(legendsFindLink('Обновить'), 4000);
legendsLink(legendsFindLink('Еще раз'), 1);
}





legendsLink(legendsFindLink('Еще раз'), 1);



}
legendsLink(legendsFindLink('Обновить'), 5000);
if(legendsFindText('Поединки')&&location.href.match('1x1')) {

if(!legendsFindText('вызывает тебя на поединок')&&!legendsFindText('Лог боя')&&!legendsFindText('через')){
legendsLink('http://mdragons.mobi/pvp/1x1', 3000);
}else{
legendsLink(legendsFindLink('Принять'), 1);
}
if(legendsFindText('Лог боя')||legendsFindText('через')){
legendsLink(legendsFindLink('Еще!'), 1);
}



}


}

// Your code here...
