import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

@Injectable()
export class LoginService {
    
    token: string = '';

    constructor(private router:Router){

    }

    login(email: string, password: string) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(
            response => {
                auth.currentUser?.getIdToken().then(
                    token => {
                        this.token = token
                        this.router.navigate(['/']);
                    }
                );
            }
        );
    }

    getIdToken(){
        return this.token;
    }

    isAutenticado(){
        return this.token != '';
    }

    logOut(){
        const auth = getAuth();
        signOut(auth).then(()=>{
            this.token = '';
            this.router.navigate(['login'])
        }).catch(error => {
            console.log('error de logout:'+error);
            
        });
    }
}