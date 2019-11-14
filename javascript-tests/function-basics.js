function simpleFunction(){
    console.log("functions should consist of statements designed to perform a single task.")
}

function functionParameters(functionParameters) {
    return functionParameters;
}

function functionReturn() {
    console.log("Many functions return values.")
}

simpleFunction();
functionParameters();
functionReturn();

functionParameters = "Many functions take parameters."

window.onload = () => {
    console.log(simpleFunction);
    console.log(functionParameters);
    console.log(functionReturn);
}

const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
const functionCallsAction = document.getElementById('functionCallsAction');

function simpleFunction() {
    console.log('simple');
    simpleFunctionDisplay.textContent = "simple";
}

functionCallsAction.onclick = simple;

<label for="nameDisplay">Enter a name</label>
<input type="text" id="nameDisplay" name="nameDisplay"/>

const data = nameDisplay.value; 

const elfCode = {
    appendToList: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appedChild(li);
    }
}

const someAction = document.getElementById('someAction');
someAction.onclick = function() {
}

<script src="./elf-code.js"></script>

<ul id="listDisplay"></ul>
            