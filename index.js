const VALOR_SACOLA = 28
//let cor = 0
const tamSacolasVazadas = [
    { tipo: 'Vazada', tam:'16x20x10', milheiro: 990, kg: 3 },
    { tipo: 'Vazada', tam:'17x27x12', milheiro: 999, kg: 5 },
    { tipo: 'Vazada', tam:'22x34x12', milheiro: 1019, kg: 8.5 },
    { tipo: 'Vazada', tam:'28x35x12', milheiro: 1013, kg: 13.5 },
    { tipo: 'Vazada', tam:'27x40x12', milheiro: 1013, kg: 13.5 },
    { tipo: 'Vazada', tam:'30x40x12', milheiro: 1016, kg: 14.5 },
    { tipo: 'Vazada', tam:'35x45x12', milheiro: 990, kg: 22  },
    { tipo: 'Vazada Alta Sem Reforço', tam:'40x50x12 ', milheiro: 999, kg: 25 },
    { tipo: 'Vazada Com Reforço', tam:'40x50x12', milheiro: 1013, kg: 29 },
    { tipo: 'Vazada Com Reforço', tam:'45x65x12', milheiro: 999, kg: 40 },
]
const tamSacolasAlcaFita = [
    '24x35',
    '30x45',
    '40x50',
]

function calculcaPrecoSacola(e){
    e.preventDefault();
    
    const qtd = document.getElementById("quantidade").value
    const cor = document.getElementById("cor").value
    const lucro = document.getElementById("lucro").value
    console.log(lucro)
    const kgPorQuantidade =  tamSacolasVazadas.map(sacola => (sacola.kg * qtd) / sacola.milheiro)
    const pinturas = pintura(qtd,cor)
    const valorSacolaPorQtd = kgPorQuantidade.map(sacola => sacola * VALOR_SACOLA )
    

    const sacolaPintada = valorSacolaPorQtd.map(sacolaPintada => sacolaPintada + pinturas + Number(lucro))
    document.getElementById('informacoes').innerHTML = " "
    sacolaPintada.forEach((s, i) => {
        let html = `
        <tr>
            <td>${tamSacolasVazadas[i].tipo} - ${tamSacolasVazadas[i].tam}</td>           
            <td>${qtd}</td>
            <td>R$ ${Number(s).toFixed(2)}</td>
            <td>${cor}</td>
        </tr>                  
        `
        document.getElementById('informacoes').innerHTML += html
    })
    
}

function pintura(qtdSacola, cor){
    if(qtdSacola >= 500){
        return cor * 120
    }else{
        return  cor * 60
    }
}

const $btnCalc = document.getElementById('btnCalc')

$btnCalc.addEventListener('click', calculcaPrecoSacola)
//calculcaPrecoSacola(400, 1, 60)
