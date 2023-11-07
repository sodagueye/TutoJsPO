// Abstraction c est de base sur l essentiel mais pas les detail
function Employe(noms ,age ,sexe ,salaire){
    this.noms = noms;
    this.age = age;
    this.sexe = sexe;
    this.salaire =salaire;
    this.infoEmploye =function(){
        console.log(`Noms ${this.noms}`);
        console.log(`Age ${this.age}`);
        console.log(`Sexe ${this.sexe}`);
        console.log(`Salaire ${this.salaire}`);
    }
}
// l instance
const empl1 = new Employe("Daniel Cruz ", 30 ,"M",60000);
const empl2 = new Employe("david Cruz ", 25 ,"M",60000);
empl1.infoEmploye();
empl2.infoEmploye()