import { Component, OnInit } from '@angular/core';
import { LogrosService } from '../services/logros.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logros: ILogro[];
  title = 'Bienvenido';

  constructor(private logroService: LogrosService) { }

  ngOnInit() {
    this.logros = this.logroService.all();
  }



}

export interface ILogro {
  id: number;
  title: string;
  description?: string;
}
