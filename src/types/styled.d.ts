import "styled-components";
import { Theme } from "@/lib/theme/lightTheme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
