import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../storage/history.service';

@Component({
  selector: 'app-historie',
  templateUrl: './historie.page.html',
  styleUrls: ['./historie.page.scss'],
})
export class HistoriePage implements OnInit {

  storedData: Array<any> = [];

  constructor(private storage:  HistoryService) { }

  async ngOnInit() {
    const storedData = await this.storage.getKeys();
    if (storedData) {
      this.storedData = storedData;
    }
    console.log('stored data are:' + storedData);
    console.log('this stored data are:' + this.storedData); 
  }
  async nacti() {
    const storedData = await this.storage.getKeys();
    if (storedData) {
      this.storedData = storedData;
    }
    console.log('stored data are:' + storedData);
    console.log('this stored data are:' + this.storedData);
  }

}
