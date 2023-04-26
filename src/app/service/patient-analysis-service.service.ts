import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PatientStatut } from '../patient/patient.component';


@Injectable({
  providedIn: 'root'
})
export class PatientAnalysisServiceService {

  constructor(private http:HttpClient) { }

  getStatusForAPatient(idPatient : Number){
    return this.http.get<PatientStatut>(`http://localhost:8091/patient/status/${idPatient}`);
 }

}
