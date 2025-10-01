function somar() {
    let valorX = document.getElementById('valorX_soma').value;
    let valorY = document.getElementById('valorY_soma').value;
    let resultadoSoma = valorX + valorY;
    document.getElementById('resultado_soma').value = resultadoSoma;
};