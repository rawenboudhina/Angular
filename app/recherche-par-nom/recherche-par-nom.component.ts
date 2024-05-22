import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomPlat! : string;
  plats!: Plat[];
  allPlats!: Plat[];
  searchTerm!: string;
  
  constructor(private platService : PlatService) { }

  ngOnInit(): void {
    this.platService.listePlat().subscribe(prods => {
      console.log(prods);
      this.plats = prods;
      });
      
  }

  rechercherPlats(){
    this.platService.rechercherParNom(this.nomPlat).
    subscribe(prods => {
      console.log(prods);
      this.plats=prods;});
  }

  onKeyUp(filterText : string){
    this.plats = this.allPlats.filter(item =>
    item.nomPLat.toLowerCase().includes(filterText));
    }
    

}
