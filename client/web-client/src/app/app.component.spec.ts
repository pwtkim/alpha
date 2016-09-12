/**
 * Created by peterkim on 9/10/16.
 */
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MdToolbarModule } from "@angular2-material/toolbar";
import { MdSidenavModule } from "@angular2-material/sidenav";

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MdToolbarModule, MdSidenavModule],
            declarations: [AppComponent]
        });
    });
    it ('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});
