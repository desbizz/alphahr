import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ToastrService } from 'ngx-toastr';
import { IndividualService } from 'src/services/individual.service';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  may:any
  account:any={}
 constructor(private individual:AppComponent, private toastr: ToastrService, private individualService : IndividualService) { }

 ngOnInit() {
   this.may=this.individual.individual[0]
   if(this.may.account)
   this.account=this.may.account

   


  // this.setJob(this.may)
  
 }

 

 submit(){


   this.may.account=this.account

   this.individualService.UpdateStaff(this.may).subscribe(x => {
   });
   this.toastr.success(this.individual.individual.firstname, ' is Updated');
 }


}
