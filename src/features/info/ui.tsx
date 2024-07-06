import { AppStoreBtn, GooglePlayBtn, WhatsappBtn } from '../../shared/ui/buttons';
import st from './index.module.scss';

export const InfoBlock: React.FC = () => {
  return (
    <div className={st.InfoBlock}>
      <h1 className={st.InfoBlock__heading}>Do you want to Learn more About cryptocurrencies <span className={st.heading__gradient}>quickly and easily ?</span></h1>
      <p className={st.desc}>Subscribe to our channel to learn more</p>
      <ul className={st.InfoBlock__dataList}>
        <li>
          <h2>20k+</h2>
          <p>subscribers</p>
        </li>
        <li>
          <h2>19,5K</h2>
          <p>successful cases</p>
        </li>
        <li>
          <h2>4.8/5</h2>
          <p>rating</p>
        </li>
      </ul>
      <WhatsappBtn />
      <div className={st.InfoBlock__markets}>
        <GooglePlayBtn />
        <AppStoreBtn />
      </div>
    </div>
  );
}