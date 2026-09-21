# 🎨 Desafio Prático: Pior UX

## Sobre o Projeto

Este projeto foi desenvolvido para a atividade **UI vs. UX & A Engenharia do Erro**.

A proposta é construir propositalmente uma interface ruim, confusa e irritante, mas que ainda permita ao usuário completar o fluxo.

O projeto simula um **cadastro de usuário em etapas**. Durante a navegação, o usuário encontra botões com funções inesperadas, mensagens confusas, validações exageradas, baixo contraste e outros problemas de usabilidade.

O objetivo não é criar um sistema realmente quebrado, e sim demonstrar, na prática, por que boas práticas de UI e UX são importantes.

### Fluxo

1. Tela inicial.
2. Tela de cadastro.
3. Validação dos campos.
4. Tela final de conclusão.

No final, o usuário consegue chegar à mensagem:

> **"Parabéns! Você sobreviveu à pior experiência de usuário possível."**

---

## 🧠 Princípios e Heurísticas Violados

### 1. Botões com funções inesperadas

Na tela inicial, o botão verde possui o texto **"CANCELAR E COMEÇAR"**, apesar de levar o usuário ao cadastro.

**Problema:** a cor e o texto criam uma expectativa diferente da ação realizada.

**Princípio relacionado:** Consistência e padrões / correspondência entre o sistema e o mundo real.

### 2. Feedback confuso

O sistema utiliza mensagens como:

> "Sucesso: ocorreu um erro com sucesso."

**Problema:** o usuário não consegue entender claramente se a operação foi concluída ou apresentou erro.

**Princípio relacionado:** Visibilidade do status do sistema.

### 3. Validação de senha exagerada

A senha precisa ter exatamente 8 caracteres.

**Problema:** a regra é desnecessariamente rígida e não informa uma justificativa útil.

**Princípio relacionado:** Prevenção de erros e flexibilidade.

### 4. Contraste ruim

Alguns textos possuem uma cor muito próxima da cor do fundo.

**Problema:** pessoas com dificuldades visuais podem ter dificuldade para ler as informações.

**Princípio relacionado:** Acessibilidade e critérios de contraste das WCAG.

### 5. Informação desnecessária

O formulário pergunta a cor favorita do usuário.

**Problema:** essa informação não é necessária para concluir um cadastro simples.

**Princípio relacionado:** Eficiência e minimização da carga cognitiva.

### 6. Termos que não aparecem

O usuário precisa marcar que leu termos que não são exibidos na página.

**Problema:** a interface exige uma ação sem fornecer a informação necessária para realizá-la conscientemente.

**Princípio relacionado:** Visibilidade, clareza e controle do usuário.

### 7. Botão "Finalizar" que não finaliza

Na tela de cadastro, o botão **"FINALIZAR"** não conclui o cadastro e apenas apresenta um alerta.

**Problema:** o rótulo não corresponde à ação.

**Princípio relacionado:** Correspondência entre o sistema e o mundo real.

### 8. Progresso inconsistente

A interface apresenta **"Etapa 3 de 1"**.

**Problema:** o usuário não consegue compreender corretamente em qual etapa está.

**Princípio relacionado:** Visibilidade do status do sistema.

### 9. Carga cognitiva desnecessária

A interface utiliza textos contraditórios, avisos desnecessários e instruções pouco claras.

**Problema:** o usuário precisa gastar mais esforço mental para descobrir como concluir uma tarefa simples.

**Princípio relacionado:** Design minimalista e reconhecimento em vez de memorização.

---

## ✅ Proposta de Correção / Versão Ideal

Em uma interface profissional, os problemas seriam corrigidos da seguinte forma:

| Problema | Correção |
|---|---|
| Botão Cancelar leva ao cadastro | Usar "Começar cadastro" |
| Feedback confuso | Informar claramente sucesso ou erro |
| Senha com exatamente 8 caracteres | Informar requisitos razoáveis e claros |
| Baixo contraste | Usar contraste adequado |
| Cor favorita obrigatória | Remover o campo se não for necessário |
| Termos inexistentes | Disponibilizar os termos antes da confirmação |
| "Finalizar" não finaliza | Fazer o botão executar exatamente o que seu nome indica |
| Etapa 3 de 1 | Mostrar a etapa real do processo |
| Mensagens confusas | Utilizar linguagem simples e objetiva |

Uma versão profissional também deveria apresentar:

- Hierarquia visual clara;
- Botões com nomes objetivos;
- Feedback compreensível;
- Boa acessibilidade;
- Contraste adequado;
- Formulários simples;
- Validações explicativas;
- Navegação previsível.

---

## 💻 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

Não é necessário utilizar framework ou banco de dados para executar o projeto.

---

## ▶️ Como Executar

### Opção 1 — Abrir localmente

Baixe ou clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd desafio-pior-ux
```

Depois, abra o arquivo:

```text
index.html
```

em um navegador.

### Opção 2 — VS Code

1. Abra a pasta no Visual Studio Code.
2. Abra o arquivo `index.html`.
3. Utilize o Live Server, caso esteja instalado.
4. Acesse o endereço exibido pelo Live Server.

---

## 🌐 GitHub Pages

Depois de publicar o projeto no GitHub:

1. Abra o repositório.
2. Entre em **Settings**.
3. Acesse **Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main`.
6. Selecione a pasta `/root`.
7. Salve.
8. Aguarde a publicação.

Depois disso, o GitHub fornecerá um link para acessar o site.

---

## 🧪 Playtest

O projeto foi planejado para ser funcional mesmo utilizando elementos propositalmente ruins.

Durante o teste, outro grupo deverá tentar:

1. Iniciar o cadastro;
2. Descobrir o funcionamento dos botões;
3. Preencher os campos;
4. Resolver as validações;
5. Chegar à tela final.

O objetivo do playtest é observar quais elementos causam mais confusão e comparar essas dificuldades com os princípios de UX apresentados neste README.

---

## 👥 Equipe

- Integrante 1: Vitor Felipe Lenz


## 📚 Conclusão

O projeto demonstra que uma interface visualmente simples ainda pode proporcionar uma experiência ruim quando seus elementos não são claros, previsíveis, acessíveis e consistentes.

Ao criar intencionalmente esses problemas, conseguimos perceber na prática a importância da UI e da UX no desenvolvimento de sistemas.
