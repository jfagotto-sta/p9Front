import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientserviceService } from '../service/patientservice.service';
import { Router } from '@angular/router';

export class PatientWithoutNote {
  constructor(
    public id? : number,
    public lastName? : String,
    public firstName? : String,
    public gender? : String,
    public address? : String,
    public phoneNumber? : String,
    public birthDate? : Date,
  ){}
}

@Component({
  selector: 'app-patient-creator',
  templateUrl: './patient-creator.component.html',
  styleUrls: ['./patient-creator.component.css']
})
export class PatientCreatorComponent implements OnInit {
  registrationForm : FormGroup

  constructor(
     private patientService:PatientserviceService,
    private formBuilder : FormBuilder, private router: Router) {
      this.registrationForm=this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        address: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        birthDate: ['', Validators.required]
      })
     }
    idPatient : Number
    patientLoaded : PatientWithoutNote;

  ngOnInit(): void {
    this.patientLoaded = new PatientWithoutNote();
    this.idPatient = Number(this.router.url.split("id=")[1]);
    console.log("id : "+this.patientLoaded.id);
    if(!Number.isNaN(this.idPatient)) {
      console.log(this.idPatient);
      this.patientService.getPatientById(this.idPatient).subscribe(response => {
        this.patientLoaded = response;
        console.log("id : "+this.patientLoaded.id);

        this.registrationForm.setValue({firstName: this.patientLoaded.firstName,
          lastName : this.patientLoaded.lastName,
          gender: this.patientLoaded.gender,
          address: this.patientLoaded.address,
          phoneNumber: this.patientLoaded.phoneNumber,
          birthDate: this.patientLoaded.birthDate});

      })

    }
  }
  newUser(patient : PatientWithoutNote) : void{
    if(this.patientLoaded.id == undefined) {
      console.log("creation");
      this.patientService.addPatient(patient).subscribe();
    } else {
      console.log("maj");
      patient.id = this.patientLoaded.id;
      console.log(patient.id);
      console.log(patient.phoneNumber);
      console.log(patient.lastName);
      console.log(patient.firstName);
      this.patientService.updatePatient(patient).subscribe();
    }
  }

  updatePatient(patient : PatientWithoutNote) : void{
    this.patientService.updatePatient(patient).subscribe();
  }


}
