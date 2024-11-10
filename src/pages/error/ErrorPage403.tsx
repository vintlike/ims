import { Result } from 'antd';
import { memo } from 'react';

function ErrorPage403() {
  return <Result status={403} title="403" subTitle="403" />;
}

export default memo(ErrorPage403);
