import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('userName',{static:false}) userName: ElementRef;
  @ViewChild('passWord',{static:false}) passWord: ElementRef;
  @ViewChild('closeButton',{static:false}) closeButton: ElementRef;
  credentials=[{userID:"username1", passWord:"password1",userName:"User1"},{userID:"username2", passWord:"password2",userName:"User2"}]
  title = 'media';
  homeActive:boolean = false;
  isPrivate:boolean = false;
  count:number =0;
  // loginActive:boolean = false;
  displayName:string;
  logInError="";
  constructor(public login:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    this.login.isLoggedIn=!this.login.isLoggedIn;
    this.router.navigate(['/']);
    
  }
  logIn(user,pwd){
    console.log(user.touched);
    console.log(pwd);
    for( let one of this.credentials){
      if(one.userID==user && one.passWord==pwd){
        console.log(one.userName,"res");
        this.isPrivate=true;
        this.login.isLoggedIn=true;
        console.log(this.login.isLoggedIn,"Login");
        this.displayName=one.userName;
        this.userName.nativeElement.value="";
        this.passWord.nativeElement.value="";
        this.logInError="";
        this.closeButton.nativeElement.click();
        this.count+=1;
        break;
        
      }
      
    }
    if(!this.count){
      this.logInError="Credentials didn't match !";
    }

  }

}
