import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Patient } from '../patient/patient.component';
import { PatientWithoutNote } from '../patient-creator/patient-creator.component';
@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  private apiUrl = 'http://localhost:8089/patient/list'

  constructor(private http:HttpClient) { }

  getPatient(){
    return this.http.get<Patient[]>(this.apiUrl);
  }

  getPatientById(idPatient : Number){
    return this.http.get<PatientWithoutNote>(`http://localhost:8089/patient/${idPatient}`);
  }

  addPatient(p : PatientWithoutNote){
 const headers = {'content-type' : 'application/json'}
    return this.http.post(`http://localhost:8089/patient/add`, p, {'headers':headers});
  }

  updatePatient(p : PatientWithoutNote){
  const headers = {'content-type' : 'application/json'}
    return this.http.put(`http://localhost:8089/patient/update`, p, {'headers':headers});
  }

  deletePatient(idPatient : number | undefined ){
    return this.http.delete(`http://localhost:8089/patient/delete/${idPatient}`);
  }

  findPatientStatus(idPatient : number | undefined){
    return this.http.delete(`http://localhost:8089/patient/status/${idPatient}`);
  }
}
