import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { User } from '../../types';
import { setInviteCode } from '../../services/database';

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

  const columns: GridColDef[] = [
    { field: 'name', headerName: t('admin.users.name'), width: 150 },
    { field: 'email', headerName: t('admin.users.email'), width: 200 },
    { field: 'role', headerName: t('admin.users.role'), width: 100 },
    {
      field: 'inviteCode',
      headerName: t('admin.users.inviteCode'),
      width: 250,
      renderCell: (params: GridRenderCellParams) => {
        const user = params.row as User;
        return (
          <Box>
            {user.hasInviteCode && user.inviteCode ? (
              <>
                <Button size="small" onClick={() => handleCancelInvite(user)}>
                  {t('admin.users.cancelInvite')}
                </Button>
              </>
            ) : (
              <Button size="small" onClick={() => handleSendInvite(user)}>
                {t('admin.users.sendInvite')}
              </Button>
            )}
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row.uid}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default ManageUsersSection;