import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LineItemDirective } from './directives/line-item.directive';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';

import { GameComponent } from './game/game.component';
import { RackComponent } from './game/rack/rack.component';
import { TileComponent } from './game/tile/tile.component';
import { BoardComponent } from './game/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LineItemDirective,
    CartComponent,
    GameComponent,
    RackComponent,
    TileComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    DragDropModule,
    MatExpansionModule
  ],
  providers: [LineItemDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
