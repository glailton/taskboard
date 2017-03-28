import {ESTORIA} from './estoria.mock';
import {Injectable} from '@angular/core';

@Injectable() 
export class EstoriaService{
    getEstorias() {
        return ESTORIA;
    }
}