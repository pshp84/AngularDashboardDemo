import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';
import {LoginComponent} from '@modules/login/login.component';
import { UserListComponent } from '@pages/user-list/user-list.component';
import {AuthGuard} from '@guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: UserListComponent,
                canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
