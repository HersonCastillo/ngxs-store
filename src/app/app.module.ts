import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './features/shared/shared.module';

const imports = [
  NgxsModule.forRoot([], {
    developmentMode: !environment.production,
  }),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsLoggerPluginModule.forRoot({
    disabled: environment.production,
  }),
  NgxsStoragePluginModule.forRoot({
    key: 'store',
  }),
  SharedModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ...imports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
