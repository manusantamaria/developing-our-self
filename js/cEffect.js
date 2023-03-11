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
    // console.log(`Resultados: En ${cantAnos} años usted tendrá: $${inversion.toPrecision(9)}.\nHabiendo invertido: $${(inversionInicial+((contribucionMensual*12)*cantAnos)).toPrecision(9)}\nVarianza superior (${tasaInteres+varianza}%): $${inversionSup.toPrecision(9)}\nValor futuro (${tasaInteres}%): $${inversion.toPrecision(9)}\nVarianza inferior (${tasaInteres-varianza}%): $${inversionInf.toPrecision(9)}`)
}


// let inversionInicial = parseInt(prompt("Ingrese su Inversión Inicial: "));
// let contribucionMensual = parseInt(prompt("Ingrese su Contribución Mensual: "));
// let cantAnos = parseInt(prompt("Ingrese la cantidad de tiempo en años: "));
// let tasaInteres = parseInt(prompt("Ingrese la tasa de interés estimada: "));
// let varianza = parseInt(prompt("Ingrese el rango de varianza de la tasa de interés: "));
// let capitalizacion = parseInt(prompt("Elija la Frecuencia de capitalización entre: \n1) Anualmente \n2) Semestralmente \n3) Trimestralmente \n4) Mensualmente"));


// const inverInicial = document.querySelector("#inversionInicial").placeholder=`$${inversionInicial}`
// const contMensual = document.querySelector("#contribucionMensual").placeholder=`$${contribucionMensual}`
// const anos = document.querySelector("#cantAnos").placeholder=`$${cantAnos}`
// const interes = document.querySelector("#tasaInteres").placeholder=`$${tasaInteres}`
// const vari = document.querySelector("#varianza").placeholder=`$${varianza}`
// const capi = document.querySelector("#capitalizacion").querySelectorAll("option")[capitalizacion-1].selected= 'selected'


const calcBtn = document.querySelector(".calcular")
calcBtn.addEventListener("submit", function (e) {   
    e.preventDefault()
    const inverInicial = document.querySelector("#inversionInicial").value
    const contMensual = document.querySelector("#contribucionMensual").value
    const anos = document.querySelector("#cantAnos").value
    const interes = document.querySelector("#tasaInteres").value
    const vari = document.querySelector("#varianza").value
    const capi = document.querySelector("#capitalizacion").querySelectorAll("option")[capi-1].value
    interesCompuesto(inverInicial, contMensual, anos, interes, vari, capi)
})