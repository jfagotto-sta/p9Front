import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../service/note-service.service';
import { Router } from '@angular/router';
import { Note } from '../patient/patient.component';


export class NoteCreationDTO {
  constructor(
    public idPatient : Number,
    public message : string
  ){}
}

export class NoteUpdateDTO {
  constructor(
    public idNote : Number,
    public message : string
  ){}
}


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})


export class NoteComponent implements OnInit {

  MODE = "creation"
  maChaine = "";
  noteToAdd : NoteCreationDTO
 noteToShow : Note[]
 idNote : Number;
  idPatient : Number

  constructor(private noteService:NoteServiceService, private router: Router) {}

  ngOnInit(): void {
      this.idNote = NaN;
      this.idPatient = Number(this.router.url.split("id=")[1]);
      this.chargeNote();
  }

newNote(){
  //maj
  if(!Number.isNaN(this.idNote)) {
    this.noteService.updateNote(new NoteUpdateDTO(this.idNote, this.maChaine)).subscribe(
      response => {
        this.chargeNote();
        this.router.navigateByUrl('/NewNote?id='+this.idPatient);
      }
    ) 
  }
    else {
    this.noteToAdd = new NoteCreationDTO(this.idPatient,this.maChaine);
    this.noteService.addNewNote(this.noteToAdd).subscribe(
      response => {
        this.chargeNote();
        this.router.navigateByUrl('/NewNote?id='+this.idPatient);
      }
    ) 
  }
}

modeNew() : void {
  this.MODE = "creation"
  this.idNote = NaN;
  this.maChaine = "";
}


chargeNote(): void {
  this.noteService.getNotesForApatient(this.idPatient).subscribe(
    response => {
      this.noteToShow = response
    }
  ) 
}

editNote(n : Note) : void {
  this.MODE = "update"
  this.maChaine = n.message;
  this.idNote = n.idNote;
  //this.noteService.updateNote(n).subscribe(response => {
  //  console.log('Item mit à jour');
  //}
  //)
}

deleteNote(n : Note) :  void {
  this.noteService.deleteNote(n.idNote).subscribe(() => {
    console.log('Item supprimé');
  });
}

}

