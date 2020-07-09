import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { HttpClient } from '@angular/common/http';

interface ItemData {
  id: number;
  name: string;
  isTradeable: boolean;
  stackable: number;

}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


@Injectable()
export class ItemComponent implements OnInit {

  private readonly itemId = 1;

  private readonly runeLiteApiPath = 'http://api.runelite.net/runelite-1.6.20/';
  private readonly cacheItemPath = 'cache/item/';

  public itemData: ItemData;
  public firstItemImgSrc: string;

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
    this.firstItemImgSrc = this.GetImgApiPathForId(1000);
    this.http.get(this.runeLiteApiPath + this.cacheItemPath + this.itemId)
      .subscribe((data: ItemData) => this.itemData = {
        id: data['id'],
        name: data['name'],
        isTradeable: data['isTradeable'],
        stackable: data['stackable']
      });
      this.http.get(this.runeLiteApiPath + )
  }

  private GetImgApiPathForId(itemId: number): string {
      return this.runeLiteApiPath + this.cacheItemPath + itemId + '/image';
  }

  private GetItemInfoForId(itemId: number){
    return this.runeLiteApiPath + this.cacheItemPath + itemId
  }

}
