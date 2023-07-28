marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false}
)

const renderer = new marked.Renderer();

const App = () => {
    const value = '# This is some markdown\n#### List cities:\n- New Yord\n- London\n- Nottingham\n#### Make it **bold** or make it *italic*\n\n#### Create links [Github](https://github.com/huynhat30/';
    const [getText, setText] = React.useState(value);
    
    function handleChange(e) {
        setText(e.target.value);
    }

    return(
        <div id="container" className="text-center">
            <div id="editor-wrapper">
                <h1>Markdown previewer</h1>
                <textarea name="text" 
                id="editor" 
                rows="10" 
                className="textarea"
                value={getText}
                onChange={handleChange} //take event "e", then grab the value of the target
                />
            </div>

            <div id="preview-wrapper">
                <h2>Here is the output</h2>
                <Preview markdown={getText}/>
            </div>
        </div>
    )
}

const Preview = ({markdown}) => {
    return(
        <div id="preview" 
            dangerouslySetInnerHTML={{__html: marked(markdown, {renderer: renderer})}}
        >

        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));