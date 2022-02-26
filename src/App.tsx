import React, { useEffect, useState } from 'react';
import './App.css';
import ThemeContext, { themes } from './Component/Context'
import NewBlogModal from './Component/NewBlogModal'

import Body from './Component/Body'

import Example from './Component/Example'
import NavigationBar from './Component/NavigationBar'



function App() {
  const [theme, setTheme] = useState(themes.light);
  const handleSwitchTheme = () => { setTheme((theme.navigator.icon === 'light_mode') ? themes.dark : themes.light) }
  const [showNewBlogModal, setShowNewBlogModal] = useState(false)

  

  useEffect(() => {  }, [theme])

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        { showNewBlogModal && <NewBlogModal setShowNewBlogModal={setShowNewBlogModal}/> } 
        <NavigationBar 
          handleSwitchTheme={handleSwitchTheme} 
          setShowNewBlogModal={setShowNewBlogModal}/>
         
        <Body />
        
        
        {/* <Example message='Hello World 123' /> */}
      </div>      
    </ThemeContext.Provider>

  )
}

export default App;
