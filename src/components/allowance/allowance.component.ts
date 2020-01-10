import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ToastrService } from 'ngx-toastr';
import { IndividualService } from 'src/services/individual.service';
import { Allowances } from 'src/models/individual';

@Component({
  selector: 'app-allowance',
  templateUrl: './allowance.component.html',
  styleUrls: ['./allowance.component.css']
})
export class AllowanceComponent implements OnInit {
  @Output() allowanceCreated = new EventEmitter<{name: string, amount: string}>()

  may:any
  allowance:Allowances[]=[]

  constructor(private individual:AppComponent, private toastr: ToastrService, private individualService : IndividualService) { }

  ngOnInit() {
    this.may=this.individual.individual[0]
    if(this.may.allowances)
    this.allowance=this.may.allowances
   
  }

  onAddAllowance(name: HTMLInputElement, amount:HTMLInputElement){

 

    this.allowance.push({name:name.value, amount:amount.value})
    console.log(this.allowance)
    this.submit()


  }

  onRemoveAllowance(name){
   
   let valueToRemove  = [name]

   const newArray = this.allowance.filter(function (item) {
     return  name != item.name

     
     
   })
   console.log (newArray)
  this.allowance=newArray;
  this.submit()
  }

  

  submit(){
 

    this.may.allowances=this.allowance
 
    this.individualService.UpdateStaff(this.may).subscribe(x => {
    });
    this.toastr.success(this.may.firstname, ' is Updated');
  }


}
