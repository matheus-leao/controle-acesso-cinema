const naoPermitido = "Não Permitido"
const permitido = "Permitido"

// int
// string
// boolean
// real

export function validarAcessoCinema(idade, classificacao){
    if (idade < 0 || idade == null) {
        return naoPermitido
    }

    if(classificacao == null){
        return naoPermitido
    }


    if(classificacao == 'L'){
        return permitido
    } else if (idade < Number(classificacao)){
        return naoPermitido
    } else {
        return permitido
    }
}