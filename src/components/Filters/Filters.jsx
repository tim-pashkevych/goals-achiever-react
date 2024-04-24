import { useState } from 'react';
import {
  SForm_ul,
  SItem_li,
  SLabelTitle_p,
  SLabelWrapper_div,
  SShowAll_p,
  STitle_h3,
  SWrapper_div,
  Span,
} from './Filters.styled';
import { priority } from '../../constants';

export const Filters = () => {
  const [active, setActive] = useState(null);

  const handleClick = (title) => {
    if (title === active) {
      setActive(null);
      return;
    }
    setActive(title);
  };
  console.log(active);
  return (
    <SWrapper_div>
      <STitle_h3>Filters</STitle_h3>
      <SLabelWrapper_div>
        <SLabelTitle_p>Label color</SLabelTitle_p>
        <SShowAll_p>show all</SShowAll_p>
      </SLabelWrapper_div>
      <SForm_ul>
        {priority.map((el, id) => (
          <SItem_li
            key={id}
            onClick={() => handleClick(el.title)}
            className={`${active === el.title ? 'active' : ''}`}
          >
            <Span
              className={`${active === el.title ? 'active' : ''}`}
              $color={el.color}
            ></Span>
            {el.title}
          </SItem_li>
        ))}
      </SForm_ul>
    </SWrapper_div>
  );
};
