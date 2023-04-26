import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../service/patientservice.service';
import { Router } from '@angular/router';
import { PatientAnalysisServiceService } from '../service/patient-analysis-service.service';

export class Patient {
  constructor(
    public id? : number,
    public lastName? : String,
    public firstName? : String,
    public birthDate? : Date,
    public gender? : String,
    public phoneNumber? : String,
    public address? : String,
    public notes? : Note[],
    public patientStatus? : String
  ){}
}

export class Note {
  constructor(
    public idNote : Number,
    public messageDate : Date,
    public idPatient : Number,
    public message : string
  ){}
}

export class PatientStatut{
  constructor(
    public hasNoRisk : Boolean,
    public isBorderLine : Boolean,
    public isInDanger : Boolean,
    public isSubjectToEarlyOnSetRisk : Boolean
  ) {}
}



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})


export class PatientComponent implements OnInit {


constructor(private patientService:PatientserviceService, private router:Router,private patientStatutService:PatientAnalysisServiceService){ }

  patientList: Patient[];

ngOnInit(): void {
  this.chargePatient(); 
}

chargePatient(): void {
  this.patientService.getPatient().subscribe(
    response => {
      this.patientList = response
    }
  ) 
}

ajoutNote(p : Patient) : void {
    this.router.navigateByUrl('/NewNote?id='+p.id);
}

deletePatient(id : number | undefined) : void {
  this.patientService.deletePatient(id).subscribe(() => {
    console.log('Item supprimé');
  });
}

goToPatientCreationPage() {
  this.router.navigateByUrl('/creator');
}

goToPatientCreationPageEdition(p : Patient) {
  this.router.navigate(['/creator'],{queryParams: { id: p.id }});
}

chargePatientStatus(id : number ) {
  this.patientStatutService.getStatusForAPatient(id).subscribe(() => {
    console.log('Staut mis à jour');
  });
}

updatePatient(p : Patient){
  this.router.navigateByUrl('/updator');
}






}

