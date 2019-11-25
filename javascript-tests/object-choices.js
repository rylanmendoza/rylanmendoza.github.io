window.onload = () => {
    
    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const simpleObjectAction = document.getElementById('simpleObjectAction');

    const simpleObject = {
        firstName: 'Ren',
        lastName: 'Albos',
        sayName: function() {
            const fullName = this.firstName + ' ' + this.lastName;
            console.log(fullName);
            simpleObjectDisplay.textcontent = fullName;
        }
    }
    
    simpleObjectAction.onclick = function() {
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

