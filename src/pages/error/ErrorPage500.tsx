import { Result } from 'antd';
import { memo } from 'react';

function ErrorPage500() {
  return <Result status={500} title="500" subTitle="500" />;
}

export default memo(ErrorPage500);
