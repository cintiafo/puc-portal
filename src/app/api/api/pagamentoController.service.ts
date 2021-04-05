import { environment } from './../../../environments/environment';
/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { PagamentoDTO } from '../model/pagamentoDTO';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PagamentoControllerService {

    protected basePath = environment.basePath;
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * get
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUsingGET1(id: number, observe?: 'body', reportProgress?: boolean): Observable<PagamentoDTO>;
    public getUsingGET1(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PagamentoDTO>>;
    public getUsingGET1(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PagamentoDTO>>;
    public getUsingGET1(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getUsingGET1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<PagamentoDTO>(`${this.basePath}/pagamentos/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * listarPorImovel
     * 
     * @param imovelId imovelId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listarPorImovelUsingGET(imovelId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<PagamentoDTO>>;
    public listarPorImovelUsingGET(imovelId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<PagamentoDTO>>>;
    public listarPorImovelUsingGET(imovelId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<PagamentoDTO>>>;
    public listarPorImovelUsingGET(imovelId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (imovelId === null || imovelId === undefined) {
            throw new Error('Required parameter imovelId was null or undefined when calling listarPorImovelUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (imovelId !== undefined && imovelId !== null) {
            queryParameters = queryParameters.set('imovelId', <any>imovelId);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<PagamentoDTO>>(`${this.basePath}/pagamentos/listarPorImovel`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
