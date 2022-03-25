import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  HostListener,
  Input
} from "@angular/core";

// @Directive({ selector: "[myClick]" })
// export class ClickDirective {
//   @Output("myClick") clicks = new EventEmitter<string>();

//   toggle = false;

//   constructor(el: ElementRef) {
//     el.nativeElement.addEventListener("click", (event: Event) => {
//       this.toggle = !this.toggle;
//       this.clicks.emit(this.toggle ? "Click!" : "");
//     });
//   }
// }

@Directive({
  selector: "[myClick]",
  outputs: ["clicks:myClick"]
})
export class ClickDirective {
  clicks = new EventEmitter<string>();
  toggle = false;

  constructor(el: ElementRef) {
    el.nativeElement.addEventListener("click", (event: Event) => {
      this.toggle = !this.toggle;
      this.clicks.emit(this.toggle ? "Click!" : "");
    });
  }
}

@Directive({
  selector: "[appHighlight]"
})
export class HighlightDirective {
  constructor(private el: ElementRef) {}

  @Input() defaultColor: string;

  @Input("appHighlight") highlightColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || "red");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
