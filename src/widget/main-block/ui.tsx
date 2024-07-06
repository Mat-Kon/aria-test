import { CommentsList } from '../../features/comments-list/ui';
import { InfoBlock } from '../../features/info';
import '../../app/api/data.json';
import st from './index.module.scss';
import { useState } from 'react';
import { CommentData } from '../../shared/types/comment';

export const MainBlock: React.FC = () => {
  const [comments, setComments] = useState<CommentData[]>([]);

  return (
    <div>
      <div className={st.leftBlock}>
        <InfoBlock />
      </div>
      <div className={st.rightBlock}>
        <CommentsList comments={comments}/>
      </div>
    </div>
  );
};
