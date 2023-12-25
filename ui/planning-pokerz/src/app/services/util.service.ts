import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  dbToDomanEntity = (data: any) => {

    const entity = data.payload.doc.data();
    entity.id = data.payload.doc.id;
    return entity;
  }

}
