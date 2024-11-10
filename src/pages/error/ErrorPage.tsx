import type { ResultProps } from 'antd';
import { Button, Result } from 'antd';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props extends ResultProps {}

export const ErrorPage = memo((props: Props) => {
  const { status, title, subTitle, extra, children, ...rest } = props;

  const navigate = useNavigate();

  return (
    <Result
      {...rest}
      status={status}
      title={title}
      subTitle={subTitle}
      extra={
        extra ? (
          extra
        ) : (
          <Button
            type="primary"
            onClick={() => {
              navigate('/');
            }}
          >
            返回首页
          </Button>
        )
      }
    >
      {children}
    </Result>
  );
});
