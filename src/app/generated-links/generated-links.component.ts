import {Component, Optional, SkipSelf, ViewChild} from '@angular/core';
import {environment} from "../../environments/environment";
import {MessageService} from "primeng/api";
import {ClipboardService} from "ngx-clipboard";
import {HttpClient, HttpParams} from "@angular/common/http";
import {HomeComponent} from "../home/home.component";
import {VirtualScroller} from "primeng/virtualscroller";

@Component({
  selector: 'app-generated-links',
  templateUrl: './generated-links.component.html',
  styleUrl: './generated-links.component.scss'
})
export class GeneratedLinksComponent {
  public items: any[] = [];
  protected readonly environment = environment;

  constructor(private messageService: MessageService, private clipboard: ClipboardService, private http: HttpClient, @SkipSelf() private home: HomeComponent) {
  }

  ngOnInit() {
    const params = new HttpParams()
      .set('owner', this.home.ownerId);
    this.http.get<any>(`${environment.apiUrl}/Url`, {params, observe: "response"}).subscribe({
      next: res => {
        console.log(res.body);
        this.items = res.body;
      }
    });
  }

  copyToClipboard(text: string) {
    this.messageService.add({severity: 'success', summary: 'Copied to Clipboard', detail: text, closable: false, life: 3000});
    this.clipboard.copy(text);
  }

  delete(del: any) {
    const params = new HttpParams()
      .set('owner', this.home.ownerId)
      .set('id', del.id);
    this.http.delete<any>(`${environment.apiUrl}/Url`, {params}).subscribe({
      next: () => {
        //this.items.splice(this.items.indexOf(item), 1);
        this.items = this.items.filter(item => item.id !== del.id);
      }
    });
  }
}
