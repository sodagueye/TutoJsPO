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
// heritage des propriete et des function
 class Admin extends Utilisateur{
    // 
    supprimerUtilisateur(util){
        utilisateurs = utilisateurs.filter(utilisateur => {
            return utilisateur.email != util.email;
        })

    }

 }
const util1 = new Utilisateur("modou sall","sallmodou@gmail.com" ,"fatou" , "comba");
const util2 = new Utilisateur("maman diop","diopmaman@gmail.com" ,"astou" );
const admin = new Admin("mbaye ndiaye","ndiayembaye@gmail.com" ,"soukaye", "yacine", "satou" );
let utilisateurs = [util1 , util2, admin];
 console.log(utilisateurs);
 admin.supprimerUtilisateur(util1)
 console.log(utilisateurs);

