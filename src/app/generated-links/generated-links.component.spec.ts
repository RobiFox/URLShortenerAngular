import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedLinksComponent } from './generated-links.component';

describe('GeneratedLinksComponent', () => {
  let component: GeneratedLinksComponent;
  let fixture: ComponentFixture<GeneratedLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneratedLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
