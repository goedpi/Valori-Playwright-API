import { TypeOption } from "./TypeOption"
import { CompanyCatalogCarOption } from "./companyCatalogCarOption"
import { Extension } from "./Extension"
export class Value {
    ID: number
    DataSourceID: number
    OEMID: string
    ENName: string
    NLName: string
    Category: string
    PRCode: string
    Code: string
    ModelName: string
    OEMExtendedCode: string
    ENCommercialName: string
    NLCommercialName: string
    RGBRed?: string
    RGBGreen?: string
    RGBBlue?: string
    RGB2Red?: string
    RGB2Green?: string
    RGB2Blue?: string
    Tags: string
    Keywords: string
    ENTags: string
    ENKeywords: string
    IsForDealer: boolean
    Forced: boolean
    ForceDeselectable: boolean
    ENPacktetContent?: string
    NLPacketContent?: string
    TrimlineOverviewSequenceNumber: number
    TypeOptions?: TypeOption[]
    CompanyCatalogCarOptions: CompanyCatalogCarOption[]
    Extensions?: Extension[]
  }