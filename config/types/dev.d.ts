/**
 * Type declarations for global development variables
 */

interface Window {
  // A hack for the Redux DevTools Chrome extension.
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <F extends Function>(f: F) => F;
  __INITIAL_STATE__?: any;
}

interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number | Array<number>;
  disabled?: string;
  tooltip?: string;
  change?: () => void;
  handleChange?: () => void;
  slideStop?: () => void;
}

declare class ReactBootstrapSlider extends React.Component<SliderProps, {}> { }

declare module "recharts" {
  export const BarChart: any;
  export const Bar: any;
  export const Tooltip: any;
  export const Legend: any;
  export const Area: any;
  export const AreaChart: any;
  export const LineChart: any;
  export const Line: any;
  export const XAxis: any;
  export const YAxis: any;
  export const CartesianGrid: any;
  export const ResponsiveContainer: any;
}
