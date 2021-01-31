import 'styled-components';

declare module 'styled-components' {
  export default interface DefaultTheme {
    title: string;

    colors: {
      primary: string,
      secundary: string,

      background: string,
      text: string
    }
  }
}