import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/services/get.service';

interface user{
  data:any;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  usersData:user[]=[];
  loading:boolean=true;
  constructor(private get:GetService) { }

  ngOnInit(): void {
    this.get.getData().subscribe((result:any)=>{
      this.usersData=result.data;
      this.loading=false;
      console.log(this.usersData)
    })
  }

  sortFirstName(){
    console.log('sort')
    this.usersData.sort(function(a:any, b:any){
    return a.first_name.toLowerCase() === b.first_name.toLowerCase() ? 0 : a.first_name.toLowerCase() < b.first_name.toLowerCase() ? -1 : 1;
  })
  }

  sortFirstNameReverse(){
    this.usersData.sort(function(a:any, b:any){
    return b.first_name.toLowerCase() === a.first_name.toLowerCase() ? 0 : b.first_name.toLowerCase() < a.first_name.toLowerCase() ? -1 : 1;
    })
  }
  onChange(event:any){
    if(event.target.value =="fnaz"){
      this.sortFirstName()
    }
    if(event.target.value =="fnza"){
      this.sortFirstNameReverse()
    }
  }

}
