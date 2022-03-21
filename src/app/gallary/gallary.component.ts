import { Component, OnInit, OnChanges,Input, SimpleChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnChanges {
  title='Recent photo'
   @Input() filterBy: string='all';
  visibleImages :any[] = [];

  constructor(private imageService: ImageService) {
    this.visibleImages= this.imageService.getImages();
   }
  ngOnChanges() {
    this.visibleImages=this.imageService.getImages();
  }

  ngOnInit(): void {
  }

}
