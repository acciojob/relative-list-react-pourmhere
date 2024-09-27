import React from 'react'

const App = () => {

  const relatives = [
    'John Doe',
    'Jane Smith',
    'Robert Brown',
    'Emily White',
    'Michael Johnson'
  ];

  return (
    <div id="main">
    <ol key="relativeList" id='relativeList'>
      {relatives.map((relative, index) => (
        <li key={`relativeListItem${index + 1}`} id={`relativeListItem${index + 1}`}>
          {relative}
        </li>
      ))}
    </ol>
    </div>
  )
}

export default App
