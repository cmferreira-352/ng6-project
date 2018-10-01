import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(
      param => this.user$ = param.id
    )
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data
    )
  }

}
