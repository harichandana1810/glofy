import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetService } from 'src/app/services/get.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userData:any;
  constructor(private get: GetService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.get.getIndividual(this.route.snapshot.params.id).subscribe((Response:any)=>{
      this.userData=Response.data;
    });
  }

}
