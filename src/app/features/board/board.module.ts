import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { BoardRoutingModule } from './board-routing.module';
import { BoardManagementComponent } from './components/board-management/board-management.component';
import { SharedModule } from '../shared/shared.module';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { AddFeatureCardComponent } from './components/add-feature-card/add-feature-card.component';
import { boardStates } from './store';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';

const components = [
  BoardManagementComponent,
  FeatureCardComponent,
  AddFeatureCardComponent,
  TicketCardComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    BoardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxsModule.forFeature(boardStates),
  ],
})
export class BoardModule {}
