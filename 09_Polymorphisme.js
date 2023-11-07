
class User{
    constructor(noms){
        this.noms = noms
    }
    login(){
        console.log(`${this.noms}  connecter en tant que utilisateur`)
    }
}
class Admin extends User{
    login(){
        console.log(`${this.noms}  connecter en tant que admin`)
    }
}

const user1 =new User("soda gueye")
const admin = new Admin("diarra gueye")
user1.login();
admin.login();