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
            img.src = "img/crianca-M.jpg";
            resultado.innerHTML = "<p>Criança do sexo masculino com "+ idade + " anos</p>";
        } else if (idade <= 18){
            img.src = "img/adolescente-M.jpg"
            resultado.innerHTML = "<p>Adolescente do sexo masculino com "+ idade + " anos</p>";
        } else if (idade <= 50){
            img.src = "img/adulto-M.jpg"
            resultado.innerHTML = "<p>Adulto do sexo masculino com "+ idade + " anos</p>";
        } else {
            img.src = "img/idoso-M.jpg"
            resultado.innerHTML = "<p>Idoso do sexo masculino com "+ idade + " anos</p>";
        }
    } else if (sexo[1].checked){
        resultado.innerHTML = "<p>Mulher com "+ idade + " anos</p>"
        if(idade <= 10){
            img.src = "img/crianca-F.jpg"
            resultado.innerHTML = "<p>Criança do sexo feminino com "+ idade + " anos</p>";
        } else if (idade <= 18){
            img.src = "img/adolescente-F.jpg"
            resultado.innerHTML = "<p>Adolescente do sexo feminino com "+ idade + " anos</p>";
        } else if (idade <= 50){
            img.src = "img/adulto-F.jpg"
            resultado.innerHTML = "<p>Adulto do sexo feminino com "+ idade + " anos</p>";
        } else {
            img.src = "img/idoso-F.jpg"
            resultado.innerHTML = "<p>Idosa do sexo feminino com "+ idade + " anos</p>";
        }
    }
})