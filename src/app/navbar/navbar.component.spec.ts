import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [MatToolbarModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header', () => {
    const header = fixture.nativeElement.querySelector('span[automation="main-header"]').innerText;
    expect(header).toContain(component.MAIN_HEADER);
  });

  it('should have 4 buttons - Cards, About, Register and Login', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    const buttonsLabels = Object.values(buttons).map((b: any) => b.innerText);
    expect(buttonsLabels).toContain(component.CARDS);
    expect(buttonsLabels).toContain(component.ABOUT);
    expect(buttonsLabels).toContain(component.REGISTER);
    expect(buttonsLabels).toContain(component.LOGIN);
  });
});
