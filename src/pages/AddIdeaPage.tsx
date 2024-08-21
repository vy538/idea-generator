// In AddIdeaPage.tsx

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Idea, Category, Language } from "../types";
import AddIdeaForm from "../components/AddIdeaForm";
import { H1, Body } from "../styles/Typography";
import { addIdea } from "../services/database";
import { AddIdeaPageWrapper } from "../styles/LayoutStyles";
import { useAuthContext } from "../hooks/AuthContext";

const AddIdeaPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { user, hasInviteCode, userRole } = useAuthContext();
  const [idea, setIdea] = useState<Omit<Idea, "image">>({
    category: "adjective",
    text: { en: "", zh: "" },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("handleSubmit", e);
    e.preventDefault();
    if (idea.category && idea.text?.en && idea.text?.zh) {
      try {
        const lowerCaseIdea = {
          ...idea,
          text: {
            en: idea.text?.en.toLowerCase(),
            zh: idea.text?.zh,
          },
        };
        await addIdea(idea.category, lowerCaseIdea);
        setIdea({ category: "adjective", text: { en: "", zh: "" } });
        alert(t("addIdea.success"));
      } catch (error) {
        console.error("Error adding idea:", error);
        alert(t("addIdea.error"));
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log("handleChange", e);
    const { name, value } = e.target;
    if (name === "category") {
      setIdea((prevIdea) => ({ ...prevIdea, category: value as Category }));
    } else if (name === "en" || name === "zh") {
      setIdea((prevIdea) => ({
        ...prevIdea,
        text: { ...prevIdea.text, [name]: value } as Language,
      }));
    }
  };

  if (!user) {
    return (
      <AddIdeaPageWrapper>
        <Body lang={i18n.language as "en" | "zh"}>
          {t("addIdea.loginRequired")}
        </Body>
      </AddIdeaPageWrapper>
    );
  }

  if (!hasInviteCode && userRole !== "admin") {
    return (
      <AddIdeaPageWrapper>
        <Body lang={i18n.language as "en" | "zh"}>
          {t("addIdea.inviteRequired")}
        </Body>
      </AddIdeaPageWrapper>
    );
  }

  return (
    <AddIdeaPageWrapper>
      <H1 lang={i18n.language as "en" | "zh"}>{t("addIdea.title")}</H1>
      <AddIdeaForm
        idea={idea}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </AddIdeaPageWrapper>
  );
};

export default AddIdeaPage;
