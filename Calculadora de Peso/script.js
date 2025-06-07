function pesoIdeal(event) {
    event.preventDefault();

    let inNome = document.querySelector('#nome');
    let inAltura = document.querySelector('#altura');
    let inGenero = document.querySelector('input[name="genero"]:checked')
    let outResultado = document.querySelector('#outResultado')

    let genero = inGenero.value;
    let nome = inNome.value;
    let altura = Number(inAltura.value);

    const bgbody = getComputedStyle(document.body)
    const backgroundBody = bgbody.backgroundColor

    if(genero === "M") {
        const calculo = 22 * (altura ** 2)
        outResultado.innerHTML = `${nome}, o seu peso ideal é de: ${calculo.toFixed(2)}kgs`
        outResultado.classList.add('Resultado');
        outResultado.style.background = backgroundBody
    } else if (genero === "F"){
        const calculo = 21 * (altura ** 2);
        outResultado.innerHTML = `${nome}, o seu peso ideal é de: ${calculo.toFixed(2)}kgs`
        outResultado.classList.add('notResultado');
    }
    

}

const btnResultado = document.querySelector('#btnResultado');
btnResultado.addEventListener("click", pesoIdeal);
const btnClear = document.querySelector('#clear');
const form = document.querySelector('#formulario');

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    form.reset();
    document.querySelector('#outResultado').innerHTML = "";

})


