import { Pipe, PipeTransform } from "@angular/core";

import { Hero } from "./hero";

@Pipe({ name: "longHeroes" })
export class LongHeroesPipe implements PipeTransform {
  transform(allHeroes: Hero[]) {
    return allHeroes.filter(hero => hero.name.length > 6);
  }
}
