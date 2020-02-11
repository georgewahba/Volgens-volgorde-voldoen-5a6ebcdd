var vragen = [
    "wat is de hoofdstad van frankrijk?",
    "hoeveel poten heeft een spin?",
    "wat is het grootste meer van nederland?",
    "Noem zoveel mogelijk duitse automerken",
    "Noem een waddeneiland",
]
document.getElementById("vraag1").innerHTML = vragen[0];
document.getElementById("vraag2").innerHTML = vragen[1];
document.getElementById("vraag3").innerHTML = vragen[2];
document.getElementById("vraag4").innerHTML = vragen[3];
document.getElementById("vraag5").innerHTML = vragen[4];


var antwoorden = ["parijs",
    8,
    "ijsselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];



function check() {
    var punten = 0;
    if (document.getElementById("antwoord1").value == antwoorden[0]) {
        punten++;
    }
    if (document.getElementById("antwoord2").value == antwoorden[1]) {
        punten++;
    }
    if (document.getElementById("antwoord3").value == antwoorden[2]) {
        punten++;
    }
    var answer3 = document.getElementById("antwoord4").value.split(" ");

    for (i = 0; i < answer3.length; i++) {

        if (antwoorden[3].includes(answer3[i])) {
            punten++;
        }
    }


    var answer4 = document.getElementById("antwoord5").value.split(" ");

    for (i= 0; i < answer4.length; i++) {
        if (antwoorden[4].includes(answer4[i])) {
            punten++;
        }
    }
    document.getElementById("correct").innerHTML = punten;
}
