function interesCompuesto(inversionInicial, contribucionMensual, cantAnos, tasaInteres, varianza, capitalización) {
    let inversion = inversionInicial;
    let inversionSup = inversionInicial
    let inversionInf = inversionInicial
    for (let index = 0; index <= cantAnos; index+=1) {
        switch (capitalización) {
            case 1:
                inversion += (contribucionMensual*12) + ((inversion + contribucionMensual*12)*tasaInteres)/100
                inversionSup += (contribucionMensual*12) + ((inversion + contribucionMensual*12)*(tasaInteres+varianza))/100
                inversionInf += (contribucionMensual*12) + ((inversion + contribucionMensual*12)*(tasaInteres-varianza))/100
                break;
            case 2:
                for (let index = 0; index < 2; index+=1) { //puede ser que index no se ponga 2 veces
                    inversion += (contribucionMensual*6) + ((inversion + contribucionMensual*6)*(tasaInteres/2))/100
                    inversionSup += (contribucionMensual*6) + ((inversion + contribucionMensual*6)*((tasaInteres+varianza)/2))/100
                    inversionInf += (contribucionMensual*6) + ((inversion + contribucionMensual*6)*((tasaInteres-varianza)/2))/100
                }
                break;
            case 3:
                for (let index = 0; index < 4; index+=1) { //puede ser que index no se ponga 2 veces
                    inversion += (contribucionMensual*3) + ((inversion + contribucionMensual*3)*(tasaInteres/4))/100
                    inversionSup += (contribucionMensual*3) + ((inversion + contribucionMensual*3)*((tasaInteres+varianza)/4))/100
                    inversionInf += (contribucionMensual*3) + ((inversion + contribucionMensual*3)*((tasaInteres-varianza)/4))/100
                }
                break;
            case 4:
                for (let index = 0; index < 12; index+=1) { //puede ser que index no se ponga 2 veces
                    inversion += (contribucionMensual) + ((inversion + contribucionMensual)*(tasaInteres/12))/100
                    inversionSup += (contribucionMensual) + ((inversion + contribucionMensual)*((tasaInteres+varianza)/12))/100
                    inversionInf += (contribucionMensual) + ((inversion + contribucionMensual)*((tasaInteres-varianza)/12))/100
                }
                break;
        }        
    } 
    return [inversion, inversionInf, inversionSup] 
}

const calcBtn = document.querySelector(".formulario-cEffect__buttons--calcular")
let i = 0
calcBtn.addEventListener("click", function (e) {   
    e.preventDefault()
    const inverInicial = parseInt(document.querySelector("#inversionInicial").value)
    const contMensual = parseInt(document.querySelector("#contribucionMensual").value)
    const anos = parseInt(document.querySelector("#cantAnos").value)
    const interes = parseInt(document.querySelector("#tasaInteres").value)
    const vari = parseInt(document.querySelector("#varianza").value)
    const capi = document.querySelector("#capitalizacion")
    const selected = parseInt(capi.value)
    const resultado = interesCompuesto(inverInicial, contMensual, anos, interes, vari, selected)
    if (i > 0){
        let years = document.querySelector(".container-results__h3--years")
        let money = document.querySelector(".container-results__h3--amount")
        years.textContent = `${anos}`
        money.textContent = `${resultado[0].toFixed(2)}`
    }else{
        i += 1
        containerResults = document.createElement("div")
        containerResults.innerHTML =   `<h2 class="container-results__h2">Results</h2>
                                        <h3 class="container-results__h3">In <span class="container-results__h3--years">${anos}</span> years, you'll have $<span class="container-results__h3--amount">${resultado[0].toFixed(2)}</span></h3>
                                        <hr>
                                        <p class="container-results__description">La siguiente tabla muestra una estimación de cuánto crecerán sus ahorros iniciales en el tiempo, según la tasa de interés y el cronograma de capitalización que especificó.</p>
                                        <p class="container-results__description">Recuerde que ciertos pequeños ajustes de cualquiera de esas variables pueden afectar el resultado. Restablezca la calculadora e ingrese cifras diferentes para que se muestren las diferentes situaciones.</p>
                                        <div class="container-results__chart"></div>
                                        <button class="container-results__btn"></button>
                                        <div class="container-results__table"></div>`
        containerResults.setAttribute("class","container-results")
        const maincEffect = document.querySelector(".main-cEffect")
        maincEffect.appendChild(containerResults)
    }
})