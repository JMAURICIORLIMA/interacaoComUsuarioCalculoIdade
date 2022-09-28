const txtAnoNascimento = document.querySelector("#ano");
const botao = document.querySelector("#botao");
const sexo = document.getElementsByName("sexo");
const resultado = document.querySelector("#resultado");
const img = document.querySelector("#img");

botao.addEventListener("click", ()=>{
    let date = new Date();
    let anoAtual = date.getFullYear();
    let idade = anoAtual - txtAnoNascimento.value;

    if(txtAnoNascimento.value > anoAtual || txtAnoNascimento.value < 0 || txtAnoNascimento.value == "" || idade > 122 || idade < 0){
        alert("Ano de nascimento inválido");
    } else if(sexo[0].checked){
        resultado.innerHTML = "<p>Homem com "+ idade + " anos</p>";
        if(idade <= 10){
            img.src = "/imgs/crianca-M.jpg";
        } else if (idade <= 18){
            img.src = "/imgs/adolescente-M.jpg"
        } else if (idade <= 50){
            img.src = "/imgs/adulto-M.jpg"
        } else {
            img.src = "/imgs/idoso-M.jpg"
        }
    } else if (sexo[1].checked){
        resultado.innerHTML = "<p>Mulher com "+ idade + " anos</p>"
        if(idade <= 10){
            img.src = "/imgs/crianca-F.jpg"
        } else if (idade <= 18){
            img.src = "/imgs/adolescente-F.jpg"
        } else if (idade <= 50){
            img.src = "/imgs/adulto-F.jpg"
        } else {
            img.src = "/imgs/idoso-F.jpg"
        }
    }


})