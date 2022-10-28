import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'member-management',
    pathMatch: 'full',
  },
  {
    path: 'member-management',
    loadChildren: () =>
      import('./member-management').then((m) => m.MemberManagementModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
