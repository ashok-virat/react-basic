import Test1 from './Test/test1';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test2 from './Test/test2';
import Some from './Test/class/testClass1';
import Test3 from './Test/test3'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test1 />} />
        <Route path="test3" element={<Test3 />} />
        <Route path="testClass1" element={<Some />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
