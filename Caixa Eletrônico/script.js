function valorSaque(event) {

    event.preventDefault();    
    let inValor = document.querySelector('#inValor')
    let resultado = document.querySelector('#outResultado')

    let saque = Number(inValor.value);
    let cedulas = [100, 50, 10]

    let bodyBackground = getComputedStyle(document.body)
    let backgroundBody = bodyBackground.backgroundColor

    for(let i=0; i < 3; i++){
        if(saque % 10 != 0){
            resultado.innerHTML = `Não temos notas válidas para o seu saque!!. Nosso caixa só possui notas de 10, 50 e 100 reais`
            resultado.classList.add('notResultado');
            break;
        } else {
        let qtd = saque / cedulas[i];
        saque = saque % cedulas[i];
        resultado.innerHTML += `${Math.floor(qtd)} de cédulas de ${cedulas[i]} <br>`
        resultado.style.backgroundColor = backgroundBody;
        resultado.classList.add('Resultado') 
        }

    }
}

const btnResultado = document.querySelector('#btnResultado');
btnResultado.addEventListener("click", valorSaque);

