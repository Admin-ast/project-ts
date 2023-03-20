import React, { ReactElement } from "react";

interface Props {
  onSubmit: any;
  children: any;
}

function Form({ onSubmit, children }: Props): ReactElement {
  return (
    <form className="mb-0 space-y-6" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
