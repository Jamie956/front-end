import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

import { Observable, interval } from "rxjs";
import { map, take } from "rxjs/operators";

import { FormControl } from "@angular/forms";


@Component({
  selector: "app-heros",
  template: `
    Hero:
    <div>{{ hero.name }}</div>
    Upper Name:
    <div>{{ hero.name | uppercase }}</div>
    Two Way Binding:
    <div><input [(ngModel)]="hero.name" placeholder="name" /></div>
    ngFor:
    <ul><li *ngFor="let hero of heroes">{{ hero.name }}</li></ul>
    Click event
    <div><button (click)="onClick()">Click</button></div>
    ngIf
    <div *ngIf="xy">{{ xy.z }}</div>
  `
})
export class HerosComponent {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  heroes: Hero[] = [{ id: 1, name: "Blaster" }, { id: 2, name: "Blade" }];
  onClick(): void {
    alert('???');
  }
}

//////////////////////////////
@Component({
  selector: "app-input",
  template: `
    <div>{{ hero }}</div>
  `
})
export class InputComponent {
  @Input() hero: Hero;
}

//////////////////////////////
@Component({
  selector: "app-service",
  template: `
    <div>{{ hero.name }}</div>
  `
})
export class ServiceComponent {
  hero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.get().subscribe(hero => (this.hero = hero));
  }
}

//////////////////////////////
@Component({
  selector: "app-route-a",
  template: `
    <div>Route A</div>
  `
})
export class RouteAComponent {}

//////////////////////////////
@Component({
  selector: "app-route-b",
  template: `
    <div>Route B</div>
  `
})
export class RouteBComponent {}

//////////////////////////////
@Component({
  selector: "app-nav",
  template: `
    <ul>
      <li><a routerLink="/routea">Route A</a></li>
      <li><a routerLink="/routeb">Route B</a></li>
    </ul>
    <router-outlet></router-outlet>
  `
})
export class NavComponent {}

//////////////////////////////
@Component({
  selector: "app-tmp",
  template: `
    <h3><img src="{{ heroImageUrl }}" style="height:40px" /></h3>
    <h3><img [src]="heroImageUrl" style="height:40px" /></h3>


    <p>Sum: {{ 1 + 1 + getVal() }}</p>
    <div [hidden]="isHidden">Hidden</div>
    <div (keyup)="(0)"><input #heroInput /> {{ heroInput.value }}</div>

    <app-del
      (deleteRequest)="deleteHero($event)"
      [hero]="currentHero"
    ></app-del>

    <div (myClick)="clicked = $event" clickable>click me {{ clicked }}</div>
    <input [(ngModel)]="name" />{{ name }}
    <div [style.color]="isSpecial ? 'red' : 'green'">fg</div>
    <button (click)="onSave($event)">Save</button>

    <div [ngStyle]="currentStyles">sf</div>
  `
})
export class TmpComponent {
  heroImageUrl =
    "http://www.wpclipart.com/cartoon/people/hero/hero_silhoutte_T.png";
  isHidden = false;
  name: string = "MaXiu";
  isSpecial = true;
  currentHero: Hero = { id: 1, name: "March" };

  currentStyles = {
    "color": "red"
  };

  getVal(): number {
    return 2;
  }

  deleteHero(hero: Hero) {
    alert(`Delete ${hero ? hero.name : "the hero"}.`);
  }

  onSave(event: KeyboardEvent) {
    alert(event);
  }
}

@Component({
  selector: "app-del",
  template: `
    <button (click)="delete()">Delete</button>
  `
})
export class DelComponent {
  @Output() deleteRequest = new EventEmitter<Hero>();
  @Input() hero: Hero;

  delete() {
    this.deleteRequest.emit(this.hero);
  }
}

//////////////////////////////
@Component({
  selector: "app-keyup",
  template: `
    keyup1
    <input (keyup)="onKey1($event)" />
    <p>{{ values }}</p>

    keyup2
    <input #box (keyup)="onKey2(box.value)" />
    <p>{{ values }}</p>

    keyup3
    <input #box2 (keyup.enter)="onKey3(box2.value)" />
    <p>{{ value }}</p>
  `
})
export class KeyupComponent {
  onKey1(event: KeyboardEvent) {
    alert((<HTMLInputElement>event.target).value);
  }
  onKey2(value: string) {
    alert(value);
  }
  onKey3(value: string) {
    alert(value);
  }
}

