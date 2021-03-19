import React, {useState} from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import AboutPage from '../../pages/AboutPage/AboutPage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import HomePage from '../../pages/HomePage/HomePage';
import { OnboardingContext } from '../../pages/OnboardingPage/OnboardingContext/OnboardingContext';
import OnboardingPage from '../../pages/OnboardingPage/OnboardingPage';
import ProjectsPage from '../../pages/ProjectsPage/ProjectsPage';



export function Routes() {

    const [isOnboard, setOnboard] = useState(false);

    return (
        <Switch>
        <Route path="/about">
        <AboutPage></AboutPage>
        </Route>
        <Route path="/projects">
        <ProjectsPage></ProjectsPage>
        </Route>
        <Route path="/contact">
        <ContactPage></ContactPage>
        </Route>
            <Route exact path={'/'}>
            <OnboardingContext.Provider value={{isOnboard, setOnboard}}>
                <OnboardingPage></OnboardingPage>
                <HomePage></HomePage>
            </OnboardingContext.Provider>
            </Route>

            <Route path="*">
                <h3>404</h3>
            </Route>
        </Switch>
    )
}
