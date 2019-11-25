window.onload = () => {
    
    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const simpleObjectAction = document.getElementById('simpleObjectAction');
    simpleObjectDisplay.textcontent = "RAWR";

    const simpleObject = {
        firstName: 'Ren',
        lastName: 'Albos',
        sayName: function() {
            const fullName = this.firstName + ' ' + this.lastName;
            console.log(fullName);
            simpleObjectDisplay.textcontent = fullName;
            functionObjectDisplay.texcontent = fullName;
        }
    }
    
    simpleObjectAction.onclick = function() {
        simpleObject.sayName();
    }

    const functionObjectDisplay = document.getElementById('functionObjectDisplay');
    const functionObjectAction = document.getElementById('functionObjectAction');
    functionObjectDisplay.textcontent = "RAWR";

    functionObjectAction.onclick = function() {
        simpleObject.sayName();
    }

    simpleObject.dynamicMethod = function() {
        console.log('Dynamic Method');
    }
    
    function FunctionObject() {
       FunctionObject.prototype.sayName = function() {
           console.log('Function Object');
       }
    }
    
    const customClassDisplay = document.getElementById('customClassDisplay');
    const customClassAction = document.getElementById('customClassAction');
    customClassDisplay.textcontent = "RAWR";

    customClassAction.onclick = function() {
        simpleObject.sayName();
    }

    class CustomClass {
        sayName() {
            console.log('CustomClass');
        }
    }
    
    simpleObject.sayName();
    simpleObject.dynamicMethod();
    
    const functionObject = new FunctionObject();
    functionObject.sayName();
    
    const customClass = new CustomClass();
    customClass.sayName();
}

