import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import joinPath from 'join-path';

const DefaultComponent = lazy(() => import('./components/default'));
const EditComponent = lazy(() => import('./components/edit'));
const AddComponent = lazy(() => import('./components/add'));
const Loading = () => 'Loading...';

const Routes = ({ match, location }) => {
    console.log(match, location);
    const matchUrl = match.url;
    return <Suspense fallback={<Loading />}>
        <Switch>
            <Route path={joinPath(matchUrl, 'edit')} component={EditComponent} />
            <Route path={joinPath(matchUrl, 'add')} component={AddComponent} />
            <Route path={matchUrl} component={DefaultComponent} />
            {/* <Route path={'/add'} component={EditComponent} />
            <Route path={`/edit`} component={AddComponent} />
            <Route path={matchUrl} component={DefaultComponent} /> */}
        </Switch>
    </Suspense>
}

//export default Routes;
export default withRouter(Routes);
