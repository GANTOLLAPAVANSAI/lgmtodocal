const screen=document.getElementById('outputscreen')
    function display(enteredvalue){
        if(!screen.value){
            screen.value=""
        }
        screen.value=screen.value+enteredvalue
    }
    function calculate(value){
        const calculatedvalue=eval(value)
        screen.value=calculatedvalue
    }