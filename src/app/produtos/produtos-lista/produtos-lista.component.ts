import { AfterContentInit, Component, OnInit } from '@angular/core';
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
  usuarioLogado: boolean = localStorage.getItem("access_token") != null;


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
    setTimeout(() => this.sucesso = false, 10000); // temporizador do alerta
    this.ngOnInit(); // recarrega a pag para trazer a lista de produtos atualizados
  }

  exibirErro(msg: string){
    this.erroMsg = msg;
    this.erro = true;
    setTimeout(() => this.erro = false, 10000);
    this.ngOnInit();
  }

  exibirEditar(msg: string){
    this.editMsg = msg;
    this.edit = true;
    setTimeout(() => this.edit = false, 10000);
    this.ngOnInit();
  }

}
