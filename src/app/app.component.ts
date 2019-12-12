import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = new Date().toISOString().slice(0,10);
}

