function largestNumber() {
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let c = Number(document.getElementById('num3').value);
    
    if(a >= b && a >= c)
        document.getElementById('userInput1').textContent = "Maior numero: " + a;
    else if(b >= a && b >= c)
        document.getElementById('userInput1').textContent = "Maior numero: " + b;
    else
        document.getElementById('userInput1').textContent = "Maior numero: " + c;
}

function sortAscending() {
    let a = Number(document.getElementById('ord1').value);
    let b = Number(document.getElementById('ord2').value);
    let c = Number(document.getElementById('ord3').value);
    
    if(a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    if(a > c) {
        let temp = a;
        a = c;
        c = temp;
    }
    if(b > c) {
        let temp = b;
        b = c;
        c = temp;
    }
    
    document.getElementById('userInput2').textContent = "Numeros ordenados: " + a + ", " + b + ", " + c;
}

function isPalindrome() {
    let text = document.getElementById('palavra').value.toUpperCase();
    let reversed = "";
    
    for(let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    
    if(text === reversed)
        document.getElementById('userInput3').textContent = "É palindromo!";
    else
        document.getElementById('userInput3').textContent = "Não é palindrome!";
}

function triangleType() {
    let a = Number(document.getElementById('lado1').value);
    let b = Number(document.getElementById('lado2').value);
    let c = Number(document.getElementById('lado3').value);
    
    if(a + b <= c || a + c <= b || b + c <= a) {
        document.getElementById('userInput4').textContent = "Não forma um triangulo";
        return;
    }
    
    if(a === b && b === c)
        document.getElementById('userInput4').textContent = "Trianqulo Equilatero";
    else if(a === b || a === c || b === c)
        document.getElementById('userInput4').textContent = "Triangulo Isoceles";
    else
        document.getElementById('userInput4').textContent = "Triangulo Escaleno";
}