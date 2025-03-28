document.addEventListener('DOMContentLoaded', function () {

    const imcForm = document.getElementById('imcForm')

    imcForm.addEventListener('submit', function (event) {
        event.preventDefault()

        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);
        const classificacao = document.getElementById('classificacao')

        if (peso === 0 || altura === 0) {
            alert('Por favor, insira um valor válido')
        }

        const imc = peso / Math.pow(altura, 2);
        document.getElementById('imcValue').innerText = `${imc.toFixed(2)}`

        let titulo = ''
        descricao = ''

        if (imc < 18.5) {
            titulo = "Abaixo do peso"
            descricao = `Abaixo do normal Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.`
        } else if (imc >= 18.6 && imc <= 24.9) {
            titulo = "Normal"
            descricao = "Que bom que você está com o peso normal! Continue mantendo um estilo de vida saudável.";
        } else if (imc >= 25 && imc <= 29.9) {
            titulo = "Sobrepeso"
            descricao = "Fique atento à alimentação e pratique atividades físicas regularmente."
        } else if (imc >= 30.0 && imc <= 34.9) {
            titulo = "Obesidade grau I"
            descricao = "É importante buscar orientação médica para evitar complicações."
        } else if (imc >= 35 && imc <= 39.9) {
            titulo = "Obesidade grau II";
            descricao = "Redobre os cuidados com a alimentação e a saúde. Consulte um especialista.";
        } else {
            titulo = "Obesidade grau III"
            descricao = "Procure um profissional de saúde para um acompanhamento adequado."
        }

        classificacao.innerHTML = `<strong>${titulo}</strong><br><br> ${descricao}`

    })

})
