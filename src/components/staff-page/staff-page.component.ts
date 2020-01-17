import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { IndividualService } from 'src/services/individual.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {
  query :any ={};
  may: any={};

  constructor(private route: ActivatedRoute,private individual:AppComponent, private individualService: IndividualService) {
    route.params.subscribe(p => {
      //this.job.id = +p['id'];
  })
   }

  ngOnInit() {
    this.query._id="5e112e6e3986d872ecf6ccb0";

    this.individualService.getStaff(this.query).subscribe(result => {this.individual.individual = result;
      this.may=this.individual.individual ;

    
    
    });
 

  }

}
