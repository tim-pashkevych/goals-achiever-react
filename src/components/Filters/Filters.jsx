import { useState } from 'react';
import {
  SForm_ul,
  SItem_li,
  SLabelTitle_p,
  SLabelWrapper_div,
  SRadio_button,
  SShowAll_button,
  STitle_h3,
  SWrapper_div,
  Span,
} from './Filters.styled';
import { priority } from '../../constants';

export const Filters = () => {
  const [active, setActive] = useState(null);

  const handleChange = (title) => {
    if (title === active) return;

    setActive(title);
  };

  const handleShowAll = () => {
    setActive(null);
  };

  return (
    <SWrapper_div>
      <STitle_h3>Filters</STitle_h3>
      <SLabelWrapper_div>
        <SLabelTitle_p>Label color</SLabelTitle_p>
        <SShowAll_button onClick={handleShowAll}>show all</SShowAll_button>
      </SLabelWrapper_div>
      <SForm_ul>
        {priority.map((el, id) => (
          <SItem_li key={id}>
            <SRadio_button
              onClick={() => handleChange(el.title)}
              className={`${active === el.title ? 'active' : ''}`}
            >
              <Span
                className={`${active === el.title ? 'active' : ''}`}
                $color={el.color}
              ></Span>
              {el.title}
            </SRadio_button>
          </SItem_li>
        ))}
      </SForm_ul>
    </SWrapper_div>
  );
};
