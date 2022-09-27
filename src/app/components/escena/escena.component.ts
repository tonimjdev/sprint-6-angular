import { Component, Input, OnInit, Output } from '@angular/core';
import { FrasesInterface } from '../../interface/frases.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css'],
})
export class EscenaComponent implements OnInit {
  @Input() frasesEscena: FrasesInterface[] = [];
  

  currentSentence: number = 0;

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
