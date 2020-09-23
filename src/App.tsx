import React, { FC, useMemo } from 'react';
import { createBrowserHistory } from 'history';
import Rocon, { RoconRoot, useRoutes } from 'rocon/react';

// import Routes from './Routes';

const toplevelRoutes = Rocon.Path()
  .route('foo', (route) => route.action(() => <p>FOO</p>))
  .route('bar', (route) => route.action(() => <p>BAR</p>));

const Routes: FC = () => {
  return useRoutes(toplevelRoutes);
};

const App: FC = () => {
  const history = useMemo(() => {
    return createBrowserHistory();
  }, []);
  return (
    <RoconRoot history={history}>
      <Routes />
    </RoconRoot>
  );
};

export default App;
