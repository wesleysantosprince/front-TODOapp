import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Tarefa} from "../tarefa"; //permite que o ItemComponent utilize as definições da classe Tarefa

@Component({
  selector: 'app-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  emEdicao = false; //sinaliza o status da tarefa
  @Input() tarefa: Tarefa = new Tarefa("", false); //define uma propriedade tarefa para armazenar a Tarefa representada por ItemComponent
  @Output() removeTarefa = new EventEmitter(); //define uma propriedade armazenando um objeto de Evento, para depois poder fazermos o Event Binding 
  @Output() modificaTarefa = new EventEmitter(); //evento para alterar os dados da Tarefa
}

