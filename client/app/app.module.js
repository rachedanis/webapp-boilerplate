import angular from 'angular';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';

export const AppModule = angular
  .module('app', [
    ComponentsModule
  ])
  .component('app', AppComponent)