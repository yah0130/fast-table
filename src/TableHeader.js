import React from 'react';
import PropTypes from 'prop-types';
import TableHeaderCell from './TableHeaderCell';

export default function TableHeader(props, {table}) {
  const {columns, orders, onSort, fixed} = props;
  const {headerRowHeight} = table.props;
  const components = table.components;
  const HeaderWrapper = components.header.wrapper;
  const HeaderRow = components.header.row;
  return (
    <HeaderWrapper className='thead'>
      <HeaderRow className='tr'>
        {columns.map((column, index) => (
          <TableHeaderCell
            key={index}
            index={index}
            fixed={fixed}
            headerRowHeight={headerRowHeight}
            column={column}
            columns={columns}
            components={components}
            orders={orders}
            onSort={onSort}
          />
        ))}
      </HeaderRow>
    </HeaderWrapper>
  );
}

TableHeader.contextTypes = {
  table: PropTypes.any
};

