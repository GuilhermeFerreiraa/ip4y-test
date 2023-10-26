<p align="center">
 <img src="https://cdn.discordapp.com/attachments/609614458884718594/1166933758755229756/584830f5cef1014c0b5e4aa1_1.png?ex=654c4ac0&is=6539d5c0&hm=f56ea4918922a6b4cec11e8332c456151ac46d6c07c3aa7c467e32179fb6d191&" width="200" alt="React Logo"></p>

## Sobre o Frontend IP4y

O Front-end da aplicação foi desenvolvido utilizando React Native, onde tivemos outras tecnologias também como:

* NativeWind
* Expo Router
* Expo Go
* React Native Reanimated
* Formik e Yup
* Axios
* Sdk49^


Neste projeto eu quis explorar um pouco mais a parte do design, layout e interações com o usuário seguindo como referência as cores da empresa junto com a tipografia. A minha pedra no sapato desse projeto foi a questão de roteamento com o back-end em Laravel. Como disse no outro repositório, eu utilizo o Bluestacks e por alguma razão eu não consegui de maneira alguma fazer a conexão com a API local, portanto tive que dar um "jeitinho" e utilizar o Ngrok. O que também não me deixa muito preocupado, aliás esse tipo de problema quando a API está no ar dá um frio na barriga hehe. Para fazer a ligação da API com o <a href="https://github.com/GuilhermeFerreiraa/ip4y-backend" target="_blank">back-end da aplicação</a> que foi desenvolvido utilizando Laravel, Composer e MySQL.


<p align="center">
 <img src="https://media.discordapp.net/attachments/609614458884718594/1166942302938349639/aaaaaaaaaaaaaaaaaaaaa.png?ex=654c52b5&is=6539ddb5&hm=12721a2ee3d6c5f80f5f6db9729d0bb93b41c8816d72a5661f6d2059c720503e&=&width=1201&height=676" width="900" alt="React Logo">
</p>

<p align="center">
 <img src="https://media.discordapp.net/attachments/609614458884718594/1166942302518915093/bbbbbbbbbbbbbbbbbbbbbbbbb.png?ex=654c52b5&is=6539ddb5&hm=bfbb397bb11b85ef839f8277ac440c48741f9584653050ed9caa205cc5e5c1ef&=&width=1201&height=676" width="900" alt="React Logo">
</p>


## Setup do projeto
```shell
$ git clone https://github.com/GuilhermeFerreiraa/ip4y-test.git
```
Após clonar o repositório, acesse o diretório da raiz do projeto e execute o comando:
```shell
$ cd ip4y-test
```
Após clonar o repositório e entrar no diretório execute o comando:
```shell
$ npm install
```
Por fim, não se esqueça, caso queira rodar o back-end juntamente com o front-end será necessário acessar a API do ngrok com o backend rodando. Ficaria mais ou menos assim:
- para rodar o backend
```shell
$ php artisan serve
```
- para rodar o frontend
```shell
$ expo start -c
```
 https para conexão do front-end com o back-end
```shell
$ https://5056-191-5-67-20.ngrok-free.app/api/users/
```


Todos os direitos reservados. ©copyright - Guilherme Ferreira.
