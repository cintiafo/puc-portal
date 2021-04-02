import { PagamentoDTO } from './pagamentoDTO';
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
import { PessoaDTO } from './pessoaDTO';


export interface ImovelDTO { 
    endereco?: string;
    id?: number;
    pessoa?: PessoaDTO;
    registro?: string;
    tipo?: string;
    tipoPagamento?: PagamentoDTO.TipoEnum;
}
