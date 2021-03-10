import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotosDetailComponent } from './album-photos-detail.component';

describe('AlbumPhotosDetailComponent', () => {
  let component: AlbumPhotosDetailComponent;
  let fixture: ComponentFixture<AlbumPhotosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPhotosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPhotosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
