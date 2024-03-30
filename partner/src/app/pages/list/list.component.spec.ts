
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { PartnerService } from 'src/app/services/partner.service';
import { IPartner } from 'src/app/models/partner';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch partners on initialization', () => {
    const partnerService = TestBed.inject(PartnerService);
    const partners: IPartner[] = [
      { id: 1, name: 'Partner 1', description: '', clients: [], projects: [], createdAt: new Date().toISOString(), urlDoc: '', repositoryGit: '' },
      { id: 2, name: 'Partner 2', description: '', clients: [], projects: [], createdAt: new Date().toISOString(), urlDoc: '', repositoryGit: '' }
    ];
    spyOn(partnerService, 'getAll').and.returnValue(of(partners));

    component.ngOnInit();

    expect(partnerService.getAll).toHaveBeenCalled();
    expect(component.partners).toEqual(partners);
  });

  it('should log partners', () => {
    spyOn(console, 'log');

    component.ngOnInit();

    expect(console.log).toHaveBeenCalledWith(component.partners);
  });
});
