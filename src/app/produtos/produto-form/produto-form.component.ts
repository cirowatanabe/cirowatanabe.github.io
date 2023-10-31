import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent {

  @Input() produto: Produto;
  @Output() editarProduto = new EventEmitter<Produto>();

  produtoAtualizado: Produto;

  editar(){
    this.produtoAtualizado = this.produto;
    this.editarProduto.emit(this.produtoAtualizado);
  }

}
