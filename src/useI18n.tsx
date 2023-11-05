import { useContext } from 'react';
import { reactI18nContext } from './ReactI18n';
/**
 * @description 获取切换国际化函数
 */
const useI18n = () => {
  const contextValue = useContext(reactI18nContext);
  return contextValue!.i18n;
};
export default useI18n;
