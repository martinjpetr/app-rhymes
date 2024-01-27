import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HlavniPage } from './hlavni.page';

describe('HlavniPage', () => {
  let component: HlavniPage;
  let fixture: ComponentFixture<HlavniPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HlavniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
