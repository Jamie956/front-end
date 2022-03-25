import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { Hero } from "./hero";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  get(): Observable<Hero> {
    return of({ id: 11, name: "Mr. Nice" });
  }
}
