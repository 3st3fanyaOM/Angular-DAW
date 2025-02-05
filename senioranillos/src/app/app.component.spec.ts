import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD:anillos/src/app/app.component.spec.ts
  it(`should have the 'anillos' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('anillos');
=======
  it(`should have the 'senioranillos' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('senioranillos');
>>>>>>> 92d535ffcede65ab590a859873c0d084efac720f:senioranillos/src/app/app.component.spec.ts
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
<<<<<<< HEAD:anillos/src/app/app.component.spec.ts
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, anillos');
=======
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, senioranillos');
>>>>>>> 92d535ffcede65ab590a859873c0d084efac720f:senioranillos/src/app/app.component.spec.ts
  });
});
