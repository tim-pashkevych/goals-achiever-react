import { IMoveCardRequestBody } from '../../api';

interface IMoveCardByIdRequest {
  id: string;
  newCardBody: IMoveCardRequestBody;
}

export default IMoveCardByIdRequest;
