const scoreJoueur = 0;
const scoreJoueur_span = document.getElementById("score_joueur");	
const pierre_div = document.getElementById("pierre");
const papier_div = document.getElementById("papier");	
const ciseaux_div = document.getElementById("ciseaux");	
var historique = 0;
var timer;


function getIaChoix(){
	var les_choix = ["pierre", "papier", "ciseaux"];
	return les_choix[hasard(0,3)];
	
}

function hasard(Min,Max) { 
    return (Math.floor((Max-Min)*Math.random())+Min); 
} 

function jeu(choixJoueur){
	var iaChoix = FinPartie(historique,choixJoueur);
	historique++ ;

	console.log("joueur choix =>" + choixJoueur);
	console.log("ia choix =>" + iaChoix);
	console.log(partie(choixJoueur,iaChoix));
	console.log(historique);
	return choixJoueur;
}




	function FonctionPierre(e) {
		
		//var a = e.target;
		//console.log(" pierre");
		jeu("pierre");
		clearTimeout(timer);
		chrono(3000);		
	} 

	function FonctionPapier(e) {
		//var a = e.target;
		//console.log(" papier");
		jeu("papier");
		clearTimeout(timer);
		chrono(3000);
	} 

	function FonctionCiseaux(e) {
		//var a = e.target;
		//console.log(" ciseaux");
		jeu("ciseaux");
		clearTimeout(timer);
		chrono(3000);
	} 

function partie(choixJoueur,iaChoix){
		if (choixJoueur == "pierre") {
			switch (iaChoix){
				case "pierre" :
					return "égalité"; 
				break;
				case "papier":
					return "perdu";
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
					return "égalité";
				break;
				case "ciseaux":
					return "perdu";
				break;
			}

		}else { //choix joueur ciseaux
			switch (iaChoix){
				case "pierre" :
					return "perdu"; 
				break;
				case "papier":
					return "gagné";
				break;
				case "ciseaux":
					return "égalité";
				break;
			}

		}

}




//Pierre


function FinPartie(h,choixJoueur) {
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

function chrono(time)
{
	timer = setTimeout(timeOut,time);
}
function timeOut()
{
	alert("Temps écoulé !");
}
