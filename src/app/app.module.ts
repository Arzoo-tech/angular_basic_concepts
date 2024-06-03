import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { AuthModule } from './auth/auth.module';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { IfElseComponent } from './if-else/if-else.component';
import { MultipleConditionComponent } from './multiple-condition/multiple-condition.component';
import { SwitchComponent } from './switch/switch.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { NestedLoopComponent } from './nested-loop/nested-loop.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component';
import { ToggleComponent } from './toggle/toggle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildCompComponent } from './child-comp/child-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    CounterComponentComponent,
    PropertyBindingComponent,
    IfElseComponent,
    MultipleConditionComponent,
    SwitchComponent,
    ForLoopComponent,
    NestedLoopComponent,
    StyleBindingComponent,
    HeaderComponent,
    ToggleComponent,
    ChildComponent,
    UserDetailsComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
