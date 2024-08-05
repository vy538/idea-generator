// src/components/AdminIdeaItem.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Idea } from '../../types';
import {
  InputWrapper,
  Input,
  Button,
  DeleteButton
} from '../../styles/AdminPageStyles';
import { Body, H2 } from '../../styles/Typography';

interface Props {
  idea: Idea;
  onAddImage: (ideaEn: string, imageUrl: string) => void;
  onDeleteIdea: (ideaEn: string, category: string) => void;
}

const AdminIdeaItem: React.FC<Props> = ({ idea, onAddImage, onDeleteIdea }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <H2 lang={i18n.language as 'en' | 'zh'}>{idea.text.en} / {idea.text.zh}</H2>
      <Body lang={i18n.language as 'en' | 'zh'}>{t('admin.category')}: {t(`categories.${idea.category}`)}</Body>
      <InputWrapper>
        <Input
          type="text"
          placeholder={t('admin.imageUrlPlaceholder')}
          onBlur={(e) => onAddImage(idea.text.en, e.target.value)}
        />
        <Button onClick={() => onAddImage(idea.text.en, (document.querySelector('input') as HTMLInputElement).value)}>
          {t('admin.addImageButton')}
        </Button>
      </InputWrapper>
      <DeleteButton onClick={() => onDeleteIdea(idea.text.en, idea.category)}>
        {t('admin.deleteButton')}
      </DeleteButton>
    </>
  );
};

export default AdminIdeaItem;