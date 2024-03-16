import React from "react";
import './app.scss';
import ErrorBoundary from "../error-boundary/error-boundary";
import FormPost from '../../components/form-post/form-post';
import Logo from '../../components/logo/logo';

const App = () => {
    return (
            <ErrorBoundary>
                <div className='base'>
                    <main className="wrapper">
                        <section className='section'>
                            <div className="section__container">
                                <Logo/>
                                <FormPost/>
                            </div>
                        </section>
                    </main>
                </div>
            </ErrorBoundary>
        )
}

export default App;

