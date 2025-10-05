import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { planets } from 'src/data/planets';
import { Planet } from 'src/model/planet.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonContent],
})
export class Tab2Page {
  planets: Planet[] = planets;
  planet: number = 0;
  planetSelected: Planet | undefined;
  idAtual: number = 1;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.planet = Number(
      this.activatedRoute.snapshot.paramMap.get('planet') ?? '1'
    );
    this.planetSelected = this.planets.find(
      (planet) => this.planet == planet.id
    );
    this.idAtual = this.planetSelected?.id ?? 1;
  }

  redirecionar(id: number): void {
    this.router.navigate([`/tabs/tab2/${id}`]);
  }

  planetaSucessor(): void {
    if (this.idAtual == 1) {
      this.redirecionar(9);
      return;    
    }
    this.redirecionar(--this.idAtual);
  }

  planetaAnterior(): void {
    if (this.idAtual == 9) {
      this.redirecionar(1);
      return;
    }
    this.redirecionar(++this.idAtual);
  }
}
