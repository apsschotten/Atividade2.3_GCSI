function somar() {
    let valorX = document.getElementById('valorX_soma').value * 1;
    let valorY = document.getElementById('valorY_soma').value * 1;
    let resultadoSoma = valorX + valorY;
    document.getElementById('resultado_soma').value = resultadoSoma;
};