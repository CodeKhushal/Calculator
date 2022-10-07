function calculate(value){
    form1.answer.value += value;
}

function getAnswer(){
    form1.answer.value = eval(form1.answer.value);
}

function clearIt(){
    form1.answer.value = '';
}