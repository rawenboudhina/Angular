import { Component, OnInit } from '@angular/core';
import { Style } from '../model/style.model';
import { Plat } from '../model/plat.model';
import { PlatsComponent } from '../plats/plats.component';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-style.component.html',
  styles: [
  ]
})
export class RechercheParStyleComponent implements OnInit {
  IdStyle! : number;
  styles! : Style[];
  plats! : Plat[];


  constructor(private platService : PlatService) { }

  ngOnInit(): void {
     this.platService.listeStyles().
      subscribe(styles => {this.styles = styles;
      console.log(styles);
    }); 

  }

  onChange() {
    this.platService.rechercherParStyle(this.IdStyle).
      subscribe(prods =>{this.plats=prods});

    }

}
