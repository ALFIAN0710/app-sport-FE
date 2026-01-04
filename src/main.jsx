import ReactDOM from 'react-dom/client';
import App from './App';
// import 'antd/dist/antd.css';
import './index.css';
import './App.css'
// 🧩 Import kompatibilitas React 19
import '@ant-design/compatible';

// 🌈 Import CSS Ant Design
import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { setupStore } from './redux/store';

const store = setupStore();
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
