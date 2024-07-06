import { GooglePlayIcon } from "../../icons/icons";
import st from './index.module.scss';

export const GooglePlayBtn: React.FC = () => {
  return (
    <a className={st.gpBtn} href="https://play.google.com/store/games?hl=ru">
      <GooglePlayIcon />
      <div>
        <p>get it on </p>
        <h6>Google play</h6>
      </div>
    </a>
  );
};
