let numStr = "";
let numFirst, numSeccond;
let Operation = "";
let sum;
//Boolean continueOperation = false;

function inputNum(inNum) {
    numStr +=inNum;
    document.getElementById("inputNum").value = numStr;
}
function Operator(operation) {
    if(Operation == "") {
        Operation = operation;
    }
    else {
        alert("already allocated an operator");
        //numFirst = parseFloat(numSeccond);
        //numStr = "";
        //Operation = operation;
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
    else if(Operation == "sub") {
        sum = numFirst - numSeccond;
    }
    else if(Operation == "mul") {
        sum = numFirst * numSeccond;
    }
    else if(Operation == "div") {
        sum = numFirst / numSeccond; 
    }
    else {
        alert("invalid operator passed");
    }
    document.getElementById("output").value = sum;
}

function backspace() {
    numStr = numStr.slice(0,-1);
    document.getElementById("inputNum").value = numStr;
}

function clearAll() {
    numFirst = 0;
    numSeccond = 0;
    numStr = "";
    document.getElementById("inputNum").value = numStr;
}