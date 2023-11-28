import { createRaribleSdk } from '@rarible/sdk';

export const App = () => {
  createRaribleSdk(undefined, 'testnet');
  return <div></div>;
};
