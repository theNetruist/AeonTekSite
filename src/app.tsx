import { ThemeProvider } from '@emotion/react';
import { Provider } from 'inversify-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reflect-metadata';
import './app.css';
import Cover from './components/cover/cover';
import Footer from './components/footer';
import theme from './defaultTheme';
import DIContainer from './diContainer';

const App: React.FC = (props) => {
    const container = new DIContainer().container;

    return (
        <>
            <Provider container={container}>
                <ThemeProvider theme={theme}>
                    <main>
                        <Cover />
                    </main>
                    <Footer />
                </ThemeProvider>
            </Provider>
        </>
    );
};

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
