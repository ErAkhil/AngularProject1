import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  submitted=false;
  constructor(private fb: FormBuilder) { }
  myform = new FormGroup({
    designation: new FormControl('', Validators.required),
    companyName: new FormControl('', Validators.required),
    website: new FormControl(''),
    city: new FormControl(),
    skills: new FormControl(''),
    gitUserName: new FormControl(''),
    bio: new FormControl('')
  });
  ngOnInit(): void {

  }
   get val()
   {
     return this.myform.controls ;
   }

  // tslint:disable-next-line: typedef
  submit(){
         this.submitted= true;
         if (this.myform.invalid)
         {
              return;
         }
         else {

        alert('sucess!!' + JSON.stringify(this.myform.value));

         }
  }
  // tslint:disable-next-line: typedef
  onReset(){
    this.submitted = false;
    this.myform.reset();
  }
}
