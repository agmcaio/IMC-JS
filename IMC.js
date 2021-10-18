// Entrada dos parâmetros
var nome = prompt('Digite seu nome');
var altura = prompt('Digite sua altura em centímetros');
var peso = prompt('Digite seu peso');

// Converter cadeias de caracteres para dados do tipo float
altura = parseFloat(altura);
peso = parseFloat(peso);

// Converter de centimetros para metros
altura = altura/100;

// Cálculo IMC
var imc = peso / (altura * altura);
var imc = imc.toFixed(2);

var classificacao ='';

if (imc < 16){
    classificacao = 'Abaixo peso muito grave'
} else if (imc >= 16 && imc <= 16.99){
    classificacao = 'Abaixo do peso grave'
} else if (imc >= 17 && imc <= 18.49){
    classificacao = 'Abaixo do peso'
} else if (imc >= 18.50 && imc <= 24.99){
    classificacao = 'Peso normal'
} else if (imc >= 25 && imc <= 29.99){
    classificacao = 'Sobrepreso'
} else if (imc >= 30 && imc <= 34.99){
    classificacao = 'Obesidade Grau I'
} else if (imc >= 35 && imc <= 39.99){
    classificacao = 'Obesidade Grau II'
} else {
    classificacao = 'Obesidade Grau III'
};

alert(nome + ', você possui índice de massa corporal igual a ' + imc + '.' + ' Sendo classificado como: ' + classificacao)