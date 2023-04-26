import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientCreatorComponent } from './patient-creator/patient-creator.component'; 
import { PatientComponent } from './patient/patient.component';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
  { path : '', component : PatientComponent},
  { path: 'creator', component: PatientCreatorComponent },
  { path: 'NewNote', component: NoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }