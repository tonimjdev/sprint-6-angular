import { Component, Input, OnInit } from '@angular/core';
import { FrasesInterface } from '../../interface/frases.interface';
import frasesJson from '../../../assets/frases.json'; // Importem frases de l'arxiu Json

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @Input() frasesHome: FrasesInterface[] = frasesJson;

  showFrases:boolean = false;
  // Funció per mostrar frases per pantalla
  show() {
    this.showFrases = !this.showFrases;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
