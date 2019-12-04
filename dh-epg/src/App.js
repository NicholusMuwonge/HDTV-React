import React, { Fragment, lazy, Suspense } from "react";
import "./App.css";
import Contents from "./Content/Contents";


// const Content = lazy(() => import('./Content/Contents'))
const App = () => (

    // <Suspense fallback={<h3 style={{
    //     margin: '20% 40% 50% ',
    //     color:"grey"
    // }}>Loading…</h3>}>
        <Contents />
    // </Suspense>
);

export default App;
