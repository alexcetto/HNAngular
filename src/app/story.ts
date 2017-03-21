export enum typeOfStory {
	"story",
	"job",
	"comment",
	"poll",
	"pollopt"
}

interface Serializable <T> {
	deserialiaze(input: Object): T;
}

export interface Story {
	by: string;
	descendants: number;
	id: number;
	kids: number [];
	score: number;
	time: number;
	title: string;
	type: typeOfStory;
	url: string;

}
