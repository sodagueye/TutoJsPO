// Creation utilisateur
const nomUtil1 = "gueye soda";
const mailUtil1 = "examplenom12@gmail.com";
const amiUtil1 = ["Awa", "fatou"];
console.log(`Nom : ${nomUtil1}`);
console.log(`Mail : ${mailUtil1}`);
 console.log(`Ami : ${amiUtil1}`);
console.log('');
// Creation utilisateur2
const nomUtil2 = "comba gueye";
const mailUtil2 = "examplenom3@gmail.com";
const amiUtil2 = ["nogaye", "diakhou"];
console.log(`Nom : ${nomUtil2}`);
console.log(`Mail : ${mailUtil2}`);
 console.log(`Ami : ${amiUtil2}`);
console.log('');
// Creation utilisateur3
const nomUtil3 = "comba gueye";
const mailUtil3 = "examplenom4@gmail.com";
const amiUtil3 = ["nogaye", "diakhou"];
console.log(`Nom : ${nomUtil3}`);
console.log(nomUtil3)
console.log("nom:" + nomUtil3)
console.log(`Mail : ${mailUtil3}`);
 console.log(`Ami : ${amiUtil3}`);
console.log('');


// fonction
function login(test){
    console.log(`${test} est connecté(e)`);
}
function logout(mail){
    console.log(`${mail} est deconnecté(e)`);
}
login(mailUtil1);
logout( nomUtil1);