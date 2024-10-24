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
import MoviesContextProvider from './Store';
import Media from './components/Media/Media';
import Movies from './components/Media/Movies';
import Tv from './components/Media/Tv';
import People from './components/Media/People';


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
      <MoviesContextProvider>
        <NavBar />
        <div className='main-content'>
          <Routes>

            {/* Main route for Faraway page*/}
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

            <Route path='media' element={<Media />}>
              {/* Make Movies component as default when I open media */}
              <Route index element={<Movies />} />
              <Route path='movies' element={<Movies />} />
              <Route path='tv' element={<Tv />} />
              <Route path='people' element={<People />} />
            </Route>

            {/*Rest of links*/}
            <Route path='*' element={<NotFound />} />

          </Routes>
        </div>
      </MoviesContextProvider>
    </div>
  );
}

export default App;


