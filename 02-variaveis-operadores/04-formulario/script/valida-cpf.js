document.getElementById("validarbutton").
    addEventListener("click", function () {
        // alert("deu certo!!!");
        const cpf = document.getElementById("cpfinput").value;
        if(validacpf(cpf)) {
            document.getElementById("resultado").textContent = "cpf válido";
        }else{
            document.getElementById("resultado").textContent = "cpf inválido";
        }
    })

function validacpf(vrcpf) {
    return vrcpf.length === 11 & !isNaN(vrcpf);
}