import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

interface Kv {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title='yoanna';
  placeholders: KeyValue<string,string>[] = [];
  csvHeaders: string[]= [];
  
  loading: boolean = false;

  loadPlaceholders() {
    this.loading = true;
    setTimeout(() => {
      this.placeholders = [
        {key: 'p1', value: ''},
        {key: 'p2', value: ''}
      ]

      this.loading = false;
    }, 1500);
  }
  loadCSVHeaders() {
    this.loading = true;
    setTimeout(() => {
      this.csvHeaders = ['c1','c2','c3']
      this.loading = false;
    }, 1500);
    
  }

  handleSubmit() {
    console.log(this.placeholders);
  }
}
