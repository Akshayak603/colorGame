
var numSquares= 6;
var color= generateRandomColors(numSquares);
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1= document.querySelector("h1");
var reset= document.querySelector("#reset");
var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");
//Easy Button Logic:
easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	color= generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent= pickedColor;
	for(var i=0;i<squares.length;i++){
		if(color[i]){
			squares[i].style.backgroundColor= color[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	reset.textContent="New Colors";

});
//HardButton Logic:
hardBtn.addEventListener("click",function(){

	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	color= generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent= pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor= color[i];
			squares[i].style.display="block";
	}
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	reset.textContent="New Colors";
});
//Reset Button Logic
reset.addEventListener("click",function(){
	//generate new colors
	color= generateRandomColors(numSquares);
	//pick a new color
	pickedColor= pickColor();
	//change a color Display to match picked Color
	colorDisplay.textContent= pickedColor;

	message.textContent="";
	//change colors of square
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor= color[i];
	}
	h1.style.backgroundColor="steelblue";
	this.textContent="New Colors";
});

//changing heading into picked color
colorDisplay.textContent = pickedColor;
//Winning and Losing Logic:
for(var i=0;i<squares.length;i++){
	//add initial colors
	squares[i].style.backgroundColor = color[i];
	//add clickListeners
	squares[i].addEventListener("click",function() {
		//grab a color
		var clickedColor= this.style.backgroundColor;
		//compare color to colorPicker
		if(clickedColor===pickedColor){
			message.textContent="Correct!!! :)";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			reset.textContent="Play Again??";
		}
		else{
			this.style.backgroundColor ="#232323";
			message.textContent="Try Again :(";
		}
	});
};

//Changing background on winning Logic:
function changeColors(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++){
		//change each color:
		squares[i].style.backgroundColor = color;
	}
}

//Random colour selected for Winning Logic:
function pickColor(){
	var random= Math.floor(Math.random()*color.length);
	return color[random];
}

//Generating random Numbers Logic:
function generateRandomColors(num){
	//array
	var arr=[];
	//add num random colors
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	//retuen that array
	return arr;
}

//Creating Random Number Logic:
function randomColor(){
	//pick a red 0 to 255
	 var r=Math.floor(Math.random()*256)
	// pick a green 0 to 255
	var g=Math.floor(Math.random()*256)
	// pick blue 0 to 255
	var b=Math.floor(Math.random()*256)
	var s = "rgb(" + r + ", " + g + ", " + b+ ")";
	return s;
}


/*Short code to is given below:
remove ids of easyBtn and hardBtn from js and html instead of using these two action listener we can choose a single loop:
1.--> Add class to both buttons in HTML let it be "mood", Now below is the js code:
var mood= document.querySelectorAll(".mood");
for(var i=0;i<mood.length;i++){
	mood[i].addEventListener("click",function(){
		mood[0].classList.remove("selected");
		mood[1].classList.remove("selected");
		this.classList.add("selected")
		this.textContent==="Easy"?numSquares=3:numSquares=6;//conditional statement
		reset1();
	});
};
Add a new function reset1:
function reset1(){
	//generate new colors
	color= generateRandomColors(numSquares);
	//pick a new color
	pickedColor= pickColor();
	//change a color Display to match picked Color
	colorDisplay.textContent= pickedColor;

	message.textContent="";
	//change colors of square
	for(var i=0;i<squares.length;i++){
		if(color[i]){
		squares[i].style.display="block";
		squares[i].style.backgroundColor= color[i];
		}
		else{
			squares[i].style.display="none";
		}
	};
	h1.style.backgroundColor="steelblue";
	this.textContent="New Colors";
}
2.--> Also remove all code in reset.addEventListener() and just use:
reset.addEventListener("click",function(){
	reset1();
})
3.-->you can use init() function in starting to get rid of the structure in which you will add the above whole thois will surely reduce the length 
of the page.
THANK YOU!!
*/