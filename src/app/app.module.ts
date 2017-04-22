import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ListaPlaylistComponent } from './lista-playlist/lista-playlist.component';
import { SessionService } from './session.service';
import { PlaylistService } from './playlist.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    PerfilComponent,
    PlaylistComponent,
    ListaPlaylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([ ])
  ],
  providers: [
    SessionService,
    PlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
