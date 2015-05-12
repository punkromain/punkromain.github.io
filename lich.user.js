// ==Userscript==
// @name tkonline_bot
// @description бот пути патших
// @author soloromail@gmail.com (Deimon, Старовер)
// @include http:///tkonline.mobi/*
// ==/Userscript==
(function(){
if(location.href.match('tkonline.mobi')) {
function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}

function legendsClickg(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];break;}}}setTimeout(function(){go.click();}, sec);}
/*
Поиск ссылок на странице
пример: legendsFindLink("Бой");
*/
function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
function legendsHrefLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].href.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}
/*
Переход по ссылке с интервалом

*/
function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}

/*
Проверка значения хранилища
*/
function legendsIsStorage(name, tx) {if(localStorage.getItem(name)==tx) { return true; } else { return false;}}

/*
Назначение для хранилища
*/
function legendsSet(name, tx) {if(localStorage.setItem(name, tx)) { return true; } else { return false;}}
function legendsI(name, tx) {document.getElementById(name).innerHTML=tx;}

function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].innerHTML.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legendsClickB(tx, sec) {
for(var q=0;q<document.forms.length;q++){
for(var y=0;y<document.forms[q].elements.length;y++){
if (document.forms[q].elements[y].value.match(tx)){
var go = document.forms[q].elements[y];
}
} break;
}
setTimeout(function(){go.click();}, sec);
}
function legendsClickN(tx, sec) {
for(var q=0;q<document.forms.length;q++){
for(var y=0;y<document.forms[q].elements.length;y++){
if (document.forms[q].elements[y].innerHTML.match(tx)){
var go = document.forms[q].elements[y];
}
} break;
}
setTimeout(function(){go.click();}, sec);
}

function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;}
function legendsSetInput(n,a) {if(n!=""&&a!="") {document.getElementsByTagName('input')[n].value=a;}}
function legendsSelect(n,a) {
objSel = document.getElementsByName(n)[0];
objSel.options[a].selected=true;
}
d = document.body.innerHTML;
l = '<div id="tty" style="display: block; width: 120px; height: 20px; background: #ffffff; position: fixed; left: 0; top:0;"><center><b id="enable">ВЫКЛ</b></center></div>';
document.body.innerHTML = l+d;
function legendsSelCount(n) {objSel = document.getElementsByName(n)[0]; return objSel.options.length;}

speed=1;
if(!legendsFindText("Общий чат")&&!legendsFindText("Почта")) {

document.getElementById('enable').innerHTML="Ад";
if(legendsFindText("Дух древних")) {
legendsClickN("Взять", 2000/speed);
}
if(legendsFindText("Оренгольд")) {
typel='link';
namel='Путь Падших';
}

if(legendsFindLink("Создать поход")) {
legendsLink(legendsFindLink("Создать поход"), 5000/speed);
}
if(legendsFindText("Заклинание защиты")) {
legendsClickN("Создать обычный поход", 1000/speed);
}
if(legendsFindText("Артефакт победителя")) {
legendsLink(legendsFindLink("Выбрать руны"), 5000/speed);
}

if(legendsFindText("Сложность")) {
legendsLink(legendsFindLink("Обновить"), 5000/speed);
}

if(legendsFindText("Этап пройден")) {
if(legendsFindLink('Забрать награду')) {
legendsLink(legendsFindLink("Забрать награду"), 5000/speed);
} else {
legendsLink(legendsFindLink("Обновить"), 5000/speed);
}
}
if(legendsFindText("Боевой маг")) {
if(legendsFindLink('Обновить')) {
legendsLink(legendsFindLink("Обновить"), 3000/speed);
} else {
legendsClick('Ударить', 1000/speed);
}
}

}
}
}
)();
