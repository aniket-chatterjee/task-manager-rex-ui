import { Component, OnInit } from "@angular/core";
import * as Actions from "../../store/auth/auth.actions";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  ValidationErrors,
} from "@angular/forms";
import { SignupInput, AuthState } from "src/app/store/auth/auth.model";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  error$: Observable<string | null> = this.store.select(
    (state) => state.authState.error
  );
  constructor(
    private fb: FormBuilder,
    private store: Store<{ authState: AuthState }>,
    private messageService: MessageService
  ) {
    this.error$.subscribe((err) =>
      this.messageService.add({
        severity: "error",
        summary: "Error occured",
        detail: err,
      })
    );
  }

  onSubmit() {
    const signupData = {
      email: this.email.value,
      password: this.password.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      username: this.username.value,
    } as SignupInput;
    this.store.dispatch(Actions.signup({ data: signupData }));
  }

  ngOnInit(): void {
    const passwordErrorValidator: ValidatorFn = (
      control: FormGroup
    ): ValidationErrors | null => {
      const password = control.get("password");
      const repeatPassword = control.get("confirmPassword");
      return password.value != repeatPassword.value
        ? { passwordError: true }
        : null;
    };
    this.registrationForm = this.fb.group(
      {
        firstName: [null, [Validators.required, Validators.minLength(3)]],
        lastName: [null, [Validators.required, Validators.minLength(1)]],
        email: [null, [Validators.required, Validators.email]],
        username: [null, [Validators.required, Validators.minLength(5)]],
        password: [null, [Validators.required, Validators.minLength(5)]],
        confirmPassword: [
          null,
          [Validators.required, Validators.minLength(5)],
          [],
        ],
      },
      { validators: passwordErrorValidator }
    );
  }

  get firstName() {
    return this.registrationForm.get("firstName");
  }
  get lastName() {
    return this.registrationForm.get("lastName");
  }
  get email() {
    return this.registrationForm.get("email");
  }
  get username() {
    return this.registrationForm.get("username");
  }
  get password() {
    return this.registrationForm.get("password");
  }
  get confirmPassword() {
    return this.registrationForm.get("confirmPassword");
  }
}
