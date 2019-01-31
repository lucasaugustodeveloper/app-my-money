import React from 'react';

export default props => (
  <li className="treeView">
    <a href>
      <span className={`fa fa-${props.icon}`} />
      {props.label}
      <span className="fa fa-angle-left pull-right" />
    </a>
    <ul className="treeview-menu">{props.children}</ul>
  </li>
);
