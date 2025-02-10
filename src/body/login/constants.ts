export enum UserRoleEnum {
  Farmer = '1',
  Aggregator = '2',
  Transportation = '3',
}

export const UserRoles = [
  {
    label: 'Farmer',
    value: UserRoleEnum.Farmer,
  },
  {
    label: 'Aggregator',
    value: UserRoleEnum.Aggregator,
  },
  {
    label: 'Transportation',
    value: UserRoleEnum.Transportation,
  },
];
