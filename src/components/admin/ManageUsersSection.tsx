// src/components/admin/ManageUsersSection.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Column, useTable } from 'react-table';
import { User } from '../../types';
import { setInviteCode } from '../../services/database';
import { copyToClipboard } from '../../utils/clipboard';

interface Props {
  users: User[];
  onUpdateUser: (updatedUser: User) => void;
}

const ManageUsersSection: React.FC<Props> = ({ users, onUpdateUser }) => {
  const { t } = useTranslation();

  const generateInviteCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleSendInvite = async (user: User) => {
    const inviteCode = generateInviteCode();
    await setInviteCode(user.uid, inviteCode);
    onUpdateUser({ ...user, inviteCode, hasInviteCode: true });
  };

  const handleCancelInvite = async (user: User) => {
    await setInviteCode(user.uid, '');
    onUpdateUser({ ...user, inviteCode: undefined, hasInviteCode: false });
  };

  const columns = React.useMemo<Column<User>[]>(
    () => [
      {
        Header: t('admin.users.name'),
        accessor: 'name',
      },
      {
        Header: t('admin.users.email'),
        accessor: 'email',
      },
      {
        Header: t('admin.users.role'),
        accessor: 'role',
      },
      {
        Header: t('admin.users.inviteCode'),
        accessor: 'inviteCode',
        Cell: ({ row }: { row: { original: User } }) => (
        <div>
          {row.original.hasInviteCode && row.original.inviteCode ? (
            <>
              <span>{row.original.inviteCode}</span>
              <button onClick={() => copyToClipboard(row.original.inviteCode!)}>
                {t('admin.users.copyInvite')}
              </button>
              <button onClick={() => handleCancelInvite(row.original)}>
                {t('admin.users.cancelInvite')}
              </button>
            </>
          ) : (
            <button onClick={() => handleSendInvite(row.original)}>
              {t('admin.users.sendInvite')}
            </button>
          )}
        </div>
        ),
      },
    ],
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [t]);

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