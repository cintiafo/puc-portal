import { ImovelDTO } from '../api/model/imovelDTO';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ImovelDataService {

    private source = new BehaviorSubject<ImovelDTO[]>([]);
    imoveis = this.source.asObservable()
    
    constructor() { }
    
    changList(imoveis: ImovelDTO[]) {
      this.source.next(imoveis);
    }
}