const numeros = document.querySelector('.teclado-numerico');

let screen = document.getElementById('resultado');

numeros.addEventListener('click', valor);

function valor(e) {
    e.preventDefault();
    let target = e.target;
    if(target.tagName == 'BUTTON') {
        screen.textContent = screen.textContent + e.target.textContent;
    }
}

let num1;
let num2;
let operacion;


let suma = document.getElementById('suma');
suma.addEventListener('click', ()=>{
    num1 = screen.textContent;
    operacion = '+';
    limpiar();
});

let resta = document.getElementById('resta');
resta.addEventListener('click', ()=>{
    num1 = screen.textContent;
    operacion = '-';
    limpiar();
});

let multiplicacion = document.getElementById('multiplicacion');
multiplicacion.addEventListener('click', ()=>{
    num1 = screen.textContent;
    operacion = '*';
    limpiar();
});

let division = document.getElementById('division');
division.addEventListener('click', ()=>{
    num1 = screen.textContent;
    operacion = '/';
    limpiar();
});

let resto = document.getElementById('resto');
resto.addEventListener('click', ()=>{
    num1 = screen.textContent;
    operacion = '%';
    limpiar();
});


let igual = document.getElementById('igual');
igual.addEventListener('click', ()=>{
    num2 = screen.textContent;
    resolver();
});

let clear = document.getElementById('clear');
clear.addEventListener('click', ()=>{
    screen.textContent = '';
});

function limpiar(){
    screen.textContent = '';
}

function resolver(){
    let res = 0;
    switch(operacion){
        case '+':
            res = parseFloat(num1) + parseFloat(num2);
            break;
        
        case '-':
            res=parseFloat(num1) - parseFloat(num2);
            break;

        case '*':
            res = parseFloat(num1) * parseFloat(num2);
            break;
            
        case '/':
            res=parseFloat(num1) / parseFloat(num2);
            break;
             
        case '%':
            res=parseFloat(num1) % parseFloat(num2);
            break;
    }
    resetear();
    screen.textContent = res;
}

function resetear(){
    screen.textContent = '';
    num1 = 0;
    num2 = 0;
    operacion = '';
}
