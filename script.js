
const calcular = document.getElementById('calcular');


function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '' ) {
        const ValorImc = (peso / (altura*altura)).toFixed(1);
        let classificacao = '';
            if (ValorImc < 18.5){
                classificacao = 'Abaixo do Peso';
            }else if(ValorImc >= 18.5 && ValorImc < 24.5){
                classificacao = 'Peso normal';
            }else if(ValorImc >= 25.0 && ValorImc < 29.9){
                classificacao = 'Sobre Peso';
            }else if(ValorImc >= 30.00 && ValorImc < 39.9){
                classificacao = 'Obesidade';
            }else if(ValorImc >= 40) {
                classificacao = 'Obesidade Grave';
            }
        
            resultado.textContent = `${nome} seu IMC é  ${ValorImc}  e você está  ${classificacao}`;

    } else{
        resultado.textContent = 'preencha os campos';
    }
}

calcular.addEventListener('click', imc);

