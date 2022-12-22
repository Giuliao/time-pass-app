import { Injectable, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    @Inject(APP_BASE_HREF) private baseHref:string
  ) { }

  public publicBaseHref = this.baseHref;
}
