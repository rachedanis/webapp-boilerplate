import angular from 'angular';
import { SuperphungComponent } from './superphung.component';

export const SuperphungModule = angular
  .module('superphung', [])
  .component('superphung', SuperphungComponent)
  .name;