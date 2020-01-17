import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ToastrService } from 'ngx-toastr';
import { ConfigurationsService } from 'src/services/configurations.service';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  may:any
  query:any
  config:any={};
  configList:any=[];
 constructor(private toastr: ToastrService, private configService : ConfigurationsService) { }

 ngOnInit() {
 this.configService.getConfig(this.query).subscribe(result => {this.configList = result;
   console.log(this.configList);
})

 }

 onRemoveconfig(id,name){

  this.configService.removeConfig(id).subscribe(x => {
    this.toastr.success("Deleted"); 
  });

  const newArray = this.configList.filter(function (item) {
    return  name != item.name }) 
     this.configList=newArray;

} 

 submit(){
  this.configList.push(this.config)
   console.log(this.config)

  this.configService.createConfig(this.config).subscribe(x => {
  });
  this.toastr.success("Successfull", 'Created');

this.config={}
}






}
