import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor() {
    }

    // Mock function to check login status. Replace with actual implementation.
    isLoggedIn(): boolean {
        // Implement your logic to check login status
        return !!localStorage.getItem('token');
    }
}
