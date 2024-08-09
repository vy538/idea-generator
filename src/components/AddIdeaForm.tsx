// src/components/AddIdeaForm.tsx

import React from 'react';
import { Idea } from '../types';
import { FormWrapper, StyledSelect, StyledInput, SubmitButton } from '../styles/AddIdeaStyles';
import { useTranslation } from 'react-i18next';

interface AddIdeaFormProps {
  idea: Partial<Idea>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const AddIdeaForm: React.FC<AddIdeaFormProps> = ({ idea, handleChange, handleSubmit }) => {
  const { t } = useTranslation();

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <StyledSelect name="category" value={idea.category} onChange={handleChange}>
        <option value="adjective">{t('addIdea.categories.adjective')}</option>
        <option value="character">{t('addIdea.categories.character')}</option>
        <option value="location">{t('addIdea.categories.location')}</option>
        <option value="verb">{t('addIdea.categories.verb')}</option>
        <option value="element">{t('addIdea.categories.element')}</option>
      </StyledSelect>
      <StyledInput
        type="text"
        name="en"
        value={idea.text?.en || ''}
        onChange={handleChange}
        placeholder={t('addIdea.placeholders.english')}
      />
      <StyledInput
        type="text"
        name="zh"
        value={idea.text?.zh || ''}
        onChange={handleChange}
        placeholder={t('addIdea.placeholders.chinese')}
      />
      <SubmitButton type="submit">{t('addIdea.submit')}</SubmitButton>
    </FormWrapper>
  );
};

export default AddIdeaForm;