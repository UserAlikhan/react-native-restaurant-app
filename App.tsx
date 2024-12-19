import ClerkProviderWrapper from '@app/clerk/ClerkProvider';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from '@app/store/store';

export default function App() {

  return (
    <Provider store={store}>
      <ClerkProviderWrapper>
        <RootNavigator />
      </ClerkProviderWrapper>
    </Provider>
  );
}