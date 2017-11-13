import { Component, OnInit, Inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

//import { AuthService } from '../../services/auth.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    title: string = 'Angular 5.x Universal & ASP.NET Core 2.0 advanced starter-kit';
    userId: string;

    // Use "constructor"s only for dependency injection
    constructor(
        public translate: TranslateService,
        //private authService: AuthService
    ) { }

    // Here you want to handle anything with @Input()'s @Output()'s
    // Data retrieval / etc - this is when the Component is "ready" and wired up
    ngOnInit() {
      //  this.authService.processAuthentication();

      //  if (this.authService.isAuthenticated) {
      //      this.userId = this.authService.userId;
      //  }

    }

    public setLanguage(lang) {
        this.translate.use(lang);
    }
}
