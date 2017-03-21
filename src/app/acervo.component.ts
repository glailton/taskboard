import { Component } from '@angular/core';
import { Estoria } from './estoria';
import { ACERVO } from './estoria.mock';

@Component({
    selector: 'acervo',
    templateUrl: 'app/acervo.component.html',
    styleUrls: ['app/acervo.component.css']
})
export class AcervoComponent {
  acervo: Estoria[];

  ngOnInit() {
    this.acervo = ACERVO;
  }
}