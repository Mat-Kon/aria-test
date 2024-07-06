import { CommentData } from "../../shared/types/comment";

interface Props {
  commentData: CommentData;
}

export const CommentCard: React.FC<Props> = ({ commentData }) => {
  const { photo, comment, email, name } = commentData;
  return (
    <div>
      <div>
        <div>
          <img src={photo} alt={name} />
        </div>
        <div>
          <h6>{name}</h6>
          <p>{email}</p>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};
