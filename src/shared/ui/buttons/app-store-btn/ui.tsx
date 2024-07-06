import { AppStoreIcon } from "../../icons/icons"
import st from './index.module.scss';

export const AppStoreBtn: React.FC = () => {
  return (
    <a className={st.asBtn} href="https://apps.apple.com/">
      <AppStoreIcon />
      <div>
        <p>Available on the</p>
        <h6>App Store</h6>
      </div>
    </a>
  );
};
