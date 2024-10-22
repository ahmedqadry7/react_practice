import { useState } from 'react';
import './styles/index.css';
import Logo from './components/faraway/Logo';
import Form from './components/faraway/Form';
import PackingList from './components/faraway/PackingList';
import Item from './interfaces/Item';
import Stats from './components/faraway/Stats';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/other/NotFound';
import NavBar from './components/other/NavBar';
import About from './components/other/About';
import Contact from './components/other/Contact';
import Projects from './components/projects/Projects';
import Web from './components/projects/Web';
import Mobile from './components/projects/Mobile';
import Movies from './components/Media/Movies';


function App() {
  const [items, setItems] = useState<Item[]>([]);

  function handleDeleteItem(id: number): void {
    setItems(items => items.filter(item => item.id !== id))
  }

  function handleChecked(id: number): void {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleAddItems(newItem: Item): void {
    //Add new item
    setItems((prevItems) => [...prevItems, newItem])
  }

  function handleClearList(): void {
    if (items.length === 0) {
      return alert("No items to delete")
    } else {
      setItems([])
    }
  }

  return (
    <div className="app">
      <NavBar />
      <div className='main-content'>
        <Routes>

          {/* Main route for Far away page*/}
          <Route path='/' element={
            <>
              <Logo />
              <Form onAddItems={handleAddItems} />
              <PackingList items={items} ondeleteItem={handleDeleteItem} onCheckItem={handleChecked} onClear={handleClearList} />
              <Stats items={items} />
            </>
          } />

          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />

          {/* Nested pages of projects*/}
          <Route path='projects' element={<Projects />}>
            <Route path='web' element={<Web />} />
            <Route path='mobile' element={<Mobile />} />
          </Route>

          <Route path='movies' element={<Movies/>}></Route>

          {/*Rest of links*/}
          <Route path='*' element={<NotFound />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;


