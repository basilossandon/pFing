import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Idea} from '../idea';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  idea = new Idea("test","psw", 0);

  constructor(private http: HttpClient) { 
  }
  ngOnInit() {
  }
  submit(){
    console.log(this.idea.title);
    this.http.post("http://localhost:1313/ideas",this.idea)
    .subscribe(response => {
      console.log(response);
    });
   }
   nameChange(e){
    console.log("change");
    console.log(e.target.value);
  }
}
