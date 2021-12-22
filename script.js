img = document.createElement('img')

function verificar() {
    var nome =  document.querySelector('#iNome').value.toUpperCase()
    var ano = parseInt(document.querySelector('#iAno').value)
    var fem = document.querySelector('#iFem')
    var masc = document.querySelector('#iMasc')
    var p = document.querySelector('p')
    var sec = document.querySelector('section')
    
    sec.appendChild(img)

    var idade = new Date().getFullYear() - ano

    if (ano >= 1870 && ano < new Date().getFullYear() && nome.length > 0) {
        if (idade < 18) {
            if (masc.checked) {
                p.innerHTML = `<strong>${nome}</strong> é um <strong>menino</strong> de <strong>${idade}</strong> anos.`
                img.src = 'imgs/crianca-menino.png'
            } else {
                p.innerHTML = `<strong>${nome}</strong> é uma <strong>menina</strong> de <strong>${idade}</strong> anos.`
                img.src = 'imgs/crianca-menina.png'
            }
        } else if (idade < 65) {
            if (masc.checked) {
                p.innerHTML = `<strong>${nome}</strong> é um <strong>homem</strong> de <strong>${idade}</strong> anos.`
                img.src = 'imgs/jovem-homem.png'
            } else {
                p.innerHTML = `<strong>${nome}</strong> é uma <strong>mulher</strong> de <strong>${idade}</strong> anos.`
                img.src = 'imgs/jovem-mulher.png'
            }
        } else {
            if (masc.checked) {
                p.innerHTML = `<strong>${nome}</strong> é um <strong>idoso</strong> de <strong>${idade}</strong> anos.`
                img.src = 'imgs/idoso-homem.png'
            } else {
                p.innerHTML = `<strong>${nome}</strong> é uma <strong>idosa</strong> de <strong>${idade}</strong> anos.`
                img.src = 'imgs/idosa-mulher.png'
            }
        }
    } else {
        alert("[ERRO]")
    }
}