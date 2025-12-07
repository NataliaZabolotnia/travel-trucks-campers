export const EQUIPMENT_KEYS = [
  'AC',
  'bathroom',
  'kitchen',
  'TV',
  'radio',
  'refrigerator',
  'microwave',
  'gas',
  'water',
  'automatic',
] as const;

export type EquipmentKey = (typeof EQUIPMENT_KEYS)[number];
