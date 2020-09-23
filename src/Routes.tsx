import React, { FC } from 'react';
import Rocon, { useRoutes } from 'rocon/react';

const toplevelRoutes = Rocon.Path()
  .route('/foo', (route) => route.action(() => <p>FOO</p>))
  .route('/bar', (route) => route.action(() => <p>BAR</p>));

const Routes: FC = () => {
  return useRoutes(toplevelRoutes);
};

export default Routes;
