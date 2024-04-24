import {
  SAccentedLink,
  SNothingFoundP,
  SWrapper_div,
} from './NothitnFound.styled';

export const NothinFound = () => {
  return (
    <SWrapper_div>
      <SNothingFoundP>
        Before starting your project, it is essential
        <SAccentedLink href="#"> to create a board</SAccentedLink> to visualize
        and track all the necessary tasks and milestones. This board serves as a
        powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </SNothingFoundP>
    </SWrapper_div>
  );
};
