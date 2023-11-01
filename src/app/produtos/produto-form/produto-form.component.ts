import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit{

  @Input() produto: Produto;
  @Output() editarProduto = new EventEmitter<Produto>();
  @Output() enviarMsgSucesso = new EventEmitter<string>();
  @Output() enviarMsgErro = new EventEmitter<string>();
  produtoAtualizado: Produto;
  cadastrando: boolean;

  constructor(private service : ProdutosService){}

  ngOnInit(): void {
    if (this.produto == null){
      this.produto = new Produto();
      this.cadastrando = true;
    }
  }

  editar(){
    this.produtoAtualizado = this.produto;
    this.editarProduto.emit(this.produtoAtualizado);
  }

  cadastrar(){
    this.service.create(this.produto)
    .subscribe({
      next: response => {
        this.enviarMsgSucesso.emit(this.produto.nome + " cadastrado com sucesso!");
      },
      error: erroResponse => {
        this.enviarMsgErro.emit("Erro inesperado ao cadastrar produto");
      }
    })
  }

}
