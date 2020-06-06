import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  /**
   * show home page
   */
  // tslint:disable-next-line:no-inferrable-types
  public homepage: boolean = false;
  /**
   * Login
   */
  public allowLogin(data: FormGroup): void {
    if (data.value.email === 'padmapriya@gmail.com' && data.value.password === '1234') {
      this.homepage = true;
    } else {
      alert('Credentials Doesn\'t match');
    }
  }
}
