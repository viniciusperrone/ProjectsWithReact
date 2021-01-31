import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/theme/light';

import Header from './Header';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={light}>
        <div>
          <Header />
          <GlobalStyle />  
        </div>
        
      </ThemeProvider>
    </>
  );
}

export default App;
