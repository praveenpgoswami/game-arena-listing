import { Component, Input } from "@angular/core";

@Component({
  selector: "card",
  template: `
    <div class="card mt-2">
      <div class="card-header">
        {{ game.platform }} -
        <small class="font-italic ">{{ game.genre }}</small>
        <span class="float-right badge badge-warning text-white">
        <i class="fa fa-star"></i> {{ game.score }}</span>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ game.title }}</h5>
        <small class="font-italic">{{ game.release_year }}</small>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() game: any;
}
