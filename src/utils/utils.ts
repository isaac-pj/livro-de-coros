export function inicialize(vector: any[], size: number, value: any) {
  for (let i = 0; i < size; i++) {
    vector[i] = value;
  }
  return vector;
}