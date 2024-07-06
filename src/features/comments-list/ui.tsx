import { CommentCard } from "../comment-card";
import { CommentData } from "../../shared/types/comment";

interface Props {
  comments: CommentData[];
}

export const CommentsList: React.FC<Props> = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => <CommentCard commentData={comment}/>)}
    </ul>
  );
};
