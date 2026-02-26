import { Component, computed, inject } from '@angular/core';
import { ReviewService } from '../review.service';


@Component({
  selector: 'app-review-list',
  imports: [],
  templateUrl: './review-list.html',
  styleUrl: './review-list.css'
})
export class ReviewList {
  private reviewsService = inject(ReviewService)

  reviews = this.reviewsService.reviewResource.value
  isLoading = this.reviewsService.reviewResource.isLoading


}
