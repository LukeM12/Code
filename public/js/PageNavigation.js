function ReduceMap(){ 
	if(document.getElementsByClassName("MapAnimation")) {
		elementArray = 
		document.getElementsByClassName("MapAnimation"); 
		while (elementArray.length) {
			elementArray[0].className = "waa";
		}
	} 
} 

//Paired with CSS to slide the map over smooth after X seconds, instead of hoverover.
//setTimeout(function(){
//	ReduceMap();
//}, 500);
