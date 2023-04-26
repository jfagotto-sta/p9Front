import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../patient/patient.component';
import { NoteCreationDTO, NoteUpdateDTO } from '../note/note.component';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private http:HttpClient) { }

  getNote(idNote : number){
    return this.http.get<Note>(`http://localhost:8091/note/${idNote}`);}

  getNotesForApatient(idPatient : Number){
    return this.http.get<Note[]>(`http://localhost:8091/notes/patient/${idPatient}`);
 }
  

  addNewNote(note : NoteCreationDTO){
    const headers = {'content-type' : 'application/json'}
    return this.http.post(`http://localhost:8091/note`, note, {'headers':headers});
  }

  updateNote(n : NoteUpdateDTO){
    const headers = {'content-type' : 'application/json'}
    return this.http.put(`http://localhost:8091/note/update`, n, {'headers':headers});
  } 

  deleteNote(idNote : Number ){
    return this.http.delete(`http://localhost:8091/note/delete/${idNote}`);
  }
}
