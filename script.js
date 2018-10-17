const pierre_div = document.getElementById("pierre");
const papier_div = document.getElementById("papier");	
const ciseaux_div = document.getElementById("ciseaux");	
var historique = 0;
var count;
var second = 0;
var start = false;
var coups = ["l","k"];

function FonctionPierre(e) {
	jeu("pierre");
	clearInterval(count);
	count = setInterval(timer,1000);
	second = 0;	
	document.getElementById("timer").innerHTML = second + 1 + " seconde(s) écoulée(s)";
	start = true;
} 

function FonctionPapier(e) {
	jeu("papier");
	clearInterval(count);
	count = setInterval(timer,1000);
	second = 0;
	document.getElementById("timer").innerHTML = second + 1 + " seconde(s) écoulée(s)";
	start = true;
} 

function FonctionCiseaux(e) {
	jeu("ciseaux");
	clearInterval(count);
	count = setInterval(timer,1000);
	second = 0;
	document.getElementById("timer").innerHTML = second + 1 + " seconde(s) écoulée(s)";
	start = true;
} 

function jeu(choixJoueur){
	var iaChoix = ChoixIA(choixJoueur);
	historique++ ;
	console.log("joueur choix =>" + choixJoueur);
	console.log("ia choix =>" + iaChoix);
	console.log(partie(choixJoueur,iaChoix));
	console.log(historique);
	document.getElementById("return").innerHTML =   "Tu as choisis : <img src='" + choixJoueur + ".png'></img> // " + "L'IA a choisis  : <img src=' " +iaChoix + ".png'></img>";
	document.getElementById("score").innerHTML =  "Tu viens de " + partie(choixJoueur,iaChoix)  ;
	return choixJoueur;
}

function partie(choixJoueur,iaChoix){
	if (choixJoueur == "pierre") {
		switch (iaChoix){
			case "pierre" :
				return "faire égalité"; 
			break;
			case "papier":
				return "perdre";
			break;
			case "ciseaux":
				return "gagné";
			break;
		}

	} else if (choixJoueur == "papier") {
		switch (iaChoix){
			case "pierre" :
				return "gagné"; 
			break;
			case "papier":
				return "faire égalité";
			break;
			case "ciseaux":
				return "perdre";
			break;
		}
	} else { //choix joueur ciseaux
		switch (iaChoix){
			case "pierre" :
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

function ChoixIA(choixJoueur) {
	if (historique >= 41) {
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

//Anthony

function timer()
{
	second++;
	document.getElementById("timer").innerHTML = second + 1 + " seconde écoulé";
	if(second >= 3 && start == true){
		alert("Temps écoulé !");
		start = false;
		clearInterval(count);
	}
}