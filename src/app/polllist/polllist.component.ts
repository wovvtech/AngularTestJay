import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-polllist',
  templateUrl: './polllist.component.html',
  styleUrls: ['./polllist.component.scss']
})
export class PolllistComponent implements OnInit {
  pollList: any = [];
  pollDetails: any = {};

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this.GetPollList();
    setInterval(() => {
      this.GetPollList();
    }, 10000);
  }
  GetPollList() {
    this._http.get("https://hn.algolia.com/api/v1/search_by_date?tags=story").subscribe((data) => {
      this.pollList = this.pollList.concat(data["hits"]);
      console.log(data);
    })
  }
  OpenModel(item: any) {
    this.pollDetails = item;
    console.log(item);
  }
}
