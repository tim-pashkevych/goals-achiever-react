import { GenericAbortSignal } from 'axios';

interface IRefreshCredentials {
  data: {
    refreshToken: string;
  };
  signal: GenericAbortSignal;
}

export default IRefreshCredentials;
