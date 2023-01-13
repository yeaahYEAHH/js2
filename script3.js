function buttonClick(){
    let num1 = document.getElementById('num1');
    num1.outerHTML  = '<p>Ку-ку! А я <b>жирный</b></p>'     
}

function buttonClick1(){
    let num2 = document.getElementById('num2');
    num2.outerHTML  = '<h3>Абзац превратился в h3!</h3>';
}

function buttonClick2(){
    let num3 = document.getElementById('num3');
    num3.outerHTML  = '<h3>При нажатии на кнопку абзац станет h3, но текст остается</h3>';
}

function buttonClick3(){
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    num4.innerHTML = `${+number1 + +number2} `
}

function buttonClick4(){
    let elems = document.querySelectorAll('.a');
    for(let i = 0;i<elems.length;i++){
        elems[i].innerHTML = i+1;
    }
}






