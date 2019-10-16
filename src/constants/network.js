import {Network, Networks} from 'stellar-sdk';

const NETWORK = {
  available: {
    test: {
      horizonURL: 'https://hz1-test.kuknos.org',
      networkPassphrase: 'Kuknos-NET'
    },
    public: {
      horizonURL: 'https://horizon.kuknos.org',
      networkPassphrase: 'Kuknos Foundation, Feb 2019'
    }
  },
  defaultName: 'test',
};
export default NETWORK;
