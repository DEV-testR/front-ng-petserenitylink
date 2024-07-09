import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {Router} from "@angular/router";
import {AuthService} from "./petserenitylink/service/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(
        private primengConfig: PrimeNGConfig,
        private router: Router,
        private authService: AuthService
    ) {
    }

    async ngOnInit() {
        this.primengConfig.ripple = true;
        if (!this.authService.isLoggedIn()) {
            await this.router.navigate(['/auth/login']);
        }
    }
}
