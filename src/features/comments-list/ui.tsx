import { CommentCard } from "../comment-card";
import { CommentData } from "../../shared/types/comment";
import st from './index.module.scss';

interface Props {
  comments: CommentData[];
}

export const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <ul className={st.commentsList}>
      {comments.map((comment, index) => {
        if (index % 2 === 0) {
          console.log(index % 2)
          return <CommentCard commentData={comment} key={comment.email}/>
        }
        return <CommentCard commentData={comment} key={comment.email} style={{ transform: 'translateX(-115px)' }}/>
      })}
    </ul>
  );
};
