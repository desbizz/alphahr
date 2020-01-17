import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ToastrService } from 'ngx-toastr';
import { IndividualService } from 'src/services/individual.service';
import { ConfigurationsService } from 'src/services/configurations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.css']
})
export class ConfigFormComponent implements OnInit {

  may:any={}
  query:any={}
  config:any={};
  configList:any[]=[];
 constructor(private individual:AppComponent, private toastr: ToastrService, private configService : ConfigurationsService , route:ActivatedRoute, router: Router) { 
   route.params.subscribe(p => {
     this.query.name = p ['name'];
   })
 }

 ngOnInit() {
  

 this.configService.getConfig(this.query).subscribe(result => {this.may = result[0]; 
  if(this.may.values)
  this.configList=this.may.values;

  

})
  
  
   
  
 }

 onRemoveconfig(name){

 
  const newArray = this.configList.filter(function (item) {
    return  name != item }) 
     this.configList=newArray;
     this.addConfig()

} 

addConfig(){
  this.may.values=this.configList

  this.configService.UpdateConfig(this.may).subscribe(x => {
  });
  this.toastr.success("Successfull", 'Created');
}
 

submit(){
  this.configList.push(this.config.name)
   console.log(this.configList)

   this.addConfig()

 

this.config={}
}



}
