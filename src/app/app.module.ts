import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './Layout/nav.component';
import { FooterComponent } from './Layout/footer.component';
import { PetsComponent } from './Pet/pets.component';
import { HomeComponent } from './Home/home.component';
import { PetService } from './Pet/pet.service'

const appRoutes: Routes = [
  {
    path: 'pets',
    component: PetsComponent,
    data: { title: 'Pets Component' }
  },
  { path: '',
  component: HomeComponent,
  data: { title: 'Home Component' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PetsComponent,
    HomeComponent
    ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
