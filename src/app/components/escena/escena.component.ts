import { Component, Input, OnInit, Output } from '@angular/core';
import { FrasesInterface } from '../../interface/frases.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css'],
})
export class EscenaComponent implements OnInit {
  // Creem array del tipus "FrasesInterface" amb les frases del Json importat del component pare "Home"
  @Input() frasesEscena: FrasesInterface[] = [];
  
  
  currentSentence: number = 0;
  // Creem funcions per avançar i retrocedir en la frase triada
  prev() {
    this.currentSentence == 0
      ? (this.currentSentence = this.frasesEscena.length - 1)
      : this.currentSentence--;
  }
  next() {
    this.currentSentence == this.frasesEscena.length - 1
      ? (this.currentSentence = 0)
      : this.currentSentence++;
  }

  constructor() {}

  ngOnInit(): void {}
}
