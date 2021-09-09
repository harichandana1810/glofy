import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('data') data:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  route(data:any){
    this.router.navigateByUrl(`/details/${data.id}`, { state: { item: data }});
  }
}
