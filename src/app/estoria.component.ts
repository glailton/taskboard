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
  estoria: Estoria;

  constructor(private estoriaService: EstoriaService){ }

  ngOnInit() {
    this.estorias = this.estoriaService.getEstorias();
    console.log("uma vez");
  }

  cadastrarTarefas(tarefa: Tarefas, estoria: Estoria){
  //  this.estoriaService.cadastrarTarefas(tarefas)
   //this.tarefas = estoria.tarefas;
   // this.tarefas.push(estoria.tarefas)
   /*this.estorias.forEach(est => {
     if(est.id === id){
       estoria.tarefas.forEach(t => {
         est.tarefas.push(t);
       });
       
     }
   });
   console.log(this.estorias);*/

   estoria.tarefas.push(tarefa);
   
  }

  finalizarEstoria(estoria: Estoria){
    this.estorias.splice(this.estorias.indexOf(estoria),1);
  }
}