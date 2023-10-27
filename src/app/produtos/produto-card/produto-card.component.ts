import { Component, Input } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent {

  @Input() produto: Produto;

  usuarioLogado: boolean = localStorage.getItem("access_token") != null;


}
