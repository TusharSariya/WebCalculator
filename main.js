let numStr = "";
let numFirst, numSeccond;
let Operation = "";
let sum;

function inputNum(inNum) {
    numStr +=inNum;
    document.getElementById("inputNum").value = numStr;
}
function Operator(operation) {
    if(Operation == "") {
        Operation = operation;
    }
    else {
        alert("already created an operator");
    }
    numFirst = parseFloat(numStr);
    numStr ="";
    document.getElementById("inputNum").value = numStr;
}

function Compute() {
    numSeccond = parseFloat(numStr);
    if(Operation == "add") {
        sum = numFirst + numSeccond;
    }
    if(Operator == "sub") {
        sum = numFirst - numSeccond;
    }
    if(Operator == "mul") {
        sum = numFirst * numSeccond;
    }
    if(Operator == "div") {
        sum = numFirst / numSeccond; 
    }
    document.getElementById("output").value = sum;
}

function backspace() {
    numStr = numStr.slice(0,-1);
    document.getElementById("inputNum").value = numStr;
}