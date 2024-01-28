import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RymyPage } from './rymy.page';

describe('RymyPage', () => {
  let component: RymyPage;
  let fixture: ComponentFixture<RymyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RymyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
