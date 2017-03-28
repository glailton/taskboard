import { Component } from '@angular/core';

@Component({
    selector: 'meu-app',
    template: `
      <nav>
        <div class="nav-wrapper">
          <a class="brand-logo center">{{titulo}}</a>          
        </div>
      </nav>
      <div class="container">
        <estoria></estoria>
      </div>`,
})
export class AppComponent {
  titulo: string = "TaskBoard";
}