import { Injectable } from '@angular/core';

import { DataApiService, DtoParams } from '@infrastructure/api/data-api.service';

export interface TodoDto {
  id: number;
  title: string;
  description?: string;
}

export type TodoDtoParams = DtoParams<TodoDto>;

@Injectable({
  providedIn: 'root'
})
export class TodoApiService extends DataApiService<TodoDto> {

  override getUrl(): string {
    return '/api/todos';
  }
}
