import React, {  useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css'
import './Main.css'



// tres conceitos principais de react

/*
componente: bloco isolado de html,css,js o qual nao interfere no restante da aplicação
propriedade: informaçoes que um componente PAI passa para o componente FILHO
estado: informaçoes mantidas pelo componente (lembrar:imutabilidade)

*/


function App() {

    const [latitude,setLatitude] = useState('');
    const [longitude,setLongitude] = useState('');
    const [github_username,setGithubUsername] = useState('');
    const [techs,setTechs] = useState('');


    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                const {latitude,longitude} = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) =>{
                console.log(err);
            },
            {
                timeout:30000,
            }
        );
    },[])

    async function handleAddDev(e){
        e.preventDefault();

        
    }
     return ( 
    <div id="app">
        <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
            <div className="input-block">
                <label htmlFor="github_username">Usuario do Github</label>
                <input name="github_username"
                 id="github_username" 
                 required
                 value={github_username}
                 onChange = {e => setGithubUsername(e.target.value)}
                 />
            </div>
         
            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input 
                name="techs"
                 id="techs"
                  required
                  value={techs}
                  onChange = {e => setTechs(e.target.value)}/>
            </div>        
            
            
            <div className="input-group">

                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input type="number"
                        name="latitude"
                        id="latitude"                      
                        required
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                        />   

                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input 
                    type="number" 
                    name="longitude"
                    id="longitude"
                    required
                    value={longitude} 
                    onChange={e => setLongitude(e.target.value)}
                      />           
                </div>
             </div>

             <button type="submit">Salvar</button>
            
            
        </form>
        </aside>
        <main>
        <ul>
            <li className="dev-item">
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/44037843?s=460&v=4" alt="Jefferson Felizardo"/>
                    <div className="user-info">
                        <strong>Jefferson Felizardo</strong>
                        <span>Html, Css,JavaScript,Php</span>
                    </div>
                </header>
                <p>Desenvolvedor Front-end, conhecimentos em HTML5,CSS3,JavaScript,Bootstrap, Materialize,Sass e Less, estudando a flutter para desenvolver aplicativos mobile</p>
                <a href="http://github.com/jeffer1312">Acessar Perfil no Github</a>

            </li>
            <li className="dev-item">
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/44037843?s=460&v=4" alt="Jefferson Felizardo"/>
                    <div className="user-info">
                        <strong>Jefferson Felizardo</strong>
                        <span>Html, Css,JavaScript,Php</span>
                    </div>
                </header>
                <p>Desenvolvedor Front-end, conhecimentos em HTML5,CSS3,JavaScript,Bootstrap, Materialize,Sass e Less, estudando a flutter para desenvolver aplicativos mobile</p>
                <a href="http://github.com/jeffer1312">Acessar Perfil no Github</a>

            </li>
            <li className="dev-item">
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/44037843?s=460&v=4" alt="Jefferson Felizardo"/>
                    <div className="user-info">
                        <strong>Jefferson Felizardo</strong>
                        <span>Html, Css,JavaScript,Php</span>
                    </div>
                </header>
                <p>Desenvolvedor Front-end, conhecimentos em HTML5,CSS3,JavaScript,Bootstrap, Materialize,Sass e Less, estudando a flutter para desenvolver aplicativos mobile</p>
                <a href="http://github.com/jeffer1312">Acessar Perfil no Github</a>

            </li>
            <li className="dev-item">
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/44037843?s=460&v=4" alt="Jefferson Felizardo"/>
                    <div className="user-info">
                        <strong>Jefferson Felizardo</strong>
                        <span>Html, Css,JavaScript,Php</span>
                    </div>
                </header>
                <p>Desenvolvedor Front-end, conhecimentos em HTML5,CSS3,JavaScript,Bootstrap, Materialize,Sass e Less, estudando a flutter para desenvolver aplicativos mobile</p>
                <a href="http://github.com/jeffer1312">Acessar Perfil no Github</a>

            </li>
        </ul>
        </main>
    </div>
  
    );
}

export default App;