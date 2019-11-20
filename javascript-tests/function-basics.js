window.onload = () => {
    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }
    
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

    functionCallsAction.onclick = function() {
        simpleFunction();
    }

    function simpleFunction() {
        console.log("Functions should consist of statements designed to perform a single task.");
        simpleFunctionDisplay.textContent = "Functions should consist of statements designed to perform a single task.";  
        
    };

    function functionParameters(parameter) {
        console.log(parameter);
    }
    
    function functionReturn() {
        return ("Many functions return values.")
    }
    
    // adds a value to the the function that was empty
    functionParameters("Many functions take parameters.");
    
    functionReturn();

};



