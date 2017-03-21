import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoryComponent } from './story/story.component';
import { StoryCommentsComponent } from './story-comments/story-comments.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRouterModule } from "./app-router/app-router.module";
import {HnService} from "./hn.service";
import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
  declarations: [
    AppComponent,
    StoryComponent,
    StoryCommentsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		Ng2PaginationModule
		/*,
    AppRouterModule*/
  ],
  providers: [HnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
