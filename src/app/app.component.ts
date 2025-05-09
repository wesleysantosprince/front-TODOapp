import { Component } from '@angular/core';
//importando as definições da classe Tarefa
import { Tarefa } from "./tarefa";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TODOapp';

  //array para armazenar objetos do tipo Tarefa
  arrayDeTarefas: Tarefa[] = [];
  apiURL: string;

  //executa o método READ_tarefas quando inicializado o programa
  constructor(private http: HttpClient) {
    this.apiURL = 'http://localhost:3000';
    this.READ_tarefas();
  }

  //método para criar e armazenar novas tarefas no array
  CREATE_tarefa(descricaoNovaTarefa: string) {
    var novaTarefa = new Tarefa(descricaoNovaTarefa, false); //novo objeto do tipo Tarefa
    this.http.post<Tarefa>(`${this.apiURL}/api/post`, novaTarefa).subscribe(
      resultado => { console.log(resultado); this.READ_tarefas(); });
  }

  //método para ler as tarefas armazenadas no array
  READ_tarefas() {
    this.http.get<Tarefa[]>(`${this.apiURL}/api/getAll`).subscribe(
      resultado => this.arrayDeTarefas = resultado);
  }

  //métoo para excluir a tarefa do array
  DELETE_tarefa(tarefaAserRemovida: Tarefa) {
    var indice = this.arrayDeTarefas.indexOf(tarefaAserRemovida);
    var id = this.arrayDeTarefas[indice]._id;
    this.http.delete<Tarefa>(`${this.apiURL}/api/delete/${id}`).subscribe(
      resultado => { console.log(resultado); this.READ_tarefas(); });
  }

  UPDATE_tarefa(tarefaAserModificada: Tarefa) {
    var indice = this.arrayDeTarefas.indexOf(tarefaAserModificada);
    var id = this.arrayDeTarefas[indice]._id;
    this.http.patch<Tarefa>(`${this.apiURL}/api/update/${id}`,
      tarefaAserModificada).subscribe(
        resultado => { console.log(resultado); this.READ_tarefas(); });
  }

}
