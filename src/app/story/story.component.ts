import {Component, OnInit, Input, AfterContentInit} from '@angular/core';
import {HnService} from "../hn.service";
import {Story} from "../story";

import * as moment from 'moment';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements AfterContentInit {

	@Input() story;
	storyDetails: Story;
	numberOfComments: number;

  constructor(private hnService: HnService) { }

  ngAfterContentInit() {
		this.hnService.getDetailsFromAStory(this.story)
			.then((sd: Story) => {
					this.storyDetails = sd;
				}
			)
			.then(() => {
				this.numberOfComments = this.storyDetails.kids!=null? this.storyDetails.kids.length: 0;
			})
			.catch((e) => console.error(e));
  }


  dateParser(date:number) : string {
  	let dateParsed: string;
  	dateParsed = moment.unix(date).fromNow();
  	return dateParsed;
	}

	domainExtractor(url: string): string{
		let domain;
		//find & remove protocol (http, ftp, etc.) and get domain
		if(url==null) return 'No domain';
		if (url.indexOf("://") > -1) {
			domain = url.split('/')[2];
		}
		else {
			domain = url.split('/')[0];
		}

		//find & remove port number
		domain = domain.split(':')[0];
		domain = domain.replace('www.','');

		return domain;
	}

}
