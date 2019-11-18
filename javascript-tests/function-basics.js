window.onload = () => {
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

    functionCallsAction.onclick = simpleFunction;

    function simpleFunction() {
        console.log("Functions should consist of statements designed to perform a single task.");
        simpleFunctionDisplay.textContent = "simple";  
        functionCallsAction.onclick = 'simple'; 
        }
    };

function functionParameters(parameter) {
    console.log(parameter);
}

function functionReturn() {
    return ("Many functions return values.")
}

simpleFunction();

// adds a value to the the function that was empty
functionParameters("Many functions take parameters.");

functionReturn();

};