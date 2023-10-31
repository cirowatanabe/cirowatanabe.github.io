import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit{

  produtos: Produto[];
  sucesso: boolean = false;
  sucessoMsg: string;
  erro: boolean = false;
  erroMsg: string;
  editMsg: string;
  edit: boolean = false;


  constructor(
    private service: ProdutosService
  ){}

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: response => {
        console.log(response);
        this.produtos = response;
      },
      error: errorResponse => {

      }
    })
  }

  exibirSucesso(msg: string){
    this.sucessoMsg = msg;
    this.sucesso = true;
    this.erro = false;
    this.ngOnInit();
  }

  exibirErro(msg: string){
    this.erroMsg = msg;
    this.sucesso = false;
    this.edit = false;
    this.erro = true;
    this.ngOnInit();
  }

  exibirEditar(msg: string){
    this.editMsg = msg;
    this.erro = false;
    this.sucesso = false;
    this.edit = true;
    this.ngOnInit();
  }

}
