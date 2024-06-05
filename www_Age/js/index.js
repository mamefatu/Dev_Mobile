function calculAge() {
  const birthYear = Number(document.getElementById('birthYear').value);
  const age = new Date().getFullYear() - birthYear;
  const result = document.getElementById('result');
  result.innerHTML = `Vous avez ${age} ans !`;
  const resultatArea = document.getElementById('resultat');
  resultatArea.hidden = false;
}
