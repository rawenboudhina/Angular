import { Injectable } from '@angular/core';
import { Style } from '../model/style.model';
import { Plat } from '../model/plat.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { apiURL } from '../config';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class PlatService {
  
 
  apiURLCat: string = 'http://localhost:8080/plats/api/Style';

  plats! : Plat[]; //un tableau de produits
  //categories : Categorie[];
 

  constructor(private http : HttpClient,
              private authService : AuthService) { 
    
    /* this.categories = [
      {idCat : 1, nomCat : "PC"},
      {idCat : 2, nomCat : "Imprimante"}
    ]; */
  /*  this.produits = [{idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011"),
                      categorie : {idCat : 1, nomCat : "PC"} },
                     {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010"),
                    categorie :  {idCat : 2, nomCat : "Imprimante"}},
                     {idProduit : 3, nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020"), 
                     categorie : {idCat : 1, nomCat : "PC"}}
                    ];
                    */
    
  }

  listePlat(): Observable<Plat[]>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
   
     return this.http.get<Plat[]>(apiURL+"/all",{headers:httpHeaders});

    }

    ajouterPlat( prod: Plat):Observable<Plat>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
        return this.http.post<Plat>(apiURL+"/addPlat", prod, {headers:httpHeaders});
      }
     
      
   
  supprimerPlat(idPlat : number) {
       const url = `${apiURL}/delPlat/${idPlat}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
          return this.http.delete(url,  {headers:httpHeaders});
        }
      
   consulterPlat(id: number): Observable<Plat> {
          const url = `${apiURL}/getbyid/${id}`;
          console.log(url);
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
            return this.http.get<Plat>(url,{headers:httpHeaders});
          }
  
    updatePlat(prod :Plat) : Observable<Plat>    {
      
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
            return this.http.put<Plat>(apiURL+"/updatePlat", prod, {headers:httpHeaders});
          }
  

         
       /*  listeStyles():Observable<StyleWrapper>{
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return  this.http.get<StyleWrapper>(this.apiURLCat,{headers:httpHeaders});
        
            }  */
             listeStyles(): Observable<Style[]> {
              let jwt = this.authService.getToken();
            jwt = "Bearer "+jwt;
            let httpHeaders = new HttpHeaders({"Authorization":jwt}) 
              return this.http.get<Style[]>(this.apiURLCat,{headers:httpHeaders});
            } 

       rechercherParStyle(idStyle: number): Observable<Plat[]> {
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
          const url = `${apiURL}/platsStyle/${idStyle}`;
          return this.http.get<Plat[]>(url,{headers:httpHeaders});
         } 

  rechercherParNom(nom: string):Observable< Plat[]> {
    let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
    
    const url = `${apiURL}/platsByName/${nom}`;
    return this.http.get<Plat[]>(url,{headers:httpHeaders});
    }

    /* ajouterStyle( cat: Style):Observable<Style>{
      let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.post<Style>(this.apiURLCat, cat, {headers:httpHeaders});
      } */
      

 
}
