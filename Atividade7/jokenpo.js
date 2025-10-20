function generateComputerInput() {
    let randomNumb = Math.random();
    
    if(randomNumb < 1/3)
        return 0; // pedra
    if(randomNumb < 2/3)
        return 1; // papel
    else 
        return 2; // tesoura
}

function convertPlaysToString(a) {
    if(a === 0)
        return "pedra";
    if(a === 1)
        return "papel";
    if(a === 2)
        return "tesoura";
}

function converStringToNumb(a) {
    if(a === "pedra")
        return 0;
    if(a === "papel")
        return 1;
    if(a === "tesoura")
        return 2;
    return -1; 
}

function play() {
    
    let userInputText = document.getElementById('userInput').value.toLowerCase();
    let userInput = converStringToNumb(userInputText);
    let computerInput = generateComputerInput();
    let resultado;

    document.getElementById('computerInput').textContent = convertPlaysToString(computerInput);
    document.getElementById('userInputText').textContent = userInputText;

    
    if(userInput === -1) {
        resultado = "Entrada inválida! Digite: Pedra, Papel ou Tesoura";
        document.getElementById('resultado').textContent = resultado;
        return;
    }

    if(userInput === computerInput) {
        resultado = "Empate! Ambos escolheram " + convertPlaysToString(userInput);
    } else if((userInput === 0 && computerInput === 2) ||
              (userInput === 1 && computerInput === 0) ||
              (userInput === 2 && computerInput === 1)) {
        
        resultado = "Você venceu! " + convertPlaysToString(userInput) + 
                    " ganha de " + convertPlaysToString(computerInput); 
    } else {
        resultado = "Você perdeu! " + convertPlaysToString(computerInput) + 
                    " ganha de " + convertPlaysToString(userInput); 
    }
    
    document.getElementById('resultado').textContent = resultado;
}