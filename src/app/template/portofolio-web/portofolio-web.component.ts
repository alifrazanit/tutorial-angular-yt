import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/portofolio-web/header/header.component';
import { BannerComponent } from '../../components/portofolio-web/banner/banner.component';
import { HeaderMenuComponent } from '../../components/portofolio-web/header-menu/header-menu.component';
@Component({
  selector: 'app-portofolio-web',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent
  ],
  templateUrl: './portofolio-web.component.html',
  styleUrl: './portofolio-web.component.css'
})
export class PortofolioWebComponent {

}
