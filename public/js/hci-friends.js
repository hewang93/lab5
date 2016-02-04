'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */


function initializePage() {
	console.log("Javascript connected!");
	// All <a> elements inside an element of class "friends" */
	$("a.WHY").click(anagram);
}

function anagram(e){
	// Prevent page from reloading
	e.preventDefault();
	
	var name2 = $(this).text();
	var newName = anagrammedName(name2);
	console.log(name2);
	console.log(newName);

	//Retrieve current name
	$(this).text(newName);
}

function anagrammedName(name) {
	/*name = name.trim();*/
	// Thanks, Internet Anagram Server!
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}