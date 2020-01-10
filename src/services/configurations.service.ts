import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {

  constructor(private http: HttpClient) { }

  createConfig(config) {
  
  
  return this.http.post('/configuration', config );
  
  }
  UpdateConfig(config) {
  
  
    return this.http.get('/configuration/'+ config._id, config );
    
    }

    getConfig(filter) {
     
        return this.http.get('/configuration' + '?' + this.toQueryString(filter) );
        
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
