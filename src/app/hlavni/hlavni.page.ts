import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hlavni',
  templateUrl: './hlavni.page.html',
  styleUrls: ['./hlavni.page.scss'],
})
export class HlavniPage implements OnInit {

  constructor(private router: Router) { }

  
  goToRymyPage() {
    this.router.navigate(['/tabs/rymy']);
  }

  goToHistoriePage() {
    this.router.navigate(['/tabs/historie']);
  }

  goToInfoAplikacePage() {
    this.router.navigate(['/tabs/infoaplikace']);
  }

  ngOnInit() {
  }

}
