import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  buyer: boolean;
  seller: boolean;
  errorMessage:string;
  sign: string;
  constructor(protected emartService: EmartService,protected router: Router) { }

  ngOnInit(): void {
    this.errorMessage='';
  }
  validate(){
    if(this.sign == 'buyer'){
                    let result = this.emartService.validateBuyer(this.username,this.password)
                    if(result == null)
                    {
                      //this.loginService.loginBuyer(result);
                      this.errorMessage = "Invalid username/password";
                      
                    }
                else{
                      
                      this.router.navigate(['item-list']);
                    }
                  }
    if(this.sign == 'seller'){
                    let result = this.emartService.validateSeller(this.username,this.password)
                    if(result == null)
                    {
                      //this.loginService.loginBuyer(result);
                      this.errorMessage = "Invalid username/password";
                      
                    }
                else{
                  this.router.navigate(['item-list']);
                    }
                  }      
      
          }
}



