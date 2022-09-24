import { Component, Input, OnInit } from '@angular/core';
import { FrasesInterface } from '../../interface/frases.interface';
import frasesJson from '../../../assets/frases.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() frasesHome: FrasesInterface[] = frasesJson;

  constructor() { }

  ngOnInit(): void {
  }

}
