import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';

import { HttpClientModule } from '@angular/common/http';
import { PatientCreatorComponent } from './patient-creator/patient-creator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NoteComponent } from './note/note.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientCreatorComponent,
    NoteComponent
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
