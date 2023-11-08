function utilisateur(noms ,email , amis){
    this.noms =noms
    this.email =email
    this.amis =amis



    // liaison d'un methode par un prototype
    utilisateur.prototype.login =function(){
        console.log(`${email} est connecte`)
    }
    utilisateur.prototype.lagout =function(){
        console.log(`${email} est deconnecte`)
    }
}
const util1 = new utilisateur("modou sall","sallmodou@gmail.com" ,"fatou" , "comba");
console.log( util1);