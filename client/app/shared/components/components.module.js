import angular from 'angular';
import { SuperphungModule } from './superphung/superphung.module';

export const ComponentsModule = angular
  .module('app.shared.components', [
    SuperphungModule
  ])
  .name;