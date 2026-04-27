export function deleteFields<Type extends Record<string, unknown>>(data: Type, fields: (keyof Type)[]) {
  for (const field of fields) {
    delete data[field];
  }
  return data;
}
