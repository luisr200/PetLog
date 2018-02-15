import { Component, OnInit } from "@angular/core";
import { PetService } from './pet.service'
import { Pet } from './pet.model'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Component({
    selector: 'app-pets',
    templateUrl: 'pets.component.html'
})

export class PetsComponent implements OnInit{
    pets: Pet[]

    constructor(private petService: PetService){}

    ngOnInit(): void{
        this.getPets()
      }
    getPets(){
        this.petService.getPets().subscribe(res => this.pets = res);
    }


}