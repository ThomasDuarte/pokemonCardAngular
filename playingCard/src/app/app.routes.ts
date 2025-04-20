import { Routes } from '@angular/router';
import { MonsterListComponent } from './pages/monster-list/monster-list.component';
import { MonsterComponent } from './pages/monster/monster.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
//Défini les différents chemins d'accès
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    // Necessaire quand on utilise un redirectTo
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MonsterListComponent,
  },
  {
    path: 'monster',
    children: [
      { path: '', component: MonsterComponent },
      {
        // Définit l'url monter/:id
        path: ':id',
        component: MonsterComponent,
      },
    ],
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
