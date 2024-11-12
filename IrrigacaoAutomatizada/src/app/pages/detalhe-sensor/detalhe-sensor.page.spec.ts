import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheSensorPage } from './detalhe-sensor.page';

describe('DetalheSensorPage', () => {
  let component: DetalheSensorPage;
  let fixture: ComponentFixture<DetalheSensorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheSensorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
