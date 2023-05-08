

const input = document.getElementById('input');
const output = document.getElementById('output');

var encryptButton = document.getElementById('encrypt')
var decryptButton = document.getElementById('decrypt')
var copyBytton = document.getElementById('copy')

var encryptAction = encryptButton.addEventListener('click', encryptFunc)
var decryptAction = decryptButton.addEventListener('click', decryptfunc)

copyBytton.onclick = function(){
    let copytext = document.getElementById('output').value;
    navigator.clipboard.writeText(copytext).then(() => {
        if (copytext.value === ''){
            alert('O Campo está vazio')
        }else if(copytext.value != ''){
            alert('Texto copiado')
        }
    })
}


function encryptFunc(){
    if (input.value != ''){
        var text = input.value.replace(/e/igm, 'enter');
        var text = text.replace(/a/igm, 'ai');
        var text = text.replace(/o/igm, 'ober');
        var text = text.replace(/u/igm, 'ufat');
        var text = text.replace(/5/igm, '993');
        var text = text.replace(/7/igm, '865');
        var text = text.replace(/9/igm, '653');
                                output.textContent = text;
    }else {
        alert('Algo deu errado, verifique novamente o que digitou')
    }
}

function decryptfunc(){
    if (input.value != ''){
        var text = input.value.replace(/enter/igm, 'e');
        var text = text.replace(/ai/igm, 'a');
        var text = text.replace(/ober/igm, 'o');
        var text = text.replace(/ufat/igm, 'u');
        var text = text.replace(/993/igm, '5');
        var text = text.replace(/865/igm, '7');
        var text = text.replace(/653/igm, '9');
                                output.textContent = text;
    }else {
        alert('Algo deu errado, verifique novamente o que digitou')
    }

}


