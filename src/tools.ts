export function validateHexColor(hex: string): boolean {
  const regex = /#(?:[0-9a-fA-F]{3,4}){1,2}/;
  return regex.test(hex);
}

export function parseHexColor(hex: string): [number, number, number, number] {
  if (!validateHexColor(hex)) {
    console.error(
      `Error (tools.ts) parseHexColor(): "${hex}" is not a valid color code.`
    );
    return [0, 0, 0, 0];
  }
  const r = Number('0x' + hex[1] + hex[2]);
  const g = Number('0x' + hex[3] + hex[4]);
  const b = Number('0x' + hex[5] + hex[6]);
  const a = Number('0x' + hex[7] + hex[8]);
  return [r, g, b, a];
}
