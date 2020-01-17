import { Component, OnInit } from '@angular/core';
import { IndividualService } from 'src/services/individual.service';
import { ToastrService } from 'ngx-toastr';
import { Individual } from 'src/models/individual';
import { ConfigurationsService } from 'src/services/configurations.service';

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
  query:any = {};
  may: any =[];
  title: any = {};

  constructor(private individualService: IndividualService, private configService: ConfigurationsService,  private toastr: ToastrService) { }
  
  ngOnInit() {
    this.configService.getConfig(this.query).subscribe(result => {this.may = result; 
     console.log(this.may)
     const newArray = this.may.filter(function (item) {
      return  "Title" == item.name }) 
       this.title=newArray;
       console.log(this.title)
       console.log(newArray)
   
  })
}

  submit() {

  

  

    this.individualService.createStaff(this.individual)  .subscribe(x => {
    });
    this.toastr.success(this.individual.firstname, ' is Added');
  }


}
