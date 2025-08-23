import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type SupportedLanguage = "en" | "gu";

type Translations = Record<string, string>;

type TranslationMap = Record<SupportedLanguage, Translations>;

const translations: TranslationMap = {
  en: {
    // Language
    "language.label": "Language",
    "language.english": "English",
    "language.gujarati": "Gujarati",

    // Common
    "common.back": "Back to Home",
    "common.back.short": "Back",

    // Hero / Home
    "hero.logoAlt": "Grace Hospitality Logo",
    "hero.heading1": "Find Your Perfect",
    "hero.heading2": "Career Match",
    "hero.tagline": "Connecting talented professionals with exceptional opportunities in hospitality, healthcare, and beyond",
    "hero.jobSeeker": "I'm a Job Seeker",
    "hero.recruiter": "I'm a Recruiter",
    "hero.departments": "View Departments",
    "hero.jobSeeker.help": "Find your dream job",
    "hero.recruiter.help": "Hire top talent",
    "hero.departments.help": "Explore job categories",
    "hero.about.title": "About Us",
    "hero.about.body": "We bridge the gap between skilled professionals and leading organizations across hospitality, healthcare, home care, and more. With a strong network and proven process, we've helped hundreds of candidates find the right roles and supported companies in building reliable teams.",
    "hero.contact.title": "Contact Us",
    "hero.contact.phone": "Phone",
    "hero.contact.email": "Email",
    "hero.contact.address": "Address",
    "footer.copyright": "© 2024 Grace Hospitality & Manpower Supply. Connecting careers, building futures.",

    // Recruiter
    "recruiter.title": "Post a Job Opening",
    "recruiter.subtitle": "Find the perfect candidates for your organization",
    "recruiter.companyName": "Company Name *",
    "recruiter.contactName": "Contact Person *",
    "recruiter.email": "Email Address *",
    "recruiter.phone": "Phone Number *",
    "recruiter.jobTitle": "Job Title *",
    "recruiter.category": "Job Category *",
    "recruiter.location": "Location *",
    "recruiter.jobType": "Job Type *",
    "recruiter.salaryRange": "Salary Range",
    "recruiter.requirements": "Requirements & Qualifications *",
    "recruiter.description": "Job Description *",
    "recruiter.quantity": "Quantity",
    "recruiter.submit": "Post Job Opening",
    "recruiter.toast.title": "Job Posted Successfully!",
    "recruiter.toast.desc": "Your job posting has been submitted for review.",

    // Job Seeker
    "seeker.title": "Job Seeker Application",
    "seeker.subtitle": "Tell us about yourself and your career aspirations",
    "seeker.fullName": "Full Name *",
    "seeker.email": "Email Address *",
    "seeker.phone": "Phone Number *",
    "seeker.category": "Job Category *",
    "seeker.experience": "Years of Experience",
    "seeker.skills": "Key Skills & Qualifications",
    "seeker.message": "Additional Message",
    "seeker.uploadCv": "Upload Your CV",
    "seeker.submit": "Submit Application",
    "seeker.toast.title": "Application Submitted!",
    "seeker.toast.desc": "We'll review your application and get back to you soon.",
  },
  gu: {
    // Language
    "language.label": "ભાષા",
    "language.english": "અંગ્રેજી",
    "language.gujarati": "ગુજરાતી",

    // Common
    "common.back": "મુખપૃષ્ઠ પર પાછા જાઓ",
    "common.back.short": "પાછા",

    // Hero / Home
    "hero.logoAlt": "ગ્રેસ હૉસ્પિટાલિટી લોગો",
    "hero.heading1": "તમારો પરફેક્ટ",
    "hero.heading2": "કેરિયર મેળાપ",
    "hero.tagline": "હોસ્પિટાલિટી, હેલ્થકેર અને અન્ય ક્ષેત્રોમાં પ્રતિભાશાળી વ્યાવસાયિકોને ઉત્તમ તકોથી જોડવાનું",
    "hero.jobSeeker": "હું નોકરી શોધી રહ્યો/રહી છું",
    "hero.recruiter": "હું રિક્રૂટર છું",
    "hero.departments": "વિભાગો જુઓ",
    "hero.jobSeeker.help": "તમારી સપનાની નોકરી શોધો",
    "hero.recruiter.help": "શ્રેષ્ઠ પ્રતિભા ભાડે લો",
    "hero.departments.help": "જોબ કેટેગરીઝ તપાસો",
    "hero.about.title": "અમારા વિશે",
    "hero.about.body": "અમે પ્રતિભાશાળી વ્યાવસાયિકો અને આગેવાન સંસ્થાઓ વચ્ચેનો અંતર દૂર કરીએ છીએ. અમારી મજબૂત નેટવર્ક અને સાબિત પ્રક્રિયાથી, અમે સેકડો ઉમેદવારોને યોગ્ય ભૂમિકાઓ મેળવવામાં મદદ કરી છે અને કંપનીઓને વિશ્વસનીય ટીમો બનાવવા સહાય કરી છે.",
    "hero.contact.title": "અમારો સંપર્ક કરો",
    "hero.contact.phone": "ફોન",
    "hero.contact.email": "ઈમેલ",
    "hero.contact.address": "સરનામું",
    "footer.copyright": "© 2024 ગ્રેસ હૉસ્પિટાલિટી અને મેનપાવર સપ્લાઈ. કારકિર્દીઓ જોડીએ, ભવિષ્ય બનાવીએ.",

    // Recruiter
    "recruiter.title": "જોબ ઓપનિંગ પોસ્ટ કરો",
    "recruiter.subtitle": "તમારી સંસ્થામાં યોગ્ય ઉમેદવારો શોધો",
    "recruiter.companyName": "કંપનીનું નામ *",
    "recruiter.contactName": "સંપર્ક વ્યક્તિ *",
    "recruiter.email": "ઈમેલ સરનામું *",
    "recruiter.phone": "ફોન નંબર *",
    "recruiter.jobTitle": "જોબ ટાઇટલ *",
    "recruiter.category": "જોબ કેટેગરી *",
    "recruiter.location": "સ્થાન *",
    "recruiter.jobType": "જોબ પ્રકાર *",
    "recruiter.salaryRange": "પગાર રેન્જ",
    "recruiter.requirements": "માગણીઓ અને લાયકાત *",
    "recruiter.description": "જોબ વર્ણન *",
    "recruiter.quantity": "જરૂરી ઉમેદવારોની સંખ્યા",
    "recruiter.submit": "જોબ પોસ્ટ કરો",
    "recruiter.toast.title": "જોબ સફળતાપૂર્વક પોસ્ટ થઇ!",
    "recruiter.toast.desc": "તમારી જોબ પોસ્ટિંગ સમીક્ષામાં સબમિટ થઇ ગઈ છે.",

    // Job Seeker
    "seeker.title": "જોબ સીકર એપ્લિકેશન",
    "seeker.subtitle": "તમારા વિશે અને તમારા કારકિર્દી લક્ષ્યો જણાવો",
    "seeker.fullName": "પૂર્ણ નામ *",
    "seeker.email": "ઈમેલ સરનામું *",
    "seeker.phone": "ફોન નંબર *",
    "seeker.category": "જોબ કેટેગરી *",
    "seeker.experience": "અનુભવના વર્ષો",
    "seeker.skills": "મુખ્ય કુશળતાઓ અને લાયકાત",
    "seeker.message": "વધારાનો સંદેશ",
    "seeker.uploadCv": "તમારું CV અપલોડ કરો",
    "seeker.submit": "એપ્લિકેશન સબમિટ કરો",
    "seeker.toast.title": "એપ્લિકેશન સબમિટ થઇ!",
    "seeker.toast.desc": "અમે તમારી એપ્લિકેશનની સમીક્ષા કરી તરતજ સંપર્ક કરીશું.",
  },
};

interface I18nContextValue {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguage>(() => {
    const saved = localStorage.getItem("app_language");
    return (saved as SupportedLanguage) || "en";
  });

  useEffect(() => {
    localStorage.setItem("app_language", language);
    const html = document.documentElement;
    html.lang = language === "gu" ? "gu" : "en";
  }, [language]);

  const t = useMemo(() => {
    return (key: string) => translations[language][key] ?? translations["en"][key] ?? key;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}; 