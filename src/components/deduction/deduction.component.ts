import { Component, OnInit } from '@angular/core';
import { Deductions } from 'src/models/individual';
import { AppComponent } from 'src/app/app.component';
import { ToastrService } from 'ngx-toastr';
import { IndividualService } from 'src/services/individual.service';

@Component({
  selector: 'app-deduction',
  templateUrl: './deduction.component.html',
  styleUrls: ['./deduction.component.css']
})
export class DeductionComponent implements OnInit {

  may:any
  deduction:Deductions[]=[]

  constructor(private individual:AppComponent, private toastr: ToastrService, private individualService : IndividualService) { }

  ngOnInit() {
    this.may=this.individual.individual[0]
    if(this.may.deductions)
    this.deduction=this.may.deductions
   
  }

  onAddAllowance(name: HTMLInputElement, amount:HTMLInputElement){

 

    this.deduction.push({name:name.value, amount:amount.value})

    this.submit()


  }

  onRemoveAllowance(name){
   
   let valueToRemove  = [name]

   const newArray = this.deduction.filter(function (item) {
     return  name != item.name

     
     
   })
   console.log (newArray)
  this.deduction=newArray;
  this.submit()
  }

  

  submit(){
 

    this.may.deductions=this.deduction
 
    this.individualService.UpdateStaff(this.may).subscribe(x => {
    });
    this.toastr.success(this.may.firstname, ' is Updated');
  }


}
