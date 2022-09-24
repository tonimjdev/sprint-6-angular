import { Component, Input, OnInit } from '@angular/core';
import { FrasesInterface } from '../../interface/frases.interface';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent implements OnInit {

  @Input() frasesEscena: FrasesInterface[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
