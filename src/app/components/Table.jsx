import React from 'react';

export default function Table({ columns, renderRow, data }) {
  return (
    <table className='w-full mt-4'>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.accessor}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => renderRow(item))}
      </tbody>
    </table>
  );
}
