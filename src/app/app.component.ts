import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {HnService} from "./hn.service";
import {Story} from "./story";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
	//,
	//changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'Hacker News!';
  page = 1;

	hnStories: string[];

	constructor(private hnService: HnService) { }

	ngOnInit() {

		this.hnService.getStories()
			.then((stories: string[]) => {
					this.hnStories = stories;
					return stories;
				}
			)
			.catch((e) => console.error(e));
	}
}
