import { CommentsList } from '../../features/comments-list/ui';
import { InfoBlock } from '../../features/info';
import st from './index.module.scss';
import { useEffect, useState } from 'react';
import { CommentData } from '../../shared/types/comment';

export const MainBlock: React.FC = () => {
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch('./data.json');
      const data: {comments: CommentData[]} = await res.json();
      setComments(data.comments);
    };

    getComments();
  }, []);

  return (
    <div className={st.mainBlock}>
      <div className={st.leftBlock}>
        <InfoBlock />
      </div>
      <div className={st.rightBlock}>
        <CommentsList comments={comments}/>
      </div>
    </div>
  );
};
