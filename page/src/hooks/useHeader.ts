import useNpmVersion from "@/hooks/useNpmVersion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useHeader = () => {
  const [locate, setLocate] = useState("en_US");
  const [isOpen, setIsOpen] = useState(false);
  const { neatUiVer } = useNpmVersion();
  const { i18n } = useTranslation();

  const openModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLanguage = (language: string) => {
    if (language === "한국어") setLocate("ko_KR");
    if (language === "English") setLocate("en_US");
    setIsOpen(false);
  };

  useEffect(() => {
    i18n.changeLanguage(locate);
  }, [locate]);

  return { neatUiVer, openModal, isOpen, handleLanguage };
};

export default useHeader;
