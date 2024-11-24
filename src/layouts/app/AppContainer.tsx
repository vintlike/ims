import { AppHeader } from './AppHeader';
import { AppMain } from './AppMain';
import { ContainerLayout } from './AppStyle';

interface Props {}

export const AppContainer: React.FC<Props> = (props) => {
  return (
    <ContainerLayout className="app-container">
      <AppHeader />
      <AppMain />
    </ContainerLayout>
  );
};
