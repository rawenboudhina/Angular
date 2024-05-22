import { Component, OnInit } from '@angular/core';
import { Plat } from '../model/plat.model'; // Changed import
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from '../services/plat.service'; // Changed import
import { Style } from "../model/style.model";

@Component({
  selector: 'app-update-plat', // Changed selector
  templateUrl: './update-plat.component.html' // Changed templateUrl
})
export class UpdatePlatComponent implements OnInit { 

  currentPlat = new Plat(); 
  styles!: Style[]; 
  updatedStyleId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private platService: PlatService // Changed service
  ) { }

  ngOnInit(): void {
    this.platService.listeStyles().subscribe(styles => {
      this.styles = styles;
      console.log(styles);
    });
    this.platService.consulterPlat(this.activatedRoute.snapshot.params['id']).subscribe(plat => {
      this.currentPlat = plat;
      this.updatedStyleId = this.currentPlat.style.idStyle;
    });
  }

  updatePlat() { 
    this.currentPlat.style = this.styles.find(style => style.idStyle == this.updatedStyleId)!;
    this.platService.updatePlat(this.currentPlat).subscribe(prod => {
      this.router.navigate(['plats']);
    });
  }
}