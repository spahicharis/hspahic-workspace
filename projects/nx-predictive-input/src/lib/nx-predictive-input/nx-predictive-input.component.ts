import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, distinctUntilChanged, filter, map, of, Subscription, switchMap } from "rxjs";
import { getPrediction } from "./helper";

@Component({
  selector: 'input-predictive',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './nx-predictive-input.component.html',
  styleUrl: './nx-predictive-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NxPredictiveInputComponent,
    }
  ],
})
export class NxPredictiveInputComponent implements OnInit, OnDestroy, ControlValueAccessor {

  @Input() predictions: string[] = [];
  inputModel: FormControl<string> = new FormControl<string>("", {nonNullable: true});
  inputModelRight = "";

  onChange = (v: string) => {
  };

  onTouched = () => {
  };

  touched = false;

  disabled = false;

  onChangeSubs: Subscription[] = [];

  constructor() {
  }

  ngOnDestroy() {
    for (let sub of this.onChangeSubs) {
      sub.unsubscribe();
    }
  }

  writeValue(c: string) {
    if (c) {
      this.inputModel.setValue(c, {emitEvent: false});
    }
  }

  registerOnChange(onChange: any) {
    const sub = this.inputModel.valueChanges.subscribe(onChange);
    this.onChangeSubs.push(sub);
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  ngOnInit() {

    this.inputModel.valueChanges.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      filter((v: string) => !!v),
      switchMap(value => this.search(value))
    ).subscribe({
      next: results => {
        console.log(results);
        this.inputModelRight = results;
        // this.updateSuggestion(results)
      }
    })
  }

  onInput() {
    this.inputModelRight = "";
    this.onChange(this.inputModelRight);
  }

  onKeydown(keydownEvent: KeyboardEvent) {
    if (keydownEvent.key === 'Tab' && this.inputModelRight) {
      // Find case sensitive value

      this.inputModel.setValue(this.inputModelRight);
      this.inputModelRight = "";
      this.onChange(this.inputModelRight);
      keydownEvent.preventDefault();
    }
  }

  private search(value: string) {
    return of(this.predictions).pipe(
      map(items => getPrediction(value, items))
    )
  }

  private updateSuggestion(result: string[]) {
    const inputValue = this.inputModel.value.toLowerCase();
    const firstMatch = result.find(item => item.toLowerCase().startsWith(inputValue));
    this.inputModelRight = firstMatch ? inputValue + firstMatch.slice(inputValue.length) : "";
  }

}
