import { ReactNode, createContext } from 'react';

export type languageType = 'zh' | 'en';
export interface ReactI18nProps {
  zhValue: Record<string, string>;
  enValue: Record<string, string>;
  children: React.ReactNode;
}
export interface contextValue {
  i18n: I18n;
}
export const reactI18nContext = createContext<contextValue | null>(null);
export type I18n = (key: string, type: languageType) => ReactNode;

const defaultLanguageType = 'en';

const Index: React.FC<ReactI18nProps> = (props) => {
  const { children, zhValue, enValue } = props;
  const { Provider } = reactI18nContext;
  /**
   * @description key 对应键, type 语言类型 默认en
   */
  const i18n = (key: string, type: languageType): string | undefined => {
    const i18nType = type || defaultLanguageType;
    if (i18nType === 'zh') {
      return zhValue[key];
    } else if (i18nType === 'en') {
      return enValue[key];
    }
  };

  return <Provider value={{ i18n }}>{children}</Provider>;
};

export default Index;
