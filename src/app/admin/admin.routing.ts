import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // default route of the module
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)


/**
 * export const RouteConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: HomePage },
            { path: 'test/:id', component: Testinfo},
            { path: 'test2/:id', component: Testinfo1},
            { path: 'test3/:id', component: Testinfo2}
        ]
    }
];
 */