import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {}
    get(url: string): Observable<any> {
        return this.http.get(url)
      }
    
      post(url: string, model: any): Observable<any> {
        const body = JSON.stringify(model);
        let httpHeaders = new HttpHeaders()
          .set('Content-Type', 'application/json');
    
        return this.http.post(url, body, {
          headers: httpHeaders
        });
      }
    
    
      put(url: string, id: number, model: any):Observable<any> {
        const body = JSON.stringify(model)
        let httpheader = new HttpHeaders().set('Content-Type', 'applications/json');
        return this.http.put(url + id, body)
      }
    
      delete(url:string,id:number):Observable<any>{
      
      return  this.http.delete(url+id)
      }
}
