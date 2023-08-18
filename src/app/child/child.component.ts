import { Component, 
  OnChanges, 
  Input, 
  SimpleChanges, 
  OnInit, 
  ViewChild, 
  ElementRef, 
  ContentChild, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked {

  @Input() textPar : string = 's';
  @Input() textPar2 : string = 's';
  @ViewChild('par') paraEl : ElementRef | undefined;
  @ContentChild('heading') headingEl : ElementRef | undefined;
  parText : string = 'child works!'

  constructor(){
    console.log('constructor called,', this.textPar);
  }

  changeParText(){
    this.parText = 'new text';
  }

  // 1. ngOnChanges - როცა input property  ინიციალიზებულია ან იცვლება 
  // SimpleChanges-ით ვაფიქსირებთ ცვლილებას
  ngOnChanges(simpleChange : SimpleChanges){
    console.log('ngOnChanges called,', this.textPar, simpleChange);
  }

  // 2. ngOnInit - როცა input property  ინიციალიზებულია.
  // @viewChild, @contentChild მიუწვდომელია
  ngOnInit(): void {
    console.log('ngOnInit called.', `initial input values: ${this.textPar}, ${this.textPar2}`);
    console.log(`in ngOnInit. @viewChild: ${this.paraEl}, @contentChild: ${this.headingEl}`);
  }

  // 3.ngDoCheck - გამოიძახება ყოველი change detection cycle-ის დროს
  // ე.ი ნებისმიერი event-ის დროს
  // მუშაობის დასრულების შემდეგ, ხდება projection
  ngDoCheck(): void {
    console.log(`ngDoCheck called. in ngDoCheck @contentChild: ${this.headingEl?.nativeElement.innerText}`);
  }

  // 4.ngAfterContentInit - გამოიძახება მხოლოდ პირველი change detection cycle-ის დროს
  // როცა, projected content ინიციალიზებულია, (არსებობის შემთხვევაში)
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit called. in ngAfterContentInit @contentChild: ${this.headingEl?.nativeElement}`);
  }

  // 5.ngAfterContentCheck - (3)გამოიძახება ყოველი change detection cycle-ის დროს
  //როცა, projected content იცვლება, აქ უკვე გაახლებულია ContentChild property-ახალი refernece-ით
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked called. in ngAfterContentChecked @ContentChild: ${this.headingEl?.nativeElement.innerText}`);
  }

  // 6.ngAfterViewInit - გამოიძახება მხოლოდ პირველი change detection cycle-ის დროს
  // როცა, კომპონენტის view ინიციალიზებული იქნება და განახლებულია @viewChild prop
  // ე.ი @viewChild prop პირველად აქ არის ხელმისაწვდომი
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit called. here @viewChild: ${this.paraEl?.nativeElement.innerText}`);
  }

  // 7.ngAfterViewChecked - გამოიძახება ყოველი change detection cycle-ის დროს
  // როცა, კომპონენტის view იცვლება, აქ უკვე გაახლებულია @viewChild property-ახალი refernece-ით
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked called, here @viewChild: ${this.paraEl?.nativeElement.innerText}`);
  }

}
