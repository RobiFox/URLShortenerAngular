import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild("spinning") spinning!: ElementRef;
  @ViewChild("urlInput") urlInput!: ElementRef;

  dialogVisible: boolean = false;
  dialogText: string = "Lorem ipsum";

  ownerId!: string;

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  ngOnInit() {
    if(!this.cookieService.check("owner")) {
      this.ownerId = crypto.randomUUID();
    } else {
      this.ownerId = this.cookieService.get("owner");
    }
    this.cookieService.set("owner", this.ownerId, 365); // renew cookie expiry date
  }

  shortenUrl() {
    if (this.urlInput.nativeElement.value === '') {
      this.urlInput.nativeElement.classList.add("ng-invalid");
      this.urlInput.nativeElement.classList.add("ng-dirty");
      return;
    }
    this.urlInput.nativeElement.classList.remove("ng-invalid");
    this.urlInput.nativeElement.classList.remove("ng-dirty");
    this.spinning.nativeElement.classList.remove("hidden");

    const params = new HttpParams()
      .set('url', this.urlInput.nativeElement.value)
      .set('owner', this.ownerId);

    this.http.post<any>(`${environment.apiUrl}/Url`, null, {params, observe: "response"}).subscribe({
      next: res => {
        this.spinning.nativeElement.classList.add("hidden");
        if (res.status !== 200) {
          console.error();
          return;
        }
        this.showDialog(`Your short url is available at ${environment.apiUrl}/Url/${res.body.id}`);
        console.log(res);
      },
      error: err => {
        this.spinning.nativeElement.classList.add("hidden");
        console.error("error " + err.message);
        this.showDialog(err.message);
      }
    });
  }

  showDialog(message: string) {
    this.dialogVisible = true;
    this.dialogText = message;
  }
}
