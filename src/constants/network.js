import {Network, Networks} from 'stellar-sdk';

const NETWORK = {
  available: {
    test: {
      horizonURL: 'https://horizon.kuknos.org:8000',
      networkPassphrase: 'Kuknos-NET'
    },
    public: {
      horizonURL: 'https://horizon.kuknos.org:8000',
      networkPassphrase: 'Kuknos-NET'
    }
  },
  defaultName: 'test',
};
export default NETWORK;
