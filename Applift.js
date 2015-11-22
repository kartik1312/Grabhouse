
var inputArray =[];
var counter =0;
var TimeTaken =0;

function Input(input,reply){
	var inputData = input;
	inputArray =inputData.split("\n"); //Splitting up on the basis of line feed
	NoOfTestCase = parseInt(readNext()); // Reading the no of Test cases
	for(var i =0;i<NoOfTestCase;i++){
		reply(NextArray()); // Callback function called with desired input
	}
	
	

}

/* readNext Function is to read the next set of input from the inputArray*/
function readNext(){		
	return inputArray[counter++];
}
/*Declaration of callback function*/
function reply(data){
	//Object passed from the nextArray Function
	var NoOfEl = data.NoOfElements;  
	var CostOfHouseArray = data.array;
	for (var k =1;k<NoOfEl-1;k++){
	TimeTaken = Timetaken+((CostOfHouseArray[i]*CostOfHouseArray[i-1])+(CostOfHouseArray[i]*CostOfHouseArray[i+1])-(CostOfHouseArray[i-1]*CostOfHouseArray[i+1]));
	
	}
	console.log(TimeTaken); //Output desired 
	TimeTaken =0; 
}
/*NextArray Function is used to get the Array of CostOfHouses and Noof Elements respectively*/
function NextArray(){
	
	var NoOfElements = parseInt(readNext());
	var rawArray = readNext();
	var StringArray = rawArray.split(" ");
	var formattedArray = getFormattedArray(StringArray);
	
	return {"array":formattedArray,"NoOfElements":NoOfElements};

}
/*Converting the String Array in Integer format for calculations */
function getFormattedArray(oldArray){
	var newArray =[];
	for(var j=0;oldArray.length;j++){
		newArray.push(parseInt(oldArray[j],10));
	}
	return newArray;

}