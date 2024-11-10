import { Typography } from 'antd';
import { memo } from 'react';
import { useRouteError } from 'react-router-dom';
import { ErrorPage } from './ErrorPage';

const { Paragraph, Text } = Typography;

interface ErrorElementType {
  pageType: 'Layout' | 'Page';
}

const ErrorElement = memo((props: ErrorElementType) => {
  const errorText = useRouteError() as Error;

  return (
    <ErrorPage
      status="error"
      title={`${props.pageType} Error`}
      subTitle={errorText.message}
      extra={null}
    >
      <div className="desc">
        <Paragraph>
          <Text
            strong
            style={{
              fontSize: 16
            }}
          >
            页面内容有以下错误:
          </Text>
        </Paragraph>
        <Paragraph>{errorText.stack}</Paragraph>
      </div>
    </ErrorPage>
  );
});

export default ErrorElement;
