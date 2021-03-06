import * as React from 'react';

import { DemoPage } from '../DemoPage';
import { ShimmerPageProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/Shimmer/Shimmer.doc';

export const ShimmerPage = (props: { isHeaderVisible: boolean }) => (
  <DemoPage
    jsonDocs={require('@uifabric/api-docs/lib/pages/office-ui-fabric-react/Shimmer.page.json')}
    {...{ ...ShimmerPageProps, ...props }}
  />
);
