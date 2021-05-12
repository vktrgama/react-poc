import { useEffect, useState } from 'react';

function HandleState() {
    const titlesInitial = [];
    const [titles, setTitles] = useState(titlesInitial);
    const [titlesData, setTitlesData] = useState(titlesInitial);

    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('')

    useEffect( () => {
      setTitlesData(titles);
    }, [titles]);
    
    const setByName = (event) => {
      if (!event.target.value) return;
      if (event.target.name === 'title') setTitle(event.target.value);
      if (event.target.name === 'status') setStatus(event.target.value);
    }

    const handleSend = () => {
      if (!title && !status) return;
      let newTitle = { title: title, status: status};
      setTitles([...titles, newTitle]);
      setTitle('');
      setStatus('');
    }

    const showActive = () => {
      let filtered = titles.filter(t => {
        return t.status === 'active'
      })
      setTitlesData(filtered);
    }

    const showSorted = () => {
      titles.sort((a, b) => {
        return a.title >= b.title ? 1: -1;
      })
      setTitlesData(titles);
    }

    const entryForm = 
       (
        <div>
           <div>This is a form</div>
           <input type="text" name="title" value={title} onChange={setByName}/>
           <input type="text" name="status" value={status} onChange={setByName}/>
           <button onClick={handleSend} >Send this</button>
        </div>
      );

    return (
      <div>
        <div class="container well__ins1 well__ins2">
            <div className="row">
                {entryForm}
                 <button onClick={showActive}>active</button>
                 <button onClick={showSorted}>sort</button>
                  <table>
                    <thead></thead>
                    <tbody>
                    { titlesData.map((t, index) => (
                      <tr key={index}>
                        <td>{t.title}</td>
                        <td>{t.status}</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
            </div>
          </div>
      </div>
    );
  }

  export default HandleState;