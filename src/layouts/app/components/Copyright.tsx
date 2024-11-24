import { CopyrightLayout } from '../AppStyle';

interface Props {}

export const Copyright: React.FC<Props> = (props) => {
  return (
    <CopyrightLayout>Copyright © {new Date().getFullYear()}</CopyrightLayout>
  );
};
