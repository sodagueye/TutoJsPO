// constructor function : maquette  model pour la creation d'un objet
function utilisateur(noms ,email , amis){
    this.noms =noms
    this.email =email
    this.amis =amis
    this.login =function(){
        console.log(`${email} est connecte`)
    }
    this.lagout =function(){
        console.log(`${email} est deconnecte`)
    }
}
// une instance de la fonction
const util1 = new utilisateur("modou sall","sallmodou@gmail.com" ,"fatou" , "comba");
const util2 = new utilisateur("maman diop","diopmaman@gmail.com" ,"astou" );
const util3 = new utilisateur("mbaye ndiaye","ndiayembaye@gmail.com" ,"soukaye", "yacine", "satou" );
const util4 = new utilisateur("mbaye ndiaye","ndiayembaye@gmail.com" ,"soukaye", "yacine", "satou" );
console.log(util1);
console.log(util2);
console.log(util3);
console.log(util4);
 
// acces au methode
util1.login();
util1.lagout();
