import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient/patient.component';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  private apiUrl = 'http://localhost:8089/patient/list'

  constructor(private http:HttpClient) { }

  getPatient(){
    return this.http.get<Patient[]>(this.apiUrl);
  }
}
