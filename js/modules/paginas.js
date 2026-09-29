export const paginas = {
    inicio: `
        <section class="hero">
            <h2>Juntas por mais mulheres na tecnologia</h2>

            <img src="images/programinas.jpg" alt="Mulheres estudando programação">

            <p>
                A ProgramaMinas é uma organização sem fins lucrativos que oferece
                ensino gratuito de programação para mulheres em situação de
                vulnerabilidade, promovendo inclusão, autonomia financeira e
                oportunidades na tecnologia.
            </p>

            <br>

            <a href="#cadastro" class="btn" data-rota="cadastro">
                Quero participar
            </a>
        </section>

        <section>
            <h2>Contato</h2>

            <p><strong>E-mail:</strong> contato@programinas.org</p>
            <p><strong>Telefone:</strong> (11) 98765-4321</p>
            <p><strong>Endereço:</strong> Carapicuíba • SP</p>
        </section>
    `,

    projetos: `
        <section>
            <h2>Projetos Sociais</h2>

            <article class="card">
                <h3>HTML para Todas</h3>
                <span class="badge">HTML</span>
                <span class="badge">Gratuito</span>

                <p>
                    Curso gratuito de HTML e CSS para mulheres que desejam iniciar
                    sua jornada na tecnologia.
                </p>
            </article>

            <article class="card">
                <h3>Mentoria em Dados</h3>
                <span class="badge">Dados</span>
                <span class="badge">Mentoria</span>

                <p>
                    Voluntárias da área de tecnologia orientam mulheres em transição
                    de carreira por meio de encontros e acompanhamento profissional.
                </p>
            </article>

            <article class="card">
                <h3>Laboratório de Carreiras</h3>
                <span class="badge">Carreira</span>
                <span class="badge">Empregabilidade</span>

                <p>
                    Oficinas de currículo, LinkedIn e preparação para entrevistas,
                    fortalecendo a empregabilidade no setor de tecnologia.
                </p>
            </article>
        </section>
    `,

    cadastro: `
        <section>
            <h2>Faça parte da comunidade</h2>

            <p>
                Preencha seus dados para participar dos projetos gratuitos da ONG.
            </p>

            <br>

            <form>

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo</label>
                    <input type="text" id="nome" required>

                    <label for="email">E-mail</label>
                    <input type="email" id="email" required>

                    <label for="telefone">Telefone</label>
                    <input
                        type="tel"
                        id="telefone"
                        placeholder="(11) 99999-9999"
                        pattern="\\([0-9]{2}\\)\\s[0-9]{5}-[0-9]{4}"
                        required
                    >

                    <label for="cpf">CPF</label>
                    <input
                        type="text"
                        id="cpf"
                        placeholder="000.000.000-00"
                        pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        required
                    >

                    <label for="cep">CEP</label>
                    <input
                        type="text"
                        id="cep"
                        placeholder="00000-000"
                        pattern="[0-9]{5}-[0-9]{3}"
                        required
                    >

                </fieldset>

                <fieldset>
                    <legend>Área de interesse</legend>

                    <select id="interesse" required>
                        <option value="">Escolha uma opção</option>
                        <option>HTML & CSS</option>
                        <option>Python</option>
                        <option>Análise de Dados</option>
                        <option>UX/UI</option>
                    </select>

                    <label for="historia">Conte sua história</label>
                    <textarea id="historia" rows="5"></textarea>

                </fieldset>

                <button class="btn" type="submit">
                    Enviar Cadastro
                </button>

            </form>
        </section>
    `
};