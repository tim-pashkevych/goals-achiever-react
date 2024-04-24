interface ICreateBoardThunkPayload {
  result: {
    owner: string;
    columns: [];
    title: string;
    icon: string;
    backgroundImage: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  };
}

export default ICreateBoardThunkPayload;
