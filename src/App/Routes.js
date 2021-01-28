import React from 'react';

export const navigation = React.createRef();

const navigate = (routename, params) => {
  if (!navigation.current) throw new Error('Navigation is Null');
  navigation.current.navigate(routename, params);
};

const Route = {
    navigate,
};

export default Route;