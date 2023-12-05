function Tutorials(){
    return(
        <div className="container top-2">
            <h1 style={{color: "var(--clr-pop)"}}>Lições</h1>
            <p>

            </p>
            <div className="top-1">
                <div className="two grid gap-3">
                    <div style={{maxWidth: "65ch"}}>
                        <h2 id="declVar">Declaração de Variavéis</h2>
                        <p>&#123;<span className="look">tipoDeDado</span>&#125; nomeDaVariavel;</p>
                        <ul>
                            <li><span className="look">int</span> - guarda numeros inteiros, sem virgula, tanto negativo quanto positivo, 123, -123</li>
                            <li><span className="look">double</span> - guarda numeros flutuantes, numeros com virgula, 1.25, -1.25</li>
                            <li><span className="look">char</span> - guarda um caracter unico, 'a'</li>
                            <li><span className="look">string</span> - guarda texto, "ola mundo"</li>
                            <li><span className="look">bool</span> - guarda dois valores, TRUE ou FALSE</li>
                        </ul>
                        <p><span className="look">EX:</span> int numero; Declaração de uma variavel apenas</p>
                        <p><span className="look">EX:</span> int m,n,o,p; Declaração de multiplas variaveis em linha</p>
                    </div>
                    <div>
                        <h2>Atribuição de valores a variaveis</h2>
                        <p>
                            Para atribuir um valor a uma variavel usa-se o sinal de "="
                            e a direita o valor que desejamos atribuir
                        </p>
                        <p><span className="look">EX:</span> int numero2 = 2345; se a variavel ainda não foi declarada</p>
                        <p><span className="look">EX:</span> numero = 1235; se a variavel ja foi declarada</p>
                    </div>
                </div>

                <div>
                    <h2>Regras de nomeação de variaveis</h2>
                    <p>Nomes podem conter letras, dígitos e sublinhados.</p>
                    <p>Nomes devem começar com uma letra ou um sublinhado (_).</p>
                    <p>Nomes são sensíveis a maiúsculas e minúsculas (myVar e myvar são variáveis diferentes).</p>
                    <p>Nomes não podem conter espaços em branco ou caracteres especiais como !, #, %, etc.</p>
                    <p>Palavras reservadas (como palavras-chave do C++, como int) não podem ser usadas como nomes.</p>

                    <p><span className="look">EX:</span> int _name, name8, Name8, são validos como nome de variaveis</p>
                </div>

            </div>

        </div>
    )
}

export default Tutorials;