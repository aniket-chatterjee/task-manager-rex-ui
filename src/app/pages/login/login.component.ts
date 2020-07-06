import { Component, OnInit } from "@angular/core";
import { LoginInput } from "src/app/store/auth/auth.model";
import {
  FormBuilder,
  FormGroup,
  Validators,
  RequiredValidator,
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}
  loginInput: LoginInput = new LoginInput();

  onSubmit() {}
  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(5)]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  get username() {
    return this.loginFormGroup.get("username");
  }
  get password() {
    return this.loginFormGroup.get("password");
  }
}
