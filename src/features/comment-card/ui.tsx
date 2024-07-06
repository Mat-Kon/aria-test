import { CommentData } from "../../shared/types/comment";
import st from './index.module.scss';

interface Props {
  commentData: CommentData;
  style?: React.CSSProperties;
}

export const CommentCard: React.FC<Props> = ({ commentData, style }) => {
  const { photo, comment, email, name } = commentData;
  return (
      <div className={st.blur} style={style}>
        <div className={st.commentCard}>
          <div className={st.commentCard__info}>
            <div>
              <img src={photo} alt={name} />
            </div>
            <div>
              <h6>{name}</h6>
              <p>{email}</p>
            </div>
          </div>
          <p className={st.commentCard__comment}>{comment}</p>
        </div>
      </div>
  );
};
