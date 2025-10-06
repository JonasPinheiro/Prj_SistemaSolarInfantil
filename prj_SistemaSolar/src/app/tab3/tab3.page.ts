import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { quiz } from 'src/data/quiz';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonContent],
})
export class Tab3Page {
  @ViewChildren('btnAlternativa') botoes!: QueryList<ElementRef<HTMLButtonElement>>;
  letras = ['A', 'B', 'C', 'D'];
  todoQuiz = quiz;
  perguntaAtual = this.todoQuiz[0];
  respostaSelecionada: string | null = null;
  respondido = false;

  perguntasRespondidas: number[] = [];

  constructor() {}

  ngOnInit(){
    this.sortearPergunta();
  }

  selecionarAlternativa(option: string) {
    if (this.respondido) return;
    this.respostaSelecionada = option;
    const correta = this.perguntaAtual.alternatives.find(a => a.correct)?.option;

    this.botoes.forEach(btn => {  
      const elementos = btn.nativeElement;
      if (elementos.innerText.includes(correta!)) {
        elementos.style.backgroundColor = '#2ecc71'; 
      } else if (elementos.innerText.includes(option)) {
        elementos.style.backgroundColor = '#e74c3c'; 
      } else {
        elementos.style.backgroundColor = '#6B3DDB'; 
      }
    });
    this.respondido = true;
    this.perguntasRespondidas.push(this.perguntaAtual.id);
  }

  sortearPergunta() {
    const disponiveis = this.todoQuiz.filter(
      pergunta => !this.perguntasRespondidas.includes(pergunta.id)
    );

    if (disponiveis.length === 0) {
      this.perguntasRespondidas = [];
      return;
    }

    const index = Math.floor(Math.random() * disponiveis.length);
    this.perguntaAtual = disponiveis[index];

    this.respostaSelecionada = null;
    this.respondido = false;

    setTimeout(() => {
      this.botoes.forEach(btn => btn.nativeElement.style.backgroundColor = '#6B3DDB');
    });
  }

  proximaPergunta() {
    this.sortearPergunta();
  }
}





