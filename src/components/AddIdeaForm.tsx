// src/components/AddIdeaForm.tsx

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Idea } from "../types";
import {
  FormWrapper,
  StyledSelect,
  StyledInput,
  SubmitButton,
} from "../styles/AddIdeaStyles";
import { translateText } from "../services/azureTranslate";
import { Autocomplete, TextField } from "@mui/material";

interface AddIdeaFormProps {
  idea: Partial<Idea>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const AddIdeaForm: React.FC<AddIdeaFormProps> = ({
  idea,
  handleChange,
  handleSubmit,
}) => {
  const { t, i18n } = useTranslation();
  const [translatedOptions, setTranslatedOptions] = useState<string[]>([]);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    const translateIdea = async () => {
      if (idea.text) {
        const fromLang = i18n.language === "en" ? "en" : "zh-Hant";
        const toLang = i18n.language === "en" ? "zh-Hant" : "en";
        const textToTranslate =
          i18n.language === "en" ? idea.text.en : idea.text.zh;

        if (textToTranslate && textToTranslate.length > 0) {
          setIsTranslating(true);
          try {
            const translatedText = await translateText(
              textToTranslate,
              fromLang,
              toLang
            );
            setTranslatedOptions([translatedText]);
          } catch (error) {
            console.error("Translation error:", error);
          } finally {
            setIsTranslating(false);
          }
        }
      }
    };

    translateIdea();
  }, [idea.text, i18n.language]);

  const handleAutocompleteChange = (
    event: React.SyntheticEvent,
    value: string | null
  ) => {
    if (value) {
      const name = i18n.language === "en" ? "zh" : "en";
      handleChange({
        target: { name, value },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <StyledSelect
        name="category"
        value={idea.category}
        onChange={handleChange}
      >
        <option value="adjective">{t("addIdea.categories.adjective")}</option>
        <option value="character">{t("addIdea.categories.character")}</option>
        <option value="location">{t("addIdea.categories.location")}</option>
        <option value="verb">{t("addIdea.categories.verb")}</option>
        <option value="element">{t("addIdea.categories.element")}</option>
      </StyledSelect>
      <StyledInput
        type="text"
        name={i18n.language === "en" ? "en" : "zh"}
        value={
          i18n.language === "en" ? idea.text?.en || "" : idea.text?.zh || ""
        }
        onChange={handleChange}
        placeholder={t("addIdea.placeholders.primary")}
      />
      <Autocomplete
        options={translatedOptions}
        loading={isTranslating}
        onChange={handleAutocompleteChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label={t("addIdea.placeholders.translated")}
            variant="outlined"
          />
        )}
      />
      <SubmitButton type="submit">{t("addIdea.submit")}</SubmitButton>
    </FormWrapper>
  );
};

export default AddIdeaForm;
