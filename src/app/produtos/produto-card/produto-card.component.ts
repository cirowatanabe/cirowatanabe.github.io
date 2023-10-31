import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {

  @Input() produto: Produto;
  @Output() successMessage = new EventEmitter<string>();
  @Output() errorMessage = new EventEmitter<string>();

  usuarioLogado: boolean = localStorage.getItem("access_token") != null;

  constructor(private service: ProdutosService){}
  ngOnInit(): void {
    
  }

  deletar(){  
    this.service.delete(this.produto.idProduto)
      .subscribe({
        next: response => {
          this.successMessage.emit(this.produto.nome + " excluído com sucesso!")
          this.ngOnInit();
        },
        error: error => {
          this.errorMessage.emit("Erro inesperado")
        }
      });
  }


}