//////////////////////////////
@Component({
  selector: "app-child1",
  template: `
    <p>{{name}}</p>
  `
})
export class Child1Component {
  @Input("name") name: String;
}

@Component({
  selector: "app-child2",
  template: `
    <p>{{name}}</p>
  `
})
export class Child2Component {
  private _name = "";

  @Input()
  set name(name: string) {
    this._name = "*"+name;
  }

  get name(): string {
    return this._name;
  }
}

@Component({
  selector: "app-parent",
  template: `
    child1：
    <app-child1 *ngFor="let name of names" [name]="name"></app-child1>
    child2：
    <app-child2 *ngFor="let name of names" [name]="name"></app-child2>
  `
})
export class ParentComponent {
  names = ["Mr. IQ", "Bombasto"];
}

//////////////////////////////
@Component({
  selector: "app-voter",
  template: `
    <h4>{{ name }}</h4>
    <button (click)="vote(true)" [disabled]="didVote">Agree</button>
    <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `
})
export class VoterComponent {
  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}

@Component({
  selector: "app-vote-taker",
  template: `
    <h3>Agree: {{ agreed }}, Disagree: {{ disagreed }}</h3>
    <app-voter
      *ngFor="let voter of voters"
      [name]="voter"
      (voted)="onVoted($event)"
    >
    </app-voter>
  `
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ["Mr. IQ", "Ms. Universe", "Bombasto"];

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}

//////////////////////////////
@Component({
  selector: "app-parent-counter",
  template: `
    <app-counter #counter></app-counter>

    <button (click)="counter.inc()">Inc</button>
    <button (click)="counter.des()">Des</button>
    <div>{{ counter.count }}</div>
  `
})
export class CountParentComponent {}

@Component({
  selector: "app-counter",
  template: ""
})
export class CountChildComponent {
  count = 0;

  inc() {
    this.count = this.count + 1;
  }
  des() {
    this.count = this.count - 1;
  }
}

//////////////////////////////
@Component({
  selector: "app-dire",
  template: `
    <div>
      <input type="radio" name="colors" (click)="color = 'lightgreen'" />Green
      <input type="radio" name="colors" (click)="color = 'yellow'" />Yellow
      <input type="radio" name="colors" (click)="color = 'cyan'" />Cyan
    </div>
    <p [appHighlight]="color">Highlight me!</p>

    <p [appHighlight]="color" defaultColor="violet">Default Color is violet</p>
  `
})
export class DireComponent {
  color: string;
}

//////////////////////////////
@Component({
  selector: "app-pipe",
  template: `
    <div *ngFor="let hero of (heroes | longHeroes)">{{ hero.name }}</div>
  `
})
export class PipeComponent {
  heroes: Hero[] = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "long hero" }
  ];
}

//////////////////////////////
@Component({
  selector: "app-async",
  template: `
    <p>Message: {{ message$ | async }}</p>
    <button (click)="resend()">Resend</button>
  `
})
export class AsyncComponent {
  message$: Observable<string>;

  private messages = [
    "You are my hero!",
    "You are the best hero!",
    "Will you be my hero?"
  ];

  constructor() {
    this.resend();
  }

  resend() {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }
}

//////////////////////////////
@Component({
  selector: "app-form1",
  template: `
    <label> Name: <input type="text" [formControl]="name"/></label>
    <p>Value: {{ name.value }}</p>
    <p><button (click)="reset()">reset</button></p>
  `
})
export class Form1Component {
  name = new FormControl("");

  reset() {
    this.name.setValue("Nancy");
  }
}

export const heroSwitchComponents = [
  HerosComponent,
  InputComponent,
  ServiceComponent,
  RouteAComponent,
  RouteBComponent,
  NavComponent,
  TmpComponent,
  DelComponent,
  KeyupComponent,
  Child1Component,
  Child2Component,
  ParentComponent,
  VoterComponent,
  VoteTakerComponent,
  CountChildComponent,
  CountParentComponent,
  DireComponent,
  PipeComponent,
  AsyncComponent,
  Form1Component
];
