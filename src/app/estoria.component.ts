import { Component } from '@angular/core';
import { Estoria } from './estoria';
import { ESTORIA } from './estoria.mock';
import { Tarefas } from './tarefas';
import { TAREFAS } from './tarefas.mock';
import { EstoriaService } from './estoria.service'; 

@Component({
    selector: 'estoria',
    templateUrl: 'app/estoria.component.html',
    styleUrls: ['app/estoria.component.css']
})
export class EstoriaComponent {
  estorias: Estoria[];
  tarefas: Tarefas[];

  constructor(private estoriaService: EstoriaService){ }

  ngOnInit() {
    this.estorias = this.estoriaService.getEstorias();
  }
}