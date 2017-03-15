
// itemId: county_id or ministry_id
export function report_path(indicatorId: number, institutionId?: number, itemId?: number): string {
  let result = `/report/${indicatorId}`;

  if (institutionId) {
    result += `/${institutionId}`;
  }

  if (itemId) {
    result += `/${itemId}`;
  }

  return result;
}
