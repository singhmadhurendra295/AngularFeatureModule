import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    { path: '', component: StudentComponent }, // default route of the module
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