import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    { path: '', component: StudentComponent }, // default route of the module
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)