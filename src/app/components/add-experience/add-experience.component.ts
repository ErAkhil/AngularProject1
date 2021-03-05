import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

submit(data: any)
{
  //console.log(data);
  alert('success!!' + JSON.stringify(data));
}

}
