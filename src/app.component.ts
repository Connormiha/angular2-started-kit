import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<h1>My First {{foo}} Angular 2 App</h1>'
})
export class AppComponent {
    foo = "bar"
}
