# workshop-html-css-js

# HTML

HTML (HyperText Markup Language) é a linguagem padrão usada para criar páginas da web. Ele define a estrutura básica de um site e como seu conteúdo é exibido nos navegadores. HTML usa uma série de tags (ou elementos) para organizar e formatar texto, imagens, links, vídeos e outros conteúdos.

## Estrutura básica de um documento HTML:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Título da página</title>
  </head>
  <body>
    <h1>Cabeçalho Principal</h1>
    <p>Este é um parágrafo de exemplo.</p>
  </body>
</html>
```
## Componentes principais:
- **Elementos/tags**: As tags HTML estão envolvidas por `<` e `>` e geralmente vêm em pares, uma de abertura e outra de fechamento (exemplo: `<p>` para parágrafo, e `</p>` para fechar).
- **Atributos**: Elementos HTML podem ter atributos que fornecem informações adicionais sobre o elemento. Alguns exemplos de atributos são:
  - `id`: Usado para identificar um elemento unicamente na página.
  - `class`: Define uma ou mais classes CSS para estilizar o elemento.
  - `src`: Especifica o caminho de uma imagem ou arquivo de mídia (usado, por exemplo, na tag `<img>`).
  - `href`: Especifica o URL para o qual um link deve direcionar (usado na tag `<a>`).
- **Semântica**: Tags semânticas, como `<header>`, `<nav>`, `<section>`, e `<footer>`, ajudam a dar significado ao conteúdo da página, melhorando a acessibilidade e a otimização para motores de busca (SEO).
  - `<header>`: Define o cabeçalho de uma página ou de uma seção.
  - `<nav>`: Usado para definir um conjunto de links de navegação.
  - `<section>`: Agrupa conteúdo relacionado dentro de uma seção lógica.
  - `<footer>`: Representa o rodapé de uma página ou de uma seção.

<br>
<br>
<br>
<br>


# CSS

CSS (Cascading Style Sheets) é uma linguagem usada para descrever a apresentação de documentos HTML. Ele define como os elementos HTML devem ser exibidos em termos de layout, cores, fontes e outros estilos visuais. CSS separa a estrutura (HTML) do design, permitindo que o estilo seja aplicado de forma eficiente e consistente.

## Estrutura básica de uma folha de estilos CSS:
```css
selector {
  property: value;
}
```
## Componentes principais:

- **Seletores**: Definem quais elementos HTML serão estilizados. Existem vários tipos de seletores:
  - **Tag**: Seleciona todos os elementos de uma tag específica.
    ```css
    h1 {
      color: red;
    }
    ```
  - **Classe**: Seleciona elementos com um atributo `class` específico, precedido por um ponto `.`.
    ```css
    .minha-classe {
      background-color: yellow;
    }
    ```
  - **ID**: Seleciona um elemento único com um atributo `id`, precedido por uma cerquilha `#`.
    ```css
    #meu-id {
      font-size: 20px;
    }
    ```
  - **Seletores combinados**: Aplicam estilos a combinações de elementos ou estados, como links dentro de parágrafos.
    ```css
    p a {
      text-decoration: none;
    }
    ```

- **Propriedades**: São as características que podem ser aplicadas aos elementos HTML, definindo seu estilo. Algumas das mais comuns incluem:
  - `color`: Define a cor do texto.
  - `background-color`: Define a cor de fundo de um elemento.
  - `font-size`: Define o tamanho da fonte.
  - `margin`: Define o espaçamento externo de um elemento.
  - `padding`: Define o espaçamento interno de um elemento.

- **Unidades de medida**: CSS usa diferentes unidades para definir tamanhos e dimensões. Algumas das mais comuns são:
  - `px`: Pixels, usado para medidas absolutas.
  - `%`: Percentual, usado para medidas relativas ao elemento pai.
  - `em` e `rem`: Usado para medidas relativas ao tamanho da fonte.

- **Cascata e herança**: O CSS segue uma hierarquia, onde estilos aplicados a elementos mais externos podem ser herdados pelos internos. Além disso, quando há regras conflitantes, o CSS usa a **especificidade** para resolver essas situações:
  - **Especificidade**: Seletores mais específicos, como IDs, têm prioridade sobre seletores de classes ou tags.
  - **Ordem**: Se duas regras têm a mesma especificidade, a última regra definida no código será aplicada.
