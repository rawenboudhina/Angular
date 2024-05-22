import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model';
import { AuthService } from '../services/auth.service';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-produits',
  templateUrl: './plats.component.html'
})
export class PlatsComponent implements OnInit {

    plats? : Plat[]; //un tableau de produits

  constructor(private platService: PlatService,
              public authService: AuthService) {
   //this.produits=[];
     }

  ngOnInit(): void {

    this.chargerPlats();
  }

  chargerPlats(){
    this.platService.listePlat().subscribe(plats => {
      console.log(plats);
      this.plats = plats;
      });
  }

supprimerPlat(p: Plat)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.platService.supprimerPlat(p.idPlat).subscribe(() => {
        console.log("plat supprimé");
        this.chargerPlats();     
      
});
}
 
 

}
