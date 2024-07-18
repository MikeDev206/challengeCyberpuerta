function alertDivName(name, event) {
	event.stopPropagation(); //prevent the event from propagating to parent elements
	alert(name);
}

document.getElementById('div1').addEventListener('click', function(event){
	alertDivName('Div 1', event);
});

document.getElementById('div2').addEventListener('click', function (event) {
	alertDivName('Div 2', event);
});

document.getElementById('div3').addEventListener('click', function (event) {
	alertDivName('Div 3', event);
});