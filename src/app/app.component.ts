import { NgIf, NgIfContext } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule,FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'templatedrivenvalidation25';
userdetails:any;
  addDetails(val:NgForm){
console.log(val.name);
this.userdetails=val;
  }
  // template driven wale case me humare validation .html wale file i.e template me jake lagte hai and reactive wale case me .ts me lagte hai
}
