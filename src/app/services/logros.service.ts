import { Injectable } from '@angular/core';
import { ILogro } from '../home/home.component';

@Injectable()
export class LogrosService {
  logros: ILogro[];
  constructor() {
    this.logros =  [
      {id: 1, title: 'Test 1', description: 'Lorem i'},
      {id: 2, title: 'Test 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, pariatur nemo aspernatur veritatis soluta saepe cumque accusantium optio corporis sit aut non est, quae harum perspiciatis beatae quod nisi voluptates.'},
      {id: 3, title: 'Test 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, pariatur nemo aspernatur veritatis soluta saepe cumque accusantium optio corporis sit aut non est, quae harum perspiciatis beatae quod nisi voluptates.'},
    ];
  }

  all(): ILogro[] {
    return this.logros;
  }

  find(id: number): ILogro {
    return this.logros.find((logro) => logro.id === id);
  }

}
