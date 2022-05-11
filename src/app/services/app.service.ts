import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private router: Router, private toastr: ToastrService, private http: HttpClient) {}

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
