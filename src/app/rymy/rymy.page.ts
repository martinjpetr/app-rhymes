import { Component, OnInit } from '@angular/core';
import { RhymeService } from '../api/rhyme.service';
import { Observable } from  'rxjs';
import { HistoryService } from '../storage/history.service';


@Component({
  selector: 'app-rymy',
  templateUrl: './rymy.page.html',
  styleUrls: ['./rymy.page.scss'],
})
export class RymyPage implements OnInit {
  rhyme: string = '';
  similarRhymes: string[] = [];
  currentrhyme: string = '';
  constructor(public rhymeService: RhymeService,
  public storage: HistoryService) { }

  ngOnInit() {}

  searchRhyme() {
    console.log(this.rhyme);
    this.currentrhyme = this.rhyme;
    console.log(this.currentrhyme);
    // Now you can use this.wordsapiService to call the API
    this.rhymeService.getRhyme(this.rhyme).subscribe(
      (result) => {
        console.log(result);

        // Assuming the response has a 'similarTo' property containing the list of similar words
        this.similarRhymes = result.rhymes.all;

        // this.similarWords.forEach(async (word) => {
        //   // Assuming 'word' is the key and some value (you can modify as needed)
        //   await this.storage.set(this.curword, word);
        // });
        this.storage.set(this.currentrhyme, this.similarRhymes);
        // You can now do further processing or update UI based on the data
        // For example, log each similar word
        // this.similarWords.forEach((word) => {
        //   console.log(word);
        // });


        // Or update your UI to display the similar words
        // For example, if you have an element in your HTML like <ion-list>
        // you can bind the similarWords array to it in your template
      },
      (error) => {
        console.error(error);
        // Handle error
      }
    );
  }
}
