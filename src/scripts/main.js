document.addEventListener('DOMContentLoaded', function () {

    const imcForm = document.getElementById('imcForm')

    imcForm.addEventListener('submit', function (event) {
        event.preventDefault()

        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);

        if (peso === 0 || altura === 0) {
            alert('Por favor, insira um valor válido')
        }

        const imc = peso / Math.pow(altura, 2);
        document.getElementById('imcValue').innerText = `${imc.toFixed(2)}`

    })

})
