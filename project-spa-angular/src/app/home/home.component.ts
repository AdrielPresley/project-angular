import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela:  boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Adriel', idade: 26, email: 'adriel@gmail.com', curso: 'Analise e Desenvolvimento de Sistemas' },
    { nome: 'Teste', idade: 27, email: 'Teste@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'Teste 2', idade: 30, email: 'Teste2@gmail.com', curso: 'Engenharia da Computacao' },
    { nome: 'Teste 3', idade: 35, email: 'Teste3@gmail.com', curso: 'Sistemas da Informacao' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

}
