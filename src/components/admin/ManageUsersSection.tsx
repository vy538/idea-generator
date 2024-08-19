import React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { User } from '../../types';
import { setHasInviteCode } from '../../services/database';

interface Props {
  users: User[];
  onUpdateUser: (updatedUser: User) => void;
}

const ManageUsersSection: React.FC<Props> = ({ users, onUpdateUser }) => {
  const { t } = useTranslation();


const handleSendInvite = async (user: User) => {
    try {
      await setHasInviteCode(user.uid, true);
      onUpdateUser({ ...user, hasInviteCode: true });
    } catch (error) {
      console.error("Error sending invite:", error);
      // You might want to show an error message to the user here
    }
  };

  const handleCancelInvite = async (user: User) => {
    try {
      await setHasInviteCode(user.uid, false);
      onUpdateUser({ ...user, hasInviteCode: false });
    } catch (error) {
      console.error("Error cancelling invite:", error);
      // You might want to show an error message to the user here
    }
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
            {user.hasInviteCode ? (
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
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default ManageUsersSection;