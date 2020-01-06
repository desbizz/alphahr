import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Job, Individual } from 'src/models/individual';



@Injectable({
  providedIn: 'root'
})
export class IndividualService {
  
  constructor(private http: HttpClient) { }

createStaff(individual) {


return this.http.post('/individual', individual );

}
UpdateStaff(update) {
console.log(update)

  return this.http.patch('/individual/'+ update._id, update );
  
  }
getStaff(filter) {


  return this.http.get('/individual' + '?' + this.toQueryString(filter) );
  
  }

toQueryString(obj) {
  var parts: any = [];
  for (var property in obj) {
      var value = obj[property];
      if (value != null && value != undefined && value != 'NaN' && value != null)
          parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
  }

  return parts.join('&');

}

}
