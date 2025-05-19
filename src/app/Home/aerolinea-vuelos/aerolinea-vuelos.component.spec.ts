/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AerolineaVuelosComponent } from './aerolinea-vuelos.component';

describe('AerolineaVuelosComponent', () => {
  let component: AerolineaVuelosComponent;
  let fixture: ComponentFixture<AerolineaVuelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerolineaVuelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerolineaVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
