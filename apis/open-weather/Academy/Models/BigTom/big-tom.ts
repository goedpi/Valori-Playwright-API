import { CompanyCatalogCar } from "./CompanyCatalogCar"
import {Value} from "./Value"
export interface BigTom {
    "@odata.context": string
    value: Value[]
    companycatalogcar:CompanyCatalogCar
    
  }