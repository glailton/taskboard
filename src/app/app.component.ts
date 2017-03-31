import { Component } from '@angular/core';

@Component({
    selector: 'meu-app',
    template: `
      <nav>
        <div class="nav-wrapper">
          <a class="brand-logo black-text lighten-2">{{titulo}}</a>          
        </div>
      </nav>
      <div class="container">
        <estoria></estoria>
      </div>`,
})
export class AppComponent {
  titulo: string = "TaskBoard";
}