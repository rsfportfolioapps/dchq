import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { RouterModule } from '@angular/router';
import { ExternalUrlDirective } from './directive/redirection.directive';

@NgModule({
  declarations: [FooterComponent, TopNavComponent, JumbotronComponent, ExternalUrlDirective],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, TopNavComponent, JumbotronComponent, ExternalUrlDirective],
  providers: [],
})
export class SharedModule { }