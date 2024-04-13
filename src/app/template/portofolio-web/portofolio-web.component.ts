import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '@components/portofolio-web/header/header.component';
import { BannerComponent } from '@components/portofolio-web/banner/banner.component';
import { HeaderMenuComponent } from '@components/portofolio-web/header-menu/header-menu.component';
import { AboutUsComponent } from '@components/portofolio-web/about-us/about-us.component';
import { NewsComponent } from '@components/portofolio-web/news/news.component';
import { AchievementComponent } from '@components/portofolio-web/achievement/achievement.component';
import {  TestimonialComponent} from '@components/portofolio-web/testimonial/testimonial.component';


@Component({
  selector: 'app-portofolio-web',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    HeaderMenuComponent,
    AboutUsComponent,
    NewsComponent,
    AchievementComponent,
    TestimonialComponent
  ],
  templateUrl: './portofolio-web.component.html',
  styleUrl: './portofolio-web.component.css'
})
export class PortofolioWebComponent implements OnInit {

  bannerEl: any;
  headerEl: any;

  bannerIsScroll: boolean = false;

  constructor(
    private el: ElementRef
  ){ }

  ngOnInit(): void {
    this.headerEl = this.el.nativeElement.querySelector('#headerId').offsetTop;
    this.bannerEl = this.el.nativeElement.querySelector('#bannerId').offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(){
    this.bannerIsScroll = window.scrollY > this.headerEl;
  }
}
