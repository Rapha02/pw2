const botao = document.createElement('mybtn');
botao.innerHTML = `
    <div id='center'><button onclick='init()' id='bota'>COMEÇAR</button></div>
`
const msg = document.createElement('h1');
msg.innerHTML = `
    <h1>OBRIGADO POR PARTICIPAR!</h1>
`
const form = document.createElement('formulario');
form.innerHTML = `
    <h1>Creator</h1>
    <p>Olá, aventureiro(a)!</p>
    <p>Antes de começar sua aventura, defina as características de seu personagem:</p>
    <form id="formulario">
        <input type="hidden" name="_captcha" value="false">
            <fieldset>
                <div>
                    <legend>Apelido:</legend>
                    <input type="text" name="nome" id="nome"  placeholder="nome" required>
                </div>
                <br>
                <div>
                    <legend>Idade:</legend>
                    <input type="number" placeholder='idade' min="0" max="150" name="idade" id="idade" style="height: 20px; width: 10%;" required>
                </div>
                <br>
                <div>
                    <legend>Gênero:</legend>
                    <select name="gnr" id="gnr">
                        <option selected disabled value="selected">Selecione</option>
                        <option value="masc">Masculino</option>
                        <option value="fem">Feminino</option>
                        <option value="nb">Não-binário</option>
                        <option value="gn">Gênero Neutro</option>
                        <option value="tg">Transgênero</option>
                        <option value="ag">Agênero</option>
                        <option value="gf">Gênero fluído</option>
                        <option value="ot">Outro</option>
                    </select>
                <div>
                <br>
                <div>
                    <legend>Classe:</legend>
                    <select name="classe" id="classe">
                        <option selected disabled value="selected">Selecione</option>
                        <option value="guerreiro">Guerreiro</option>
                        <option value="mago">Mago</option>
                        <option value="arqueiro">Arqueiro</option>
                     </select>
                </div>
                <br>
                <div>
                    <legend>Raça:</legend>
                    <select name="raca" id="raca">
                        <option selected disabled value="selected">Selecione</option>
                        <option value="humans">Humanos</option>
                        <option value="elfos">Elfos</option>
                        <option value="anoes">Anoes</option>
                        <option value="gobl">Goblins</option>
                        <option value="gn">Gnomos</option>
                    </select>
                <div>
            </fieldset>
            <br>
            <div>
                <fieldset>
                    <legend>Alguma sujestão ou melhoria? comente abaixo.</legend>
                    <textarea name="sjs" id="sjs" rows="4"></textarea>
                </fieldset>
            </div>
            <br>
            <div id="button">
                <button type="submit" id='but'>Criar</button>
            </div>
    </form>
`
document.body.appendChild(botao);
const title = document.getElementById('title');
title.innerText = 'COMEÇAR'

function init() {
    document.body.removeChild(botao);
    formulario();
};

function formulario() {
    title.innerText = 'FORMULÁRIO'
    document.body.appendChild(form);
    const send = document.getElementById('formulario');
    send.addEventListener('submit', sendbutton);
};

function sendbutton(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    final(nome)
};

function final(nome) {
    title.innerText = 'AGRADECIMENTOS'
    msg.innerHTML = `<h1>Olá, ${nome}!\nMuito obrigado por responder o formulário!<h1>`
    document.body.removeChild(form);
    document.body.appendChild(msg);
}
