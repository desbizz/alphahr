import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ToastrService } from 'ngx-toastr';
import { IndividualService } from 'src/services/individual.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
   may:any
   account:Account[]=[]
  constructor(private individual:AppComponent, private toastr: ToastrService, private individualService : IndividualService) { }

  ngOnInit() {
    this.may=this.individual.individual[0]
    if(this.may.account)
    this.account=this.may.account
  }

  
  submit(){ 

    this.may.account=this.account
 
    this.individualService.UpdateStaff(this.may).subscribe(x => {
    });
    this.toastr.success(this.may.firstname, ' is Updated');
  }


}
