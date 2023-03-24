import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../patientservice.service';

export class Patient {
  constructor(
    public lastName : String,
    public firstName : String,
    public gender : String,
    public address : String,
    public phoneNumber : String,
    public birthDate : Date
  ){}
}


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})


export class PatientComponent implements OnInit {


constructor(private patientService:PatientserviceService){ }

  patientList: Patient[] = [];

ngOnInit(): void {
  this.chargePatient() 
}


chargePatient(): void {
  this.patientService.getPatient().subscribe(
    response => {
      this.patientList = response
    }
  ) 
}
}

