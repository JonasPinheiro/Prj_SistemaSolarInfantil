import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonContent],
})
export class Tab1Page {
  constructor(private router: Router) {}

  redirecionar(planet: string): void{
    this.router.navigate([`/tabs/tab2/${planet}`]);
  }
}
