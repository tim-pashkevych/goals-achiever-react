import { IUpdateColumnRequestBody } from '../../api';

interface IUpdateColumnByIdRequest {
  id: string;
  newColumnBody: IUpdateColumnRequestBody;
}

export default IUpdateColumnByIdRequest;
