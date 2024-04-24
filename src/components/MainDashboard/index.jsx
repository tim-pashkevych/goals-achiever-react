// example:  <Icon id="plus" size={100} color="black" />;

import { SAccentedLink, SMainDashboard, SNothingFoundP } from './index.styled';

// board -> column -> note

// const board = null;
const board = { columns: [] };
// const board = {
//   columns: [
//     {
//       title: 'Title',
//       text: 'Text',
//       proirity: 'Low',
//       deadline: new Date(),
//     },
//   ],
// };

export const MainDashboard = () => {
  return (
    <SMainDashboard>
      {board ? (
        'addColumn'
      ) : board.columns.length === 0 ? (
        'addColumn'
      ) : (
        <SNothingFoundP>
          Before starting your project, it is essential
          <SAccentedLink href="#"> to create a board</SAccentedLink> to
          visualize and track all the necessary tasks and milestones. This board
          serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </SNothingFoundP>
      )}
    </SMainDashboard>
  );
};
