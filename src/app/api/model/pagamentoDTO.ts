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


export interface PagamentoDTO { 
    ano?: string;
    id?: number;
    imovelId?: number;
    status?: string;
    tipo?: PagamentoDTO.TipoEnum;
    valor?: number;
}
export namespace PagamentoDTO {
    export type TipoEnum = 'IPTU' | 'ITR';
    export const TipoEnum = {
        IPTU: 'IPTU' as TipoEnum,
        ITR: 'ITR' as TipoEnum
    };
}
