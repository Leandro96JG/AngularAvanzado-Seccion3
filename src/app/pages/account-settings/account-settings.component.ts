import { SettingsService } from './../../services/settings.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.css'
})
export class AccountSettingsComponent implements OnInit{

  private settingsServices = inject(SettingsService);




  ngOnInit(): void {
    this.settingsServices.checkCurrentTheme();
  }


  changeTheme(theme:string){

   this.settingsServices.changeTheme(theme);

   this.checkCurrentTheme()
  }

  checkCurrentTheme(){
    // recorre todas las clases con la clase .selector
  this.settingsServices.checkCurrentTheme()

  }

}
