import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.scss']
})
export class HeadercomponentComponent implements OnInit {

  /**
   * Desc :Menu Array
   */
  public menu : any = [];
  /**
   * Desc : OnInit function
   */
  public ngOnInit(): void  {
    this.menu = ['Home', 'Features', 'Blog', 'Contact Us', 'Careers'];
  }
}
