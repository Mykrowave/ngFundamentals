import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  @Input() numberOfVotes: number;
  @Input() hasVoted: boolean;
  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  containerClick() {
    this.vote.emit({});
  }

}
