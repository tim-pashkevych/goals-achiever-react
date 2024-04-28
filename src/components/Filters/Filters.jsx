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
import { firstLetterToUpperCase } from '../../helpers/firstLetterToUpperCase';

export const Filters = ({ filter, setFilter }) => {
  const handleChange = (title) => {
    if (title === filter) return;
    setFilter(title);
  };

  const handleShowAll = () => {
    setFilter(null);
  };

  return (
    <SWrapper_div>
      <STitle_h3>Filters</STitle_h3>
      <SLabelWrapper_div>
        <SLabelTitle_p>Label color</SLabelTitle_p>
        <SShowAll_button onClick={handleShowAll}>Show all</SShowAll_button>
      </SLabelWrapper_div>
      <SForm_ul>
        {priority.map((el, id) => (
          <SItem_li key={id}>
            <SRadio_button
              onClick={() => handleChange(el.title)}
              className={`${filter === el.title ? 'active' : ''}`}
            >
              <Span
                className={`${filter === el.title ? 'active' : ''}`}
                $color={el.color}
              ></Span>
              {el.title === 'without'
                ? firstLetterToUpperCase(`${el.title} priority`)
                : firstLetterToUpperCase(el.title)}
            </SRadio_button>
          </SItem_li>
        ))}
      </SForm_ul>
    </SWrapper_div>
  );
};
