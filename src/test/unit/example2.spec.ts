import { TestBed } from "@angular/core/testing";
import { AppComponent } from "src/app/app.component";

describe('Hello World', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [
            AppComponent
          ],
        }).compileComponents();
      });
    
    it('I just want to say Hello!', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
})