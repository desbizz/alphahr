import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { IndividualService } from 'src/services/individual.service';
import { ToastrService } from 'ngx-toastr';
import {  Job, Individual } from 'src/models/individual';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  may:any={} ;
  job:any={};
  constructor(private individual:AppComponent, private toastr: ToastrService, private individualService : IndividualService) { }

  ngOnInit() {
    this.may=this.individual.individual[0]
    if(this.may.job)
    this.job=this.may.job

    

 
   // this.setJob(this.may)
   
  }

  

  submit(){

    this.may.job=this.job
   
    this.individualService.UpdateStaff(this.may).subscribe(x => {
    });
    this.toastr.success(this.may.firstname, ' is Updated');
  }

    
  }


