img = document.createElement('img')
btnAtualizar = document.createElement('input')

function verificar() {
    var nome =  document.querySelector('#iNome').value.toUpperCase()
    var ano = parseInt(document.querySelector('#iAno').value)
    var fem = document.querySelector('#iFem')
    var masc = document.querySelector('#iMasc')
    var p = document.querySelector('p')
    var sec = document.querySelector('section')

    sec.appendChild(img)
    sec.appendChild(btnAtualizar)

    btnAtualizar.type = 'button'
    btnAtualizar.value = 'ATUALIZAR'
    btnAtualizar.setAttribute('onclick', 'btnAction(1)')
    btnAtualizar.setAttribute('onmouseover', 'btnAction(2)')
    btnAtualizar.setAttribute('onmouseout', 'btnAction(3)')
    
    btnStyle = btnAtualizar.style

    btnStyle.display = 'block'
    btnStyle.margin = 'auto'
    btnStyle.cursor = 'pointer'
    btnStyle.backgroundColor = '#0d88b5'
    btnStyle.color = 'white'
    btnStyle.fontWeight = 'bold'
    btnStyle.fontFamily = 'Arial, Helvetica, sans-serif'
    btnStyle.border = '1px solid black'
    btnStyle.borderRadius = '10px'
    btnStyle.fontSize = '12pt'
    btnStyle.padding = '11px'

    var anoAtual = new Date().getFullYear()
    var idade = anoAtual - ano

    if (ano >= 1870 && ano < anoAtual && nome.length > 0) {
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
    } else if (ano < 1870 || ano > anoAtual || ano == 0) {
        alert("O ano deve ser entre 1870 e " + parseInt(anoAtual - 1))
    }
}

function btnAction(act) {
    switch (act) {
        case 1:
            location.reload(true)
            break;
    
        case 2:
            btnAtualizar.style.backgroundColor = '#089dbf'
            break;

        case 3:
            btnAtualizar.style.backgroundColor = '#0d88b5'
            break;
    }
}