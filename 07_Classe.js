// Classe methode pour la creation d'un objet
class Utilisateur{
    // constructor :c est une fonction qui implemente les proprietes d'un objet
    constructor(noms ,email ,amis){
        this.noms = noms;
        this.email = email;
        this.amis = amis;

    }
    login(){
       console.log(`${this.email} est connecte`)
    };
    lagout(){
            console.log(`${this.email} est deconnecte`)
    };
        
   
}
const util1 = new Utilisateur("modou sall","sallmodou@gmail.com" ,"fatou" , "comba");
const util2 = new Utilisateur("maman diop","diopmaman@gmail.com" ,"astou" );
const util3 = new Utilisateur("mbaye ndiaye","ndiayembaye@gmail.com" ,"soukaye", "yacine", "satou" );
const util4 = new Utilisateur("mbaye ndiaye","ndiayembaye@gmail.com" ,"soukaye", "yacine", "satou" );
console.log(util1);
console.log(util2);
console.log(util3);
console.log(util4);
 util1.login();
 util1.lagout();
 