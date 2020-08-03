import React, { memo } from 'react';

// carbon core
import { TextArea } from 'carbon-components-react';

// carbon icon
import Close32 from '@carbon/icons-react/lib/close/32';

// components
import ButtonIcon from 'components/atoms/ButtonIcon';

function TodoCard({ text, placeholder, onChange, handleCloseForm, children }) {
  return (
    <div>
      <TextArea
        id="test2"
        labelText=""
        autoFocus
        onBlur={handleCloseForm}
        placeholder={placeholder}
        rows={3}
        value={text}
        onChange={onChange}
      />
      <div className="todoForm__button">
        {children}
        <ButtonIcon icon={Close32} onClick={handleCloseForm} />
      </div>
    </div>
  );
}

export default memo(TodoCard);
