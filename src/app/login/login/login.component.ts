import { OnInit, Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiseService } from './../../service/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private api: ApiServiseService, private router:Router) { }


  ngOnInit(): void {

  }

  submit() {
    console.log(this.form.value)
    this.api.getresponse("post", "auth", this.form.value)
      .subscribe(res => {
        this.router.navigate(['/home'])
      },
        err => console.log(err)

      )
  }

  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }  

}
