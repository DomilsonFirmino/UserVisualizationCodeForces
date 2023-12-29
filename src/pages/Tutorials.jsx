function Tutorials(){
    return(
        <div className="container top-2">
            <h1 style={{color: "var(--clr-pop)"}}>Lições</h1>
            <p>

            </p>
            <div className="top-2">
                <div className="two grid gap-3">
                    <div style={{maxWidth: "65ch"}} className="top-1">
                        <h2 id="declVar">Declaração de Variavéis</h2>
                        <div className="top-___1">
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
                    </div>
                    <div className="top-1">
                        <h2>Atribuição de valores a variaveis</h2>
                        <div className="top-___1">
                            <p>
                                Para atribuir um valor a uma variavel usa-se o sinal de "="
                                e a direita o valor que desejamos atribuir
                            </p>
                            <p><span className="look">EX:</span> int numero2 = 2345; se a variavel ainda não foi declarada</p>
                            <p><span className="look">EX:</span> numero = 1235; se a variavel ja foi declarada</p>
                        </div>
                    </div>
                </div>

                <div className="top-1">
                    <h2>Regras de nomeação de variaveis</h2>
                    <div className="top-___1">
                        <p>Nomes podem conter letras, dígitos e sublinhados.</p>
                        <p>Nomes devem começar com uma letra ou um sublinhado (_).</p>
                        <p>Nomes são sensíveis a maiúsculas e minúsculas (myVar e myvar são variáveis diferentes).</p>
                        <p>Nomes não podem conter espaços em branco ou caracteres especiais como !, #, %, etc.</p>
                        <p>Palavras reservadas (como palavras-chave do C++, como int) não podem ser usadas como nomes.</p>
                        <p><span className="look">EX:</span> int _name, name8, Name8, são validos como nome de variaveis</p>
                    </div>
                </div>

                <div className="top-1">
                    <h2 id="cinout">Entrada e Saida de dados</h2>
                    
                    <div className="twoEqual grid gap-4">
                        <div className="top-___1">
                            <div className="top-_1">
                                <div className="flex wrap">
                                    <p className="fw-600 fs-500"><span className="look">cin &gt;&gt;</span></p>
                                    <p>&#123; nomeDaVariavel &#125;</p> ;
                                </div>
                                <p>Para fazer a leitura de uma unica varaivel</p>
                            </div>
                        
                            <div className="top-_1">
                                <div className="flex wrap">
                                    <p className="fw-600 fs-500"><span className="look">cin &gt;&gt;</span></p>
                                    <p>&#123; nomeDaVariavel &#125;</p>
                                    <p><span className="look">&gt;&gt;</span> <span>&#123; nomeDaVariavel &#125;</span> <span className="look">&gt;&gt;</span> <span>&#123; nomeDaVariavel &#125;</span></p> ;
                                </div>
                                <p>Para fazer a leitura de multiplas variaveis seguindo a ordem de digitação com cada posição de variavel</p>                                
                                <p><span className="look">EX:</span> int numero; cin &gt;&gt;numero;</p>
                                <p>&#123; espera o input que será digitado pelo usuário &#125; </p>
                            </div>
                        </div>
                        
                        <div className="top-___1">
                            <div className="top-_1">
                                <div className="flex wrap">
                                    <p className="fw-600 fs-500"><span className="look">cout &lt;&lt;</span></p>
                                    <p>&#123; nomeDaVariavel &#125;</p> ;
                                </div>
                                <p>Para mostrar na tela o valor que estiver na variavel</p>
                            </div>
                        
                            <div className="top-_1">
                                <div className="flex wrap">
                                    <p className="fw-600 fs-500"><span className="look">cout &lt;&lt;</span></p>
                                    <p>&#123; nomeDaVariavel &#125;</p>
                                    <p><span className="look">&lt;&lt;</span> <span>"pode-se contatenar com palavras se for usado aspas duplas não importando a posição";</span></p>
                                </div>
                                <p>Para mostrar na tela os valores das variaveis seguindo a ordem de cada e sem espaços</p>
                                <p><span className="look">EX:</span> int numero = 5; cout &lt;&lt;numero;</p>
                                <p>&#123; mostra na tela o valor da variavel numero &#125; </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Tutorials;