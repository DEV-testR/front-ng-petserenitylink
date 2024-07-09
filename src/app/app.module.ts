import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './petserenitylink/components/notfound/notfound.component';
import { ProductService } from './petserenitylink/service/product.service';
import { CountryService } from './petserenitylink/service/country.service';
import { CustomerService } from './petserenitylink/service/customer.service';
import { EventService } from './petserenitylink/service/event.service';
import { IconService } from './petserenitylink/service/icon.service';
import { NodeService } from './petserenitylink/service/node.service';
import { PhotoService } from './petserenitylink/service/photo.service';

@NgModule({
    declarations: [AppComponent, NotfoundComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
