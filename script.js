const scoreJoueur = 0;
const scoreJoueur_span = document.getElementById("score_joueur");	
const pierre_div = document.getElementById("pierre");
const papier_div = document.getElementById("papier");	
const ciseaux_div = document.getElementById("ciseaux");	
var historique = 0;
var count;
var second = 0;
var start = false;

function getIaChoix(){
	var les_choix = ["pierre", "papier", "ciseaux"];
	return les_choix[hasard(0,3)];
	
}

function hasard(Min,Max) { 
    return (Math.floor((Max-Min)*Math.random())+Min); 
} 

function jeu(choixJoueur){
	var iaChoix = ChoixIA(historique,choixJoueur);
	historique++ ;

	console.log("joueur choix =>" + choixJoueur);
	console.log("ia choix =>" + iaChoix);
	console.log(partie(choixJoueur,iaChoix));
	console.log(historique);
	document.getElementById("return").innerHTML =   "Tu as choisis : <img src='" + choixJoueur + ".png'></img> // " + "L'IA a choisis  : <img src=' " +iaChoix + ".png'></img>";
	document.getElementById("score").innerHTML =  "Tu viens de " + partie(choixJoueur,iaChoix)  ;

	return choixJoueur;
}




	function FonctionPierre(e) {
		jeu("pierre");
		clearInterval(count);
		count = setInterval(timer,1000);
		second = 0;	
		document.getElementById("timer").innerHTML = second +1 + " seconde écoulé";
		start = true;
	} 

	function FonctionPapier(e) {
		jeu("papier");
		clearInterval(count);
		count = setInterval(timer,1000);
		second = 0;
		document.getElementById("timer").innerHTML = second +1 + " seconde écoulé";
		start = true;
	} 

	function FonctionCiseaux(e) {
		jeu("ciseaux");
		clearInterval(count);
		count = setInterval(timer,1000);
		second = 0;
		document.getElementById("timer").innerHTML = second +1 + " seconde écoulé";
		start = true;
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
					return "perdre";
				break;
			}

		}else { //choix joueur ciseaux
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

//Pierre


function ChoixIA(h,choixJoueur) {
	if (historique >= 42) {
		if (choixJoueur = "pierre"){
			return "papier";
		} else if (choixJoueur = "papier"){
			return 'ciseaux';
		} else{
			return "pierre";
		}
	}else{
		return getIaChoix();
	}
}

//Anthony

function timer()
{
	second++;
	document.getElementById("timer").innerHTML = second +1 + " seconde écoulé";
	if(second >= 3 && start == true){
		alert("Temps écoulé !");
		start = false;
		clearInterval(count);
	}
}