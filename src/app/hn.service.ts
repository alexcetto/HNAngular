import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Story } from './story'

@Injectable()
export class HnService {
	hnApiUrl = 'https://hacker-news.firebaseio.com/v0/topstories';
	hnStoryUrl = ' https://hacker-news.firebaseio.com/v0/item/';
	suffix = '.json?print=pretty';
  constructor(private http: Http) { }

	getStories(): Promise<string[]> {
		const urlItem = `${this.hnApiUrl}${this.suffix}`;
		return this.http.get(urlItem)
			.toPromise()
			.then(response => {
				return this.formatStoryDetails(response);
			})
			.catch(this.handleError);
	}

	getDetailsFromAStory(id: number): Promise<Story> {
		const urlItem = `${this.hnStoryUrl}/${id}${this.suffix}`;
		return this.http.get(urlItem)
			.toPromise()
			.then(response => {
				return response.json();
			})
			.catch(this.handleError);
	}

	private handleError(error: any): Promise <any> {
		console.error("Error Occured !\n ", error);
		return Promise.reject(error.message || error);
	}

	private formatStoryDetails(rawStory: any): Story {
  	let s: Story;
  	s = <Story>rawStory.json();

  	return s;
	}


}
