import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Idea } from "../types";
import {
  FormWrapper,
  StyledSelect,
  StyledInput,
  SubmitButton,
  TranslationPreview,
} from "../styles/AddIdeaStyles";
import { translateText } from "../services/azureTranslate";

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
  const [translatedText, setTranslatedText] = useState<string>("");
  const [isTranslating, setIsTranslating] = useState(false);
  console.log(idea);

  const ReadyToSubmit = () => {
    return idea.text?.en !== "" && idea.text?.zh !== "";
  };

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
            toLang === "en"
              ? (idea.text.en = translatedText)
              : (idea.text.zh = translatedText);
            setTranslatedText(translatedText);
          } catch (error) {
            console.error("Translation error:", error);
            setTranslatedText(t("addIdea.translationError"));
          } finally {
            setIsTranslating(false);
          }
        } else {
          setTranslatedText("");
        }
      }
    };

    translateIdea();
    // eslint-disable-next-line
  }, [idea.text, i18n.language, t]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    handleChange(e);
    if (e.target.name === "en" || e.target.name === "zh") {
      // Reset translated text when input changes
      setTranslatedText("");
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <StyledSelect
        name="category"
        value={idea.category}
        onChange={handleInputChange}
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
        onChange={handleInputChange}
        placeholder={t("addIdea.placeholders.primary")}
      />
      <TranslationPreview>
        {translatedText ? "" : t("addIdea.placeholders.translate")}
        {isTranslating ? t("addIdea.translating") : translatedText}
      </TranslationPreview>
      <SubmitButton disabled={!ReadyToSubmit()} type="submit">
        {t("addIdea.submit")}
      </SubmitButton>
    </FormWrapper>
  );
};

export default AddIdeaForm;
