import {
    Component,
    OnInit,
    OnDestroy,
    Renderer2,
    HostBinding
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '@services/app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    @HostBinding('class') class = 'login-box';
    public loginForm: FormGroup;
    public isAuthLoading = false;

    constructor(
        private renderer: Renderer2,
        private toastr: ToastrService,
        private appService: AppService,
        private router: Router
    ) { }

    ngOnInit() {
        this.renderer.addClass(
            document.querySelector('app-root'),
            'login-page'
        );
        this.loginForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    loginByAuth() {
        if (this.loginForm.value.email == "admin" && this.loginForm.value.password == "admin") {
            localStorage.setItem('token', "Eam122q1qeeejejerj4343j");
            localStorage.setItem('email', "admin");
            this.router.navigate(['/']);
        }
        else {
            this.toastr.error('Email and password is invalid!');
        }
    }

    ngOnDestroy() {
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'login-page'
        );
    }
}
