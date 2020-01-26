import { NgModule } from "@angular/core";
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        BreadcrumsComponent,
        HeaderComponent,
        NotpagefoundComponent,
        SidebarComponent
    ],
    exports: [
        BreadcrumsComponent,
        HeaderComponent,
        NotpagefoundComponent,
        SidebarComponent
    ],
    imports : [
        RouterModule,
        CommonModule
    ]
})
export class SharedModule {}