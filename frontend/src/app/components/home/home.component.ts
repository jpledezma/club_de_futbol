import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-home',
  imports: [CarouselModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit{
  
  images: string[] = [];

  ngOnInit(): void {
    this.images = [
      "/img/children.jpg",
      "/img/children.jpg",
    ]
  }
}
