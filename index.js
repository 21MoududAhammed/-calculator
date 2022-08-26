let sign = '';
document.getElementById('all-buttons-action').addEventListener('click',function(event){
    const inputField = document.getElementById('inputField');
    const clickButton = event.target.innerText;
    if(isNaN(clickButton)){
        // select sign to take a action 
        if(clickButton === '+'){
            inputField.value += clickButton;
            sign = '+';
        }
        else if(clickButton === '-'){
            inputField.value += clickButton;
            sign = '-';
        }
        else if(clickButton === '*'){
            inputField.value += clickButton;
            sign = '*';
        }
        else if(clickButton === '/'){
            inputField.value += clickButton;
            sign = '/';
        }
        else if(clickButton === 'AC'){
            inputField.value = '';
        }
        else if(clickButton === "<"){
            const data = inputField.value;
            const result = data.split('');
            result.pop();
            const currentData = result.join('');
            inputField.value = currentData;   
        }
        // calculation and show result on display 
        else if(clickButton === '='){
            const data = inputField.value
            if(sign === '+'){
                const numbers = data.split('+');
                const result = numbers.reduce((sum,number) => sum += parseInt(number) ,0);
                inputField.value += `=${result}`;
            }
            else if(sign === '-'){
                const numbers = data.split('-');
                const result = numbers[0]-numbers[1];
                inputField.value += `=${result}`;
            }
            else if(sign === '*'){
                const numbers = data.split('*');
                const result = numbers.reduce((sum,number) => sum *= parseInt(number) ,1);
                inputField.value += `=${result}`;
            }
            else if(sign === '/'){
                const numbers = data.split('/');
                const result = numbers[0]/numbers[1];
                inputField.value += `=${result}`;
            }   
        }
    }else{
        //add nuber one by one and show it on display till than final calculation 
        inputField.value += clickButton;

    }
})