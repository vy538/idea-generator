// src/components/UploadCreationForm.tsx

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormWrapper, StyledInput, StyledSelect, SubmitButton } from '../styles/AddIdeaStyles';
import { ImagePreview, IdeaReferenceWrapper, SocialMediaInput, CategorySelectionWrapper } from '../styles/UploadCreationStyles';
import { IdeaReference, Category, Idea, SocialMedia } from '../types';

interface UploadCreationFormProps {
  onSubmit: (imageFile: File, ideaReferences: IdeaReference[], socialMedia: SocialMedia[]) => void;
  isUploading: boolean;
  ideas: Record<Category, Idea[]>;
}

const UploadCreationForm: React.FC<UploadCreationFormProps> = ({ onSubmit, isUploading, ideas }) => {
  const { t, i18n } = useTranslation();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([
    { platform: 'instagram', handle: '' },
    { platform: 'github', handle: '' },
    { platform: 'twitter', handle: '' },
    { platform: 'threads', handle: '' },
  ]);
  const [selectedIdeas, setSelectedIdeas] = useState<Record<Category, string>>({
    adjective: '',
    character: '',
    location: '',
    verb: '',
    element: '',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleIdeaSelection = (category: Category, id: string) => {
    setSelectedIdeas(prev => ({ ...prev, [category]: id }));
  };

  const handleSocialMediaChange = (platform: string, handle: string) => {
    setSocialMedia(prev => prev.map(sm => 
      sm.platform === platform ? { ...sm, handle } : sm
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (imageFile) {
      const ideaReferences: IdeaReference[] = Object.entries(selectedIdeas)
        .filter(([_, id]) => id !== '')
        .map(([category, id]) => ({ category: category as Category, id }));
      const filteredSocialMedia = socialMedia.filter(sm => sm.handle !== '');
      onSubmit(imageFile, ideaReferences, filteredSocialMedia);
    }
  };

  const categories: Category[] = ['adjective', 'character', 'location', 'verb', 'element'];

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <StyledInput
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
      />
      {previewUrl && <ImagePreview src={previewUrl} alt="Preview" />}

      <IdeaReferenceWrapper>
        {categories.map((category) => (
          <CategorySelectionWrapper key={category}>
            <label>{t(`categories.${category}`)}</label>
            <StyledSelect
              value={selectedIdeas[category]}
              onChange={(e) => handleIdeaSelection(category, e.target.value)}
            >
              <option value="">{t('uploadCreation.selectIdea')}</option>
              {ideas[category]?.map((idea) => (
                <option key={idea.text.en} value={idea.text.en}>
                  {i18n.language.startsWith('zh') ? idea.text.zh : idea.text.en}
                </option>
              ))}
            </StyledSelect>
          </CategorySelectionWrapper>
        ))}
          </IdeaReferenceWrapper>
          
            
      {socialMedia.map((sm) => (
        <SocialMediaInput key={sm.platform}>
          <label>{t(`uploadCreation.${sm.platform}Placeholder`)}</label>
          <StyledInput
            type="text"
            placeholder={t(`uploadCreation.${sm.platform}Placeholder`)}
            value={sm.handle}
            onChange={(e) => handleSocialMediaChange(sm.platform, e.target.value)}
          />
        </SocialMediaInput>
      ))}

      <SubmitButton type="submit" disabled={isUploading}>
        {isUploading ? t('uploadCreation.uploading') : t('uploadCreation.submit')}
      </SubmitButton>
    </FormWrapper>
  );
};

export default UploadCreationForm;