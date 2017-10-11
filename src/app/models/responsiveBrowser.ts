export interface ResponsiveBreakpointsValues {
  extraSmall: number;
  small: number;
  medium: number;
  large: number;
  extraLarge: number;
}

export interface ResponsiveBreakpointsResults {
  extraSmall: boolean;
  small: boolean;
  medium: boolean;
  large: boolean;
  extraLarge: boolean;
}

export interface ResponsiveBrowser {
  mediaType: string;  // The largest breakpoint category that the browser satisfies.
  orientation: string;  // The browser orientation. Has three possible values: "portrait", "landscape", or null.
  lessThan: ResponsiveBreakpointsResults;  // An object of booleans that indicate
  // whether the browser is currently less than a particular breakpoint.
  greaterThan: ResponsiveBreakpointsResults;  // An object of booleans
  greaterThanOrEqual: ResponsiveBreakpointsResults;  // An object of booleans
  // that indicate whether the browser is currently greater than a particular breakpoint.
  is: ResponsiveBreakpointsResults;  // An object of booleans
  // that indicate whether the browser is current that particular breakpoint.
  width: number;
  breakpoints: ResponsiveBreakpointsValues;
}
