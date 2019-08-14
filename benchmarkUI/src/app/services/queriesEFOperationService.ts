import { QueriesOperationService } from './queriesOperationService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QueriesEFOperationService extends QueriesOperationService {
    constructor(
        httpClient:HttpClient
    ){
        super("EF", httpClient);
    }
}