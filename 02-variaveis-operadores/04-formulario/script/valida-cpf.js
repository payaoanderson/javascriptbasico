document.getElementById("validarbutton").
    addEventListener("click", function () {
        // alert("deu certo!!!");
        const cpf = document.getElementById("cpfinput").value;
        if (validacpf(cpf)) {
            document.getElementById("resultado").textContent = "cpf válido";
        } else {
            document.getElementById("resultado").textContent = "cpf inválido";
        }
    })

function validacpf(vrcpf) {
    let soma = 0
    soma += parseInt(vrcpf.charAt(0)) * 10;
    soma += parseInt(vrcpf.charAt(1)) * 9;
    soma += parseInt(vrcpf.charAt(2)) * 8
    soma += parseInt(vrcpf.charAt(3)) * 7;
    soma += parseInt(vrcpf.charAt(4)) * 6;
    soma += parseInt(vrcpf.charAt(5)) * 5;
    soma += parseInt(vrcpf.charAt(6)) * 4;
    soma += parseInt(vrcpf.charAt(7)) * 3;
    soma += parseInt(vrcpf.charAt(8)) * 2;


    let digitox = soma % 11;
    digitox = 11 - digitox;

    if (digitox > 10) {
        digitox = 0;
    }



    soma = 0;
    soma += parseInt(vrcpf.charAt(0)) * 11;
    soma += parseInt(vrcpf.charAt(1)) * 10;
    soma += parseInt(vrcpf.charAt(2)) * 9;
    soma += parseInt(vrcpf.charAt(3)) * 8;
    soma += parseInt(vrcpf.charAt(4)) * 7;
    soma += parseInt(vrcpf.charAt(5)) * 6;
    soma += parseInt(vrcpf.charAt(6)) * 5;
    soma += parseInt(vrcpf.charAt(7)) * 4;
    soma += parseInt(vrcpf.charAt(8)) * 3;
    soma += parseInt(vrcpf.charAt(9)) * 2;



    let digitoy = soma % 11;
    digitoy = 11 - digitoy;
    if (digitoy >= 10) {
        digitox = 0;
    }

    let digitvalido = true;
    if (digitox !== parseInt(vrcpf.charAt(9))) {
        digitovalido = false;
    }

    if (digitoy !== parseInt(vrcpf.charAt(10))) {
        digitovalido = false;
    }

    soma = 0;
    for (let posicao = 0, pesoY = 11; posicao < 10; posicao++, pesoY--) {
        soma += parseInt(vrcpf.charAt(posicao)) * pesoY;

    }


    let digitoY = 11 - (soma % 11);
    if (digitoY >= 10) {
        digitoY = 0;
    }

    if (digitoY !== parseInt(vrcpf.charAt(10))) {
        digitovalido = false;
    }





    return digitovalido;







}