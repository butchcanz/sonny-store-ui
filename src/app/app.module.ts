import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { ItemServiceComponent } from './items/itemservice.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { SalesComponent } from './sales/sales.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { StockInComponent } from './stock-in/stock-in.component';
import { StockInDetailsComponent } from './stock-in-details/stock-in-details.component';
import { StockOutComponent } from './stock-out/stock-out.component';
import { StockOutDetailsComponent } from './stock-out-details/stock-out-details.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SettingsComponent } from './settings/settings.component';

import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PickListModule } from 'primeng/picklist';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ItemsComponent,
    ItemServiceComponent,
    ItemDetailsComponent,
    SalesComponent,
    SalesDetailsComponent,
    StockInComponent,
    StockInDetailsComponent,
    StockOutComponent,
    StockOutDetailsComponent,
    InventoryComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    UserDetailComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ConfirmPopupModule,
    ToastModule,
    CardModule,
    ImageModule,
    TableModule,
    DialogModule,
    PickListModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
