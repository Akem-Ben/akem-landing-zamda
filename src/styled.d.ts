import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      card: string;
      text: string;
      muted: string;
      primary: string;
      primaryHover: string;
    };
  }
}