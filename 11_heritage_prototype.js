function utilisateur(noms ,email , amis){
    this.noms =noms
    this.email =email
    this.amis =amis

} 
function Admin(...parms){
    // heritage des propriete
    utilisateur.apply(this ,parms)

}

    // liaison d'un methode par un prototype
utilisateur.prototype.login =function(){
        console.log(`${email} est connecte`)
}
 utilisateur.prototype.lagout =function(){
        console.log(`${email} est deconnecte`)
}
// heritage des prototype methode
Admin.prototype = Object.create(utilisateur.prototype);
// fonction seulement accessibles par l'admin
Admin.prototype.supprimerUtilisateur = function(util){
    utilisateurs = utilisateurs.filter(utilisateur =>{
        return utilisateur.email != util.email;
    })
}
const util1 = new utilisateur("modou sall","sallmodou@gmail.com" ,"fatou" , "comba");
const util2 = new utilisateur("maman diop","diopmaman@gmail.com" ,"astou" );
const admin = new Admin("mbaye ndiaye","ndiayembaye@gmail.com" ,"soukaye", "yacine", "satou" );
let utilisateurs = [util1 , util2, admin];
 console.log(utilisateurs);
//  admin.supprimerUtilisateur(util1)
//  console.log(utilisateurs);

