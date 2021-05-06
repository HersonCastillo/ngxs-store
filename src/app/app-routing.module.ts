import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'board',
    loadChildren: () =>
      import('./features/board/board.module').then((m) => m.BoardModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'tags',
    loadChildren: () =>
      import('./features/tags/tags.module').then((m) => m.TagsModule),
  },
  {
    path: '**',
    redirectTo: 'board',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
