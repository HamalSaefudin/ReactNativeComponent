import React from 'react';

export const navigation = React.createRef();

const navigate = (routename, params) => {
  if (!navigation.current) throw new Error('Navigation is Null');
  navigation.current.navigate(routename, params);
};

const Route = {
    navigate,
    CListView: 'Custom List View',
    ZaraCarousel: 'Zara Carousel',
    Biometric: 'Biometric',
    AccordionList: 'Accordion List',
    Reanimated2: 'Reanimated 2',
    Finance: 'Finance',
    SVG: 'Svg',
};

export default Route;