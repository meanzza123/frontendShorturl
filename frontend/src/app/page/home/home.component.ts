import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  valueURL = '';
  codeShort: string = '';
  mockData:any= { "shortURL": "", "LongURL": "" };
  baseURI:string='';
  constructor(private route: ActivatedRoute, private _api: ApiService) {
    const routeParams = this.route.snapshot.paramMap;
    this.codeShort = routeParams.get('config');
    this.baseURI=window.location.hostname;
  }
  ngOnInit(): void {
    if (this.codeShort) {
      this.findShort_CODE(this.codeShort)
    }
  }

  submit = (longURL: string) => {
    this._api.genShort_URL(longURL).subscribe(
      async (res) => {
        this.mockData["shortURL"] = this.addhttp(this.baseURI+'/'+res.data.shortUrl); 
        this.mockData["LongURL"] =this.valueURL;
      },
      (error) => {
        console.log(error)
      }
    );
  }

  findShort_CODE = (shortCode: string) => {
    this._api.findShort_CODE(shortCode).subscribe(
      async (res) => {
        // console.log(res)
        window.location.href = res.data.longUrl;
      },
      (error) => {
        console.log(error)
      }
    );
  }
  addhttp(url:string) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
      url = "http://" + url;
    }
    return url;
  }

}
