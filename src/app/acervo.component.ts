import { Component } from '@angular/core';
import { Estoria } from './estoria';
import { ACERVO } from './estoria.mock';
import { Tarefas } from './tarefas';
import { TAREFAS } from './tarefas.mock';

@Component({
    selector: 'acervo',
    templateUrl: 'app/acervo.component.html',
    styleUrls: ['app/acervo.component.css']
})
export class AcervoComponent {
  acervo: Estoria[];
  tarefas: Tarefas[];

  ngOnInit() {
    this.acervo = ACERVO;
    this.tarefas = TAREFAS;
  }
}