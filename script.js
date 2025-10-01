function somar() {
    let valorX = document.getElementById('valorX_soma').value * 1;
    let valorY = document.getElementById('valorY_soma').value * 1;
    let resultadoSoma = valorX + valorY;
    document.getElementById('resultado_soma').value = resultadoSoma;
};

function multiplicar() {
    let valorX = document.getElementById('valorX_mult').value;
    let valorY = document.getElementById('valorY_mult').value;
    let resultadoMultiplicação = valorX * valorY;
    document.getElementById('resultado_mult').value = resultadoMultiplicação;
};