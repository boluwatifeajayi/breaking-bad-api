
import React, {useState} from 'react'


const Search = ({getQuery}) => {

    const [text, setText] = useState('');

    const onChange = (q) =>{
        setText(q)
        getQuery(q)
    }



    return (
        <section className="search">
            <form>
                <input type="text" className="form-control" onChange={(e) => onChange(e.target.value)} value={text} placeholder="search characters" autoFocus/>
            </form>
        </section>
    )
}

export default Search
