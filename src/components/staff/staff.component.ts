import { Component, OnInit } from '@angular/core';
import { IndividualService } from 'src/services/individual.service';
import { ToastrService } from 'ngx-toastr';
import { Individual } from 'src/models/individual';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  individual:Individual ={
    _id:"",
    title: "",
    surname: "",
    firstname: "",
    othernames: "",
    staffnumber: "",
    recordnumber: "",
    email: ""  
  } ;

  constructor(private individualService: IndividualService,   private toastr: ToastrService) { }
  
  ngOnInit() {
   
   
  }

  submit() {

  

  

    this.individualService.createStaff(this.individual)  .subscribe(x => {
    });
    this.toastr.success(this.individual.firstname, ' is Added');
  }


}
