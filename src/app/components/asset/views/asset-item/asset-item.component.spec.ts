import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AssetService } from 'src/app/services/asset/asset.service';
import { AssetItemComponent } from './asset-item.component';

describe('AssetItemComponent', () => {
  let component: AssetItemComponent;
  let fixture: ComponentFixture<AssetItemComponent>;
  const initialState = { loading: false, company: {} };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AssetItemComponent],
      providers: [AssetService, provideMockStore({ initialState })]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
