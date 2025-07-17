# Guia de Deploy - GitHub Pages

Este guia mostra como fazer o deploy do seu portfólio no GitHub Pages.

## Pré-requisitos

- Conta no GitHub
- Git instalado em sua máquina
- Repositório criado no GitHub

## Passo a Passo

### 1. Preparar o Repositório

```bash
# Clone seu repositório (substitua pelo seu)
git clone https://github.com/rubialefilho/portfolio-dio.git
cd portfolio-dio

# Adicione os arquivos do projeto
git add .
git commit -m "Initial commit: Portfolio setup"
git push origin main
```

### 2. Configurar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá para **Settings** (Configurações)
3. Role até a seção **Pages**
4. Em **Source**, selecione **Deploy from a branch**
5. Escolha a branch **main** e pasta **/ (root)**
6. Clique em **Save**

### 3. Acessar seu Site

Após alguns minutos, seu portfólio estará disponível em:
```
https://rubialefilho.github.io/portfolio-dio
```

## Domínio Personalizado (Opcional)

Para usar um domínio personalizado:

1. Crie um arquivo `CNAME` na raiz do projeto
2. Adicione seu domínio no arquivo (ex: `meuporfolio.com`)
3. Configure o DNS do seu domínio para apontar para `rubialefilho.github.io`

## Automatização com GitHub Actions

Para deploy automático, crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## Outras Opções de Deploy

### Netlify
1. Conecte seu repositório GitHub no Netlify
2. Configure build command: `echo "Build completed"`
3. Configure publish directory: `./`

### Vercel
1. Conecte seu repositório no Vercel
2. O deploy será automático a cada push

### Surge.sh
```bash
npm install -g surge
surge . meuporfolio.surge.sh
```

## Troubleshooting

### Site não aparece
- Verifique se o repositório é público
- Aguarde alguns minutos para propagação
- Verifique se o arquivo `index.html` está na raiz

### CSS/JS não carregam
- Verifique caminhos relativos nos arquivos
- Certifique-se de que não há caminhos absolutos locais

### Erro 404
- Verifique se o nome do repositório está correto
- Confirme se GitHub Pages está habilitado

## Dicas

- Use sempre caminhos relativos (`./assets/css/styles.css`)
- Teste localmente antes do deploy
- Mantenha arquivos organizados
- Use nomes de arquivos em minúsculas
- Evite espaços nos nomes de arquivos

## Suporte

Se encontrar problemas:
- Verifique a documentação do [GitHub Pages](https://docs.github.com/pages)
- Abra uma issue no repositório
- Entre em contato via LinkedIn
