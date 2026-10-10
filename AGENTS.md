# Convenzioni Yukina (Pyragogy.org)

## Frontmatter dei post (YAML)

Ogni nuovo post DEVE includere **entrambi** i campi nel frontmatter:

```yaml
bannerImage: /banner/NN.webp
cover: /banner/NN.webp
```

- `bannerImage` — immagine nel banner in testa alla pagina
- `cover` — immagine di copertina per card/anteprime

Usa banner esistenti da `public/banner/` (NN.webp, c.png, lumaca.webp, obliqo.webp, og-image.webp).

## Struttura del post

- File Markdown in `src/contents/posts/{category}/`
- Frontmatter richiesto: `title`, `published`, `description`, `tags`, `category`, `author`, `draft`, `bannerImage`, `cover`
- Categoria `Research` per contributi accademici e proposte di ricerca