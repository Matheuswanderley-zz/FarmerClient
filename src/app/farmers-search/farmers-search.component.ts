import { Component, OnInit } from '@angular/core';
import { SearchFarmersService } from './search-farmers.service'
@Component({
  selector: 'app-farmers-search',
  templateUrl: './farmers-search.component.html',
  styleUrls: ['./farmers-search.component.css']
})
export class FarmersSearchComponent implements OnInit {
  farmers: any[];
  constructor(private searchFarmService: SearchFarmersService) { }

  searchFarmers(query: string){
     return this.searchFarmService.search(query).subscribe(data => this.farmers = data)
     
  }
  ngOnInit() {
    
  }

}
