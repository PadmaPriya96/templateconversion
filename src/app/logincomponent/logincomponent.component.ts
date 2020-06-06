import { Component , Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.scss']
})
export class LogincomponentComponent {
  /**
   * DESc : for add emit firstname letter
   */
  @Output() public loginVal: EventEmitter<FormGroup> = new EventEmitter();
  /**
   * Desc: email validation
   */
  public emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  /**
   * Desc:loginform
   */
  public loginform: FormGroup = new FormGroup({
    email : new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailRegex)]),
    password : new FormControl('', Validators.required)
  });
  /**
   * DEsc :oninit
   */
  public login(): void {
    console.log(this.loginform);
    if (this.loginform.status === 'VALID') {
      this.loginVal.emit(this.loginform);
    }
  }
}
