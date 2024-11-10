import { AppHeader } from './AppHeader';
import { AppMain } from './AppMain';
import { ContainerLayout } from './AppStyle';

interface Props {
  style?: React.CSSProperties;
}

export const AppContainer: React.FC<Props> = (props) => {
  const { style } = props;

  return (
    <ContainerLayout className="app-container" style={style}>
      <AppHeader />
      <AppMain />
    </ContainerLayout>
  );
};
