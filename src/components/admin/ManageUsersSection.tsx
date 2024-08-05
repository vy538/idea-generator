// src/components/admin/ManageUsersSection.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Column, useTable } from 'react-table';
import { User } from '../../types';

interface Props {
  users: User[];
}

const ManageUsersSection: React.FC<Props> = ({ users }) => {
  const { t } = useTranslation();

const columns = React.useMemo<Column<User>[]>(
  () => [
    {
      Header: t('admin.users.email'),
      accessor: 'email',
    },
    {
      Header: t('admin.users.hasInviteCode'),
      accessor: 'hasInviteCode',
      Cell: ({ value }: { value: boolean }) => (value ? <span>✅</span> : <span>❌</span>),
    },
    {
      Header: t('admin.users.inviteCodeProvided'),
      accessor: 'inviteCodeProvided',
      Cell: ({ value }: { value: boolean }) => (value ? <span>✅</span> : <span>❌</span>),
    },
  ],
  [t]
);


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: users });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ManageUsersSection;