import { Result } from 'antd';
import { memo } from 'react';

function ErrorPage404() {
  return <Result status={404} title="404" subTitle="404" />;
}

export default memo(ErrorPage404);
