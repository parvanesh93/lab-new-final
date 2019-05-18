import {Network, Networks} from 'stellar-sdk';

const NETWORK = {
  available: {
    test: {
      horizonURL: 'https://hz1-test.kuknos.org:8006',
      networkPassphrase: 'Kuknos-NET'
    },
    public: {
      horizonURL: 'https://hz1-test.kuknos.org:8006',
      networkPassphrase: 'Kuknos-NET'
    }
  },
  defaultName: 'test',
};
export default NETWORK;
