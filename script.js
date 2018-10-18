const pierre_div = document.getElementById("pierre");
const papier_div = document.getElementById("papier");	
const ciseaux_div = document.getElementById("ciseaux");	
var historique = 0;
var count;
var second = 3;
var coups = ["l","k"];
var pseudo;
var scoreTab = [[],[]];

function setTimer() {
	second = 3;
	clearInterval(count);
	count = setInterval(function() {
		console.log('timer1', count);
		second--;
		document.getElementById("timer").innerHTML = "seconde(s) restante(s)" + second;
		if(second == 0){
			console.log("Temps écoulé !");
			clearInterval(count);
			restart();
			second = 3;
			document.getElementById("timer").innerHTML = "seconde(s) restante(s)" + second;
		}
	},1000);
	console.log('timer2', count);
}
function FonctionSelect(e) {
	setTimer();
	jeu(e);
} 

function jeu(choixJoueur){
	var iaChoix = ChoixIA(choixJoueur);
	var result = partie(choixJoueur,iaChoix);
	historique++ ;
	console.log("joueur choix =>" + choixJoueur);
	console.log("ia choix =>" + iaChoix);
	//console.log(partie(choixJoueur,iaChoix));
	console.log(historique);
	if(result != "perdre"){
		document.getElementById("return").innerHTML =   pseudo + "as choisis : <img src='" + choixJoueur + ".png'></img> // " + "L'IA a choisis  : <img src=' " +iaChoix + ".png'></img>";
		document.getElementById("score").innerHTML = pseudo + "viens de " + result + "   c'est le "+ historique + " tour de survie !";
	}
	//return choixJoueur;
}

function partie(choixJoueur,iaChoix){
		if (choixJoueur == "pierre") {
			switch (iaChoix){
				case "pierre" :
					return "faire égalité"; 
				break;
				case "papier":
					lose();
					return "perdre";
				break;
				case "ciseaux":
					return "gagné";
				break;
			}

		}
		else if (choixJoueur == "papier") {
			switch (iaChoix){
				case "pierre" :
					return "gagné"; 
				break;
				case "papier":
					return "faire égalité";
				break;
				case "ciseaux":
					lose();
					return "perdre";
				break;
			}

		}else { //choix joueur ciseaux
			switch (iaChoix){
				case "pierre" :
					lose();
					return "perdre"; 
				break;
				case "papier":
					return "gagné";
				break;
				case "ciseaux":
					return "faire égalité";
				break;
			}

		}

}

//Pierre

function ChoixIA(historique,choixJoueur) {
	if (historique >= 42) {
		if (choixJoueur == "pierre"){
			return "papier";
		} else if (choixJoueur == "papier"){
			return 'ciseaux';
		} else{
			return "pierre";
		}
	}else{
		return getIaChoix();
	}
}

function getIaChoix(){
	var les_choix = ["pierre", "papier", "ciseaux"];
	var choix = signe(coups[0], coups[1],les_choix);
	coups.unshift(choix);
	return choix;
}

function restart(){
	document.getElementById("return").innerHTML = "";
	document.getElementById("score").innerHTML = "";
	second = 3;
	clearInterval(count);
	historique = 0;
	pseudo= prompt("Veuillez entrer votre pseudo : ");
	document.getElementById("return").innerHTML = "Bienvenue, " + pseudo + " !";
	document.getElementById("timer").innerHTML = "secondes restantes : " + second;
}

function lose()
{
	scoreTab[0].push(pseudo);
	scoreTab[1].push(historique);
	alert("Tu as perdu !");
	console.log(scoreTab);
	tri();
	restart();
	//return bufferScore;
}

function tri()
{
	var tri;
	var bufferScore;
	var bufferPseudo;
	console.log(scoreTab);
	do{
		tri = true;
		for(var i = 0; i < (scoreTab[1].length); i++){
			if(scoreTab[1][i] < scoreTab[1][i+1]){
				bufferScore = scoreTab[1][i];
				bufferPseudo = scoreTab[0][i];
				scoreTab[1][i] = scoreTab[1][i+1];
				scoreTab[0][i] = scoreTab[0][i+1];
				scoreTab[1][i+1] = bufferScore;
				scoreTab[0][i+1] = bufferPseudo;
				tri = false;
			}
		}
	}while(!tri);
	console.log(scoreTab);
}

function afficheHighScore()
{
	var string = "<table>";
	string += "<tr><th>Pseudo</th><th>Score</th></tr>";
	for(var i = 0; i < scoreTab[0].length;i++){
		string += "<tr><td>" + scoreTab[0][i] + "</td><td>" + scoreTab[1][i] + "</td></tr>";
	}
	string += "</table>";
	document.getElementById("score").innerHTML = string;
}
// André

function signe(coup1,coup2,choix) 
{
	var tempChoix;
	if (coup1 == coup2) {
		console.log("Signe appeller : " + coup1 + "  " + coup2);
		switch(coup1){
			case "ciseaux" :
				tempChoix = ["pierre","papier"];
			break;
			case "pierre" :
				tempChoix = ["ciseaux","papier"];
			break;
			case "papier" :
				tempChoix = ["ciseaux","pierre"];
			break;
		}
		return tempChoix[hasard(0,2)];
	}
	else {
		return choix[hasard(0,3)];
	}
}

function hasard(Min,Max) { 
    return (Math.floor((Max-Min)*Math.random())+Min); 
} 

function score()
{

}
//Anthony
