import { memo } from 'react';
import { Button } from './components/Button';

const AppComponent = () => {
  return <Button label="Hello from HAIBAZO ^_^" />;
};

export const App = memo(AppComponent);
