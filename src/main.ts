import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { EstoriaComponent } from './app/estoria.component';
import {FormsModule} from '@angular/forms';
import {EstoriaService} from './app/estoria.service';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ AppComponent, EstoriaComponent ],
    bootstrap: [ AppComponent ],
    providers: [EstoriaService]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);