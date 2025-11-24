function wpisz() {
const waga = parseFloat(document.getElementById("waga").value);
const wzrost = parseFloat(document.getElementById("wzrost").value) / 100;

const bmi = waga / (wzrost * wzrost);
document.getElementById("wynik").innerText = "Twoje BMI = " + bmi.toFixed(2);

let tekst = "";

if (bmi < 16) tekst = "wygłodzenie";
else if (bmi < 17) tekst = "wychudzenie";
else if (bmi < 18.5) tekst = "niedowaga";
else if (bmi < 25) tekst = "waga normalna";
else if (bmi < 30) tekst = "nadwaga";
else if (bmi < 35) tekst = "otyłość I stopnia";
else if (bmi < 40) tekst = "otyłość II stopnia";
else tekst = "otyłość III stopnia";

document.getElementById("wynik2").innerText = tekst; }