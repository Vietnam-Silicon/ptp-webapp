export enum UserRoleEnum {
  Farmer = '1',
  LogisticTruckFarm = '2',
  AggregatorReceiving = '3',
  AggregatorPacking = '4',
  LogisticsTruckContainer = '5',
  ExportCustoms = '6',
  ImportCustom = '7',
  Distributor = '8',
  LogisticsTruckDistributor = '9',
  Retail = '10',
}

export const UserRoles = [
  {
    label: 'Farmer',
    value: UserRoleEnum.Farmer,
  },

  {
    label: 'Logistics (Truck from Farm)',
    value: UserRoleEnum.LogisticTruckFarm,
  },
  {
    label: 'Aggregator (Receiving)',
    value: UserRoleEnum.AggregatorReceiving,
  },
];
