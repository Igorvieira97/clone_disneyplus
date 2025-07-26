# 🧠 Resumo do Projeto: Clone Disney Plus

## 🛠️ Tecnologias Utilizadas
- **HTML / CSS / SCSS**: Estruturação e estilização responsiva com uso de boas práticas.
- **JavaScript**: Adição de interatividade e manipulação dinâmica de elementos.
- **Gulp**: Automatização de tarefas (compilação, minificação, otimização).
- **Imagemin**: Otimização de imagens para melhor desempenho e carregamento.

---

## 📸 Hero (Banner Principal)
- **Clareza e simplicidade**: Mensagem direta e objetiva.
- **Chamada para ação (CTA)**: Botões visíveis que incentivam a navegação.
- **Imagem impactante**: Alta qualidade, relacionada ao conteúdo.
- **Responsividade**: Compatibilidade com desktop, tablet e mobile.
- **Velocidade de carregamento**: Imagens otimizadas com Imagemin.
- **Contraste adequado**: Texto legível sobre imagem.
- **Coerência visual**: Alinhamento com a identidade do site.
- **Testes e iteração**: Avaliação contínua para melhorias.

---

## 🎨 Estilização com SCSS e CSS
- `@font-face`: Importação de fontes personalizadas.
- `:last-child`: Estilização do último elemento dentro de um contêiner.
- `:nth-child()`: Seleção de elementos específicos por posição.
  - Ex: `:nth-child(odd)`, `:nth-child(3n+1)`, etc.
- `white-space: nowrap`: Prevenção de quebras de linha em elementos pontuais.
- `darken()`: Função SCSS para escurecer cores conforme necessário.

---

## 🧱 Layout com Grid e Unidade `fr`
- **Proporções flexíveis com `fr`**:
  ```css
  grid-template-columns: 1fr 200px 30%;
  ```
- **Combinado com px e %** para criar colunas híbridas.
- **Layouts responsivos** adaptando-se ao tamanho da tela.
- **Uso moderado e consciente** de `fr` para manutenção do layout.

---

## 🚀 Gulp e Automação
- **Compilação** de SCSS para CSS.
- **Minificação** de arquivos JS e CSS.
- **Otimização** de imagens com **Imagemin**.
- **Organização de tarefas** para facilitar o build e o deploy final.

---

## ✅ Boas Práticas Aplicadas
- Código limpo, modular e bem estruturado.
- Design visual consistente com o tema Disney+.
- Layout adaptável a diferentes dispositivos.
- Imagens leves e carregamento rápido.
- Testes realizados em múltiplos navegadores.

---

> Projeto desenvolvido com foco em performance, responsividade e fidelidade visual à plataforma original do Disney Plus.
