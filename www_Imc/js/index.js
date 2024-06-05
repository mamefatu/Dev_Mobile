
function calculerImc() {
    var poids = parseFloat(document.getElementById('poids').value);
    var taille = parseFloat(document.getElementById('taille').value);
    var imc = poids / (taille * taille);

    var interpretation = document.getElementById('interpretation');
    var resultat = document.getElementById('resultat');
    resultat.hidden = false;

    if (imc < 18.5) {
        interpretation.textContent = 'Maigreur (IMC: ' + imc.toFixed(2) + ')';
    } else if (imc >= 18.5 && imc < 25) {
        interpretation.textContent = 'Corpulence normale (IMC: ' + imc.toFixed(2) + ')';
    } else if (imc >= 25 && imc < 30) {
        interpretation.textContent = 'Surpoids (IMC: ' + imc.toFixed(2) + ')';
    } else {
        interpretation.textContent = 'Obésité (IMC: ' + imc.toFixed(2) + ')';
    }
}
