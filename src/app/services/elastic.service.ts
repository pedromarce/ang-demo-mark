import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, SearchResponse } from 'elasticsearch';

@Injectable()
export class ElasticService {
  private _client: Client;

  constructor() {
    if (!this._client) { this._connect(); }
  }

  private _connect() {
    this._client = new Client({
      host: 'http://localhost:9200',
      log: 'info'
    });
  }

  search(value): Observable<SearchResponse<{}>> {
    return Observable.fromPromise(<Promise<SearchResponse<{}>>> this._client.search({ index: 'websearch', size: 50, q: value }));
  }

  searchBody(body): Observable<SearchResponse<{}>> {
    return Observable.fromPromise(<Promise<SearchResponse<{}>>> this._client.search({ index: 'websearch', size: 50, body: body }));
  }

  countAggregation(query: any, index: string, type: string, field: string) {
    const payload: any = {};
    payload.index = index;
    payload.type = type;
    payload.size = 0;
    payload.body = {};
    payload.body.query = query;
    payload.body.aggs = {};
    payload.body.aggs['byAggregation'] = {'terms': { 'field': field}};
    console.log(JSON.stringify(payload));

    return Observable.fromPromise(<Promise<SearchResponse<{}>>> this._client.search(payload));
  }

}
