import { useI18n } from "@/i18n/I18nProvider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Props = {
  inline?: boolean;
  className?: string;
};

const LanguageSwitcher = ({ inline = false, className }: Props) => {
  const { language, setLanguage, t } = useI18n();

  const containerClass = inline
    ? cn("inline-block", className)
    : cn("fixed top-4 right-4 z-50", className);

  return (
    <div className={containerClass}>
      <Select value={language} onValueChange={(val) => setLanguage(val as any)}>
        <SelectTrigger className="w-44 bg-card border shadow-md">
          <SelectValue placeholder={t("language.label")} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t("language.english")}</SelectItem>
          <SelectItem value="gu">{t("language.gujarati")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher; 