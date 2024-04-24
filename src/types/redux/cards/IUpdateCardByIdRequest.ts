import { IUpdateCardRequestBody } from '../../api';

interface IUpdateCardByIdRequest {
  id: string;
  newCardBody: IUpdateCardRequestBody;
}

export default IUpdateCardByIdRequest;
