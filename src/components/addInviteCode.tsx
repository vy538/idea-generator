import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

const InviteCodeForm: React.FC = () => {
  const [inviteCode, setInviteCode] = useState('');
  const { addInviteCode } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addInviteCode(inviteCode);
    setInviteCode('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inviteCode}
        onChange={(e) => setInviteCode(e.target.value)}
        placeholder="Enter invite code"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InviteCodeForm;