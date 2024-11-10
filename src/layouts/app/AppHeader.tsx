import { AppLogo } from './components/AppLogo';
import { AppMenu } from './components/AppMenu';
import {
  HeaderBodyLayout,
  HeaderFootLayout,
  HeaderHeadLayout,
  HeaderLayout
} from './AppStyle';

interface Props {
  style?: React.CSSProperties;
}

export const AppHeader: React.FC<Props> = (props) => {
  const { style } = props;

  return (
    <HeaderLayout style={{ ...style }}>
      <HeaderHeadLayout>
        <AppLogo />
      </HeaderHeadLayout>
      <HeaderBodyLayout>
        <AppMenu />
      </HeaderBodyLayout>
      <HeaderFootLayout></HeaderFootLayout>
    </HeaderLayout>
  );
};
