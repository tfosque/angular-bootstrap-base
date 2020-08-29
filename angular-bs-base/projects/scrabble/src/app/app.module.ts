import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaygroundComponent } from './playground/playground.component';
import { BoardComponent } from './board/board.component';
import { TileComponent } from './board/tile/tile.component';
import { LetterComponent } from './board/tile/letter/letter.component';
import { SlotComponent } from './board/slot/slot.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaygroundComponent,
    BoardComponent,
    TileComponent,
    LetterComponent,
    SlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
