// POO
// ENcapsulation
const utilisateur = {
    noms : "soda gueye",
    email :"exemple4 @gmail.com",
    amis : ["steven" ,"Janathan"],
    login(){
        console.log(`${this.email} est connecté`);
    },
    logout (){
        console.log(`${this.email} est deconnecter`);
    }
}
 console.log(utilisateur);

// Acces aux proprietes d un objet
//  console.log(utilisateur.noms);
//  console.log(utilisateur.email);
// console.log(utilisateur[`noms`]);
//  console.log(utilisateur[`email`]);
