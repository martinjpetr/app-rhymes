import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoaplikacePage } from './infoaplikace.page';

describe('InfoaplikacePage', () => {
  let component: InfoaplikacePage;
  let fixture: ComponentFixture<InfoaplikacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoaplikacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
