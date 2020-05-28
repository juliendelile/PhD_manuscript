function convertHREF(){
	
	
	jQuery.noConflict();
	
	//convert page links	
	var i;
	for (i=0;i<=numpage;i++)
	{
		jQuery("a[href="+idpage[i]+"]").attr('href', relativepathcorrection[IDpage]+filepath[idpage[i]]+"index.html")
	}
	
	
	//convert home link
	jQuery("a[href='home']").attr('href', relativepathcorrection[IDpage]+"index.html")
	
	//convert home link
	jQuery("a[href='manuscript']").attr('href', relativepathcorrection[IDpage]+"manuscript/pragma/manuscript.html")

}

//this function is needed to change the title all over the notepad at once
function printNotePadTitle(){
	
	//add notepad title
	document.getElementById('title').innerHTML = 'Modeling morphogenesis : to approach the evolutionary potential (for cognition)';
	//add notepad subtitle
	document.getElementById('subtitle').innerHTML = 'PhD thesis Notepad';

	document.getElementById('pagetitle').innerHTML = pagetitle[IDpage];
	
	if( document.getElementById('pagetitle_tab') ){
		document.getElementById('pagetitle_tab').innerHTML = pagetitle[IDpage];
	}
	
}

function printNotePadTitleFP(){
	document.getElementById('title').innerHTML = 'Modeling morphogenesis: to approach the evolutionary potential (for cognition)';
	document.getElementById('subtitle').innerHTML = 'PhD thesis Notepad';
}

function printMenu(){
	//variable menuHTML is in config.js
	document.getElementById('menu').innerHTML = menuHTML;
	
	//var menuHTML = "<ul><li><a href='home'>Home</a></li><li><a href='home'>Home</a></li><li><a href='home'>Home</a></li></ul>";
	
}
