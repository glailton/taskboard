import {ESTORIA} from './estoria.mock';
import {Estoria} from './estoria';
import {Tarefas} from './tarefas';
import {Injectable} from '@angular/core';

@Injectable() 
export class EstoriaService{
    estorias: Estoria[] = ESTORIA;
    tarefa: Tarefas;
    estoria: Estoria;

    getEstorias() {
        return ESTORIA;
    }

    cadastrarTarefas(tarefa:Tarefas, estoria: Estoria){
        estoria.tarefas.push(tarefa);
    }

    finalizarEstoria(estoria: Estoria){
    this.estorias.splice(this.estorias.indexOf(estoria),1);
  }
}