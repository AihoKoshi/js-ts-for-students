type StreetType = {
    title: string
}
export type AddressType = {
    number?: number
    street: StreetType
}
export type GovernmentBuildingsType = {
    id?: string
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}
export type HouseType = {
    id?: string
    builtAt: number
    repaired: boolean
    address: AddressType
}

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizensNumber: number
}