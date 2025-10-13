let nome = prompt("Informe o nome do aluno");
let n1 = prompt("informe a nota 1");
let n2 = prompt("informe a nota 2");
let n3 = prompt("informe a nota 3");
let n4 = prompt("informe a nota 4");

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);

let med = (n1 + n2 + n3 + n4) / 4;

alert("A media aritmetica das notas do aluno " + nome + " eh  " + med);