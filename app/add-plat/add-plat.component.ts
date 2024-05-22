/* import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Style } from '../model/style.model';
import { Plat } from '../model/plat.model';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-plat.component.html'
})
export class AddPlatComponent implements OnInit {

  newPlat = new Plat();
  styles! : Style[];
  newIdStyle! : number;
  newStyle! : Style;
  
  constructor(private platService: PlatService,
              private router : Router) { }

  ngOnInit(): void {

    this.platService.listeStyles().
          subscribe(styles => {this.styles =styles ._embedded.styles;
            console.log(styles);
        });
 
  }

 
  addPlat(){
    this.newPlat.style = this.styles.find(cat => cat.idStyle == this.newIdStyle)!;
    this.platService.ajouterPlat(this.newPlat)
                      .subscribe(prod => {
                      console.log(prod);
                      this.router.navigate(['plats']);
                      }); 
    }




}
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Style } from '../model/style.model';
import { Plat } from '../model/plat.model';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-plat.component.html',
  styles: [] 

})
export class AddPlatComponent implements OnInit {

  newPlat = new Plat();
  styles!: Style[] ;
  newIdStyle!: number;
  newStyle!:Style;
  
  constructor(private platService: PlatService, private router: Router) {}

  /* ngOnInit(): void {
    this.platService.listeStyles().subscribe(styles => {
      this.styles = styles;
    });
  }*/
 
  ngOnInit(): void {
    this.platService.listeStyles().subscribe(styles => {
      this.styles = styles;
      console.log(this.styles); // Vérifiez que les styles sont bien chargés
    });
  }
  
  addPlat(): void {
    this.newPlat.style = this.styles.find(style => style.idStyle == this.newIdStyle)!;
    this.platService.ajouterPlat(this.newPlat).subscribe(plat=>{

    console.log(plat);
      this.router.navigate(['plats']);
    });
  }
/*   addPlat(): void {
    this.newPlat.style = this.styles.find(style => style.idStyle === this.newIdStyle)!;
    this.platService.ajouterPlat(this.newPlat).subscribe(() => {
      this.router.navigate(['plats']);
    });
  
} */
}