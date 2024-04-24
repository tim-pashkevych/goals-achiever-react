import { IUpdateBoardRequestBody } from '../../api';

interface IUpdateBoardByIdRequest {
  id: string;
  newBoardBody: IUpdateBoardRequestBody;
}

export default IUpdateBoardByIdRequest;
