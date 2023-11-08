// factory function c'est une maquette un model.

const utilisateur =(noms ,email, ...amis) =>{
return{
    noms , email , amis,
    login(){--
    console.log(`${email} est connecte`)
    },
    logout (){
    console.log(`${email} est deconnecte`)
    }
}
}
const util1 = utilisateur("modou sall","sallmodou@gmail.com" ,"fatou" , "comba");
const util2 = utilisateur("maman diop","diopmaman@gmail.com" ,"astou" );
const util3 = utilisateur("mbaye ndiaye","ndiayembaye@gmail.com" ,"soukaye", "yacine", "satou" );
console.log(util1);
console.log(util2);
console.log(util3);
util1.login();
util1.logout();
