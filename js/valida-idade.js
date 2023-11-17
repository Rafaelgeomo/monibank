export default function ehMaiorDeIdade(campo){
    const dataNasciomento = new Date(campo.value.split('-'));
    validaIdade(dataNasciomento);

    console.log(dataNasciomento)
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}