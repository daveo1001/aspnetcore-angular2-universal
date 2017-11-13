import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})

export class NavMenuComponent {
    collapse: string = 'collapse';

    // constructor(private authService: AuthService) {}

    collapseNavbar(): void {
        if (this.collapse.length > 1) {
            this.collapse = '';
        } else {
            this.collapse = 'collapse';
        }
    }

    collapseMenu() {
        this.collapse = 'collapse';
    }

    login() {
        // this.authService.login();
    }
}
