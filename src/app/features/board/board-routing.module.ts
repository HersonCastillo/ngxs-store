import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardManagementComponent } from './components/board-management/board-management.component';

const routes: Routes = [
  {
    path: '',
    component: BoardManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
