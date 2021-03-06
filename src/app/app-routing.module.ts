import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './services/dataResolver/data-resolver.service';
import { LoaderService } from './services/loader/loader.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    resolve: { loader: LoaderService },
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'music/:id',
    resolve: { data: DataResolverService },
    loadChildren: './pages/music/music.module#MusicPageModule'
  },
  {
    path: 'slide/:id',
    resolve: { data: DataResolverService },
    loadChildren: './pages/slide/slide.module#SlidePageModule'
  },
  {
    path: 'lists',
    loadChildren: './pages/lists/lists.module#ListsPageModule'
  },
  {
    path: 'select',
    loadChildren: './pages/select/select.module#SelectPageModule'
  },
  { path: 'modal-music',
    loadChildren: './pages/modal-music/modal-music.module#ModalMusicPageModule'
  },
  {
    path: 'list/:key',
    resolve: { data: DataResolverService },
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  {
    path: 'list/:id',
    resolve: { data: DataResolverService },
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  {
    path: 'favorites',
    loadChildren: './pages/favorites/favorites.module#FavoritesPageModule'
  },
  {
    path: 'random',
    loadChildren: './pages/modal-random/random.module#RandomPageModule'
  },
  {
    path: 'settings',
    loadChildren: './pages/settings/settings.module#SettingsPageModule'
  },
  {
    path: 'contact',
    loadChildren: './pages/contact/contact.module#ContactPageModule'
  },
  {
    path: 'about',
    loadChildren: './pages/about/about.module#AboutPageModule'
  },
  {
    path: 'modal-backup',
    loadChildren: './pages/modal-backup/modal-backup.module#ModalBackupPageModule'
  },
  {
    path: 'backups',
    loadChildren: './pages/backups/backups.module#BackupsPageModule'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
