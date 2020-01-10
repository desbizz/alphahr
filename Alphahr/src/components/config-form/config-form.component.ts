import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ToastrService } from 'ngx-toastr';
import { IndividualService } from 'src/services/individual.service';
import { ConfigurationsService } from 'src/services/configurations.service';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.css']
})
export class ConfigFormComponent implements OnInit {

  may:any
  query:any
  config:any={};
 constructor(private individual:AppComponent, private toastr: ToastrService, private configService : ConfigurationsService) { }

 ngOnInit() {
 // this.configService.getConfig(this.query).subscribe(result => {this.config = result;})
 
   
   


  // this.setJob(this.may)
  
 }

 

 submit(){


  if(this.config._id){

   this.configService.UpdateConfig(this.config).subscribe(x => {
   });
   this.toastr.success("Successfull", 'Updated');

  } else {
    console.log(this.config)
    this.configService.createConfig(this.config).subscribe(x => {
    });
    this.toastr.success("Successfull", 'Created');

  }
 }


}
