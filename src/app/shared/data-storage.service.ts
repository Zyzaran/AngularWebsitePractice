import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService{
    private databaseUrl: string = '';

    constructor(private http:HttpClient, private recipeService: RecipeService){
    }


    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.databaseUrl = this.databaseUrl+'/recipes.json';
        this.http.put(this.databaseUrl, recipes).subscribe( response => {
            console.log(response);
        });
    }

    fetchRecipes(){
        this.databaseUrl = this.databaseUrl+'/recipes.json';
        this.http.get(this.databaseUrl).subscribe(recipes =>{
            console.log(recipes);
        });
    }



}