// var newItemCounter = 1;
var tot = document.getElementById("error");
var ourList = document.getElementById("our-list");
var ourButton = document.getElementById("our-btn");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.querySelectorAll("#our-list li");
var inputText = document.getElementById("task-text");

ourList.addEventListener("click", activateItem);

function activateItem(e) {
	if (e.target.nodeName == "LI"){
		ourHeadline.innerHTML = e.target.innerHTML;
	for (i = 0; i < e.target.parentNode.children.length; i++) {
		e.target.parentNode.children[i].classList.remove("active");
	}
	e.target.classList.add("active");
	}
}

ourButton.addEventListener("click", createNewItem);

function createNewItem() {
	if (inputText.value == 0 ) {
		tot.classList.add("vis");
	} else {
		ourList.innerHTML += "<li>"+inputText.value+"</li>";
		tot.classList.remove("vis");
		return inputText.value = null;
	}
}