import { InfoBlock } from '../../features/info';
import st from './index.module.scss';

export const MainBlock: React.FC = () => {
  return (
    <div>
      <div className={st.leftBlock}>
        <InfoBlock />
      </div>
      <div className={st.rightBlock}></div>
    </div>
  );
};
