export const ADMIN_TYPE_MINISTRIES = 1;
export const ADMIN_TYPE_ANTICORRUPTION_ADMINS = 2;
export const ADMIN_TYPE_COUNTIES = 3;

export interface MyLocation {
  pathname: string;
  query?: any;
}

export interface RouteParams {
  id: string; // indicator ID
  mid?: string; // admin type item id, ie ministry ID or county ID
}

// path for ministry, prefix m
export function mreportPath(indicatorId: number, itemId?: number, query?: any): MyLocation {
  let pathname = `${process.env.BASE_URL}report/${indicatorId}/${ADMIN_TYPE_MINISTRIES}`;

  if (itemId) {
    pathname += `/${itemId}`;
  }

  return {pathname, query};
}

// path for Independence, prefix i
export function ireportPath(indicatorId: number, itemId?: number, query?: any): MyLocation {
  let pathname = `${process.env.BASE_URL}report/${indicatorId}/${ADMIN_TYPE_ANTICORRUPTION_ADMINS}`;

  if (itemId) {
    pathname += `/${itemId}`;
  }

  return {pathname, query};
}

// path for county, prefix c
export function creportPath(indicatorId: number, itemId?: number, query?: any): MyLocation {
  let pathname = `${process.env.BASE_URL}report/${indicatorId}/${ADMIN_TYPE_COUNTIES}`;

  if (itemId) {
    pathname += `/${itemId}`;
  }

  return {pathname, query};
}

export function selAdminPath(indId: number, query?: any): MyLocation {
  return {pathname: `${process.env.BASE_URL}selectAdministration/${indId}`, query};
}

export function routePath(pathname, query?): MyLocation {
  return {pathname, query};
}

export function parseCategoryId(path: string): number {
  const result = path.match(/\/report\/(\d+)/);

  if (result) {
    return parseInt(result[1], 10);
  } else {
    return 0;
  }
}

export function parseAdminTypeId(path: string): number {
  const result = path.match(/\/report\/(\d+)\/(\d+)/);

  if (result) {
    return parseInt(result[2], 10);
  } else {
    return 0;
  }
}

export function parseAdminId(path: string): number {
  const result = path.match(/\/report\/(\d+)\/(\d+)\/(\d+)/);

  if (result) {
    return parseInt(result[3], 10);
  } else {
    return 0;
  }
}
