declare module "react-simple-maps" {
  import * as React from "react";

  export interface ComposableMapProps extends React.SVGProps<SVGSVGElement> {
    projection?: string | ((...args: any[]) => any);
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
      rotate?: [number, number, number];
      parallels?: [number, number];
    };
    width?: number;
    height?: number;
  }

  export interface GeographiesProps {
    geography: string | Record<string, any> | string[];
    children: (data: { geographies: any[] }) => React.ReactNode;
  }

  export interface GeographyProps extends Omit<React.SVGProps<SVGPathElement>, "style"> {
    geography: any;
    style?: {
      default?: React.CSSProperties & { outline?: string };
      hover?: React.CSSProperties & { outline?: string };
      pressed?: React.CSSProperties & { outline?: string };
    };
  }

  export interface MarkerProps extends React.SVGProps<SVGGElement> {
    coordinates: [number, number];
  }

  export interface LineProps extends React.SVGProps<SVGLineElement> {
    from: [number, number];
    to: [number, number];
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
  export const Marker: React.FC<MarkerProps>;
  export const Line: React.FC<LineProps>;
}
