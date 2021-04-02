export * from './imovelController.service';
import { ImovelControllerService } from './imovelController.service';
export * from './pagamentoController.service';
import { PagamentoControllerService } from './pagamentoController.service';
export const APIS = [ImovelControllerService, PagamentoControllerService];
