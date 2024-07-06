import { ReactNode } from 'react';
import st from './index.module.scss';
import { Bitcoin, Ethereum, Litecoin } from '../icons/icons';

interface Props {
  children: ReactNode;
}

export const WrapperImgBg: React.FC<Props> = ({ children }) => {
  return (
    <div className={st.wrapperImgBg}>
      {children}

      <div className={st.wrapperImgBg__imgs}>
        <div className={st.wrapperImgBg__imgItem}>
          <Bitcoin />
        </div>
        <div className={st.wrapperImgBg__imgItem}>
          <Litecoin />
        </div>
        <div className={st.wrapperImgBg__imgItem}>
          <Ethereum />
        </div>
      </div>
    </div>
  );
};
