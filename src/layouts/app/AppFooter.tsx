import { FooterLayout } from './AppStyle';
import { Copyright } from './components/Copyright';

interface Props {}

export const AppFooter: React.FC<Props> = (props) => {
  return (
    <FooterLayout className="app-footer">
      <Copyright />
    </FooterLayout>
  );
};
