import { extractStyleUrls } from '@angular/compiler/src/style_url_resolver';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrs:'./students.component.html',
  StyleUrls:['./students.component.css']
})
export class StudentsComponent implements OnInit{

constructor(){}
ngOnInit(){
  
}

}