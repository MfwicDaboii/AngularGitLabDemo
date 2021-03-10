import { async, ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { AuthenticationService } from "src/app/authentication.service";
import { LoginComponent } from "src/app/login/login.component";

describe('LoginComponent & AuthenticationService', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let authService: any;
 
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            providers: [
                {
                    provide: AuthenticationService,
                    useValue: jasmine.createSpyObj('AuthenticationService', ['login', 'logout'])
                }
            ]
        }).compileComponents();
    }));
 
    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthenticationService);
    });
 
    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should call login method on authentication service when login button is clicked', () => {
        const loginButton = fixture.debugElement.query(By.css('button#login')).nativeElement;
        loginButton.click();
       
        fixture.detectChanges();
       
        expect(authService.login).toHaveBeenCalledWith('testuser', '12345678');
    });
})