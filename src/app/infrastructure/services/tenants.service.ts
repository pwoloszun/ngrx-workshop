import { Injectable } from '@angular/core';
import { find } from 'lodash';
import { take } from 'rxjs/operators';

import { TenantsApiService, TenantName, TenantDto } from '@infrastructure/api';

export { TenantName };

@Injectable({
  providedIn: 'root'
})
export class TenantsService {

  allTenants: TenantDto[] = [];
  selectedTenant: TenantDto | null = null;
  private _isLoading = false;

  get isLoading() {
    return this._isLoading;
  }

  constructor(private tenantsApi: TenantsApiService) { }

  loadTenants(isForce = false): void {
    if (!this._isLoading && (isForce || this.allTenants.length < 1)) {
      this._isLoading = true;
      this.tenantsApi
        .getAll()
        .pipe(take(1))
        .subscribe((tenantsData) => {
          this.allTenants = tenantsData;
          this.selectedTenant = tenantsData[0] || null;
          this._isLoading = false;
        });
    }
  }

  setSelected(id: number): void {
    const tenant = find(this.allTenants, { id });
    if (!tenant) {
      throw new Error(`Cant find Tenant with id=${id}`);
    }
    this.selectedTenant = tenant;
  }

  isSelected(id: number): boolean {
    return this.selectedTenant?.id === id;
  }

  isSelectedByName(name: TenantName): boolean {
    return this.selectedTenant?.name === name;
  }

}
