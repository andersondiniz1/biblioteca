import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();
const porta: number = 3000;

app.use(bodyParser.json());

let livros = [
  { id: 1, titulo: "Aprendendo TypeScript", autor: "John Doe" },
  { id: 2, titulo: "Node.js para Iniciantes", autor: "Jane Smith" },
];

app.get("/livros", (req: Request, res: Response) => {
  res.send(livros);
});

app.get("/livros/:id", (req: Request, res: Response) => {
  // const livro = livros.find((l) => l.id === parseInt(req.params.id));
  let livro;
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].id === parseInt(req.params.id)) {
      livro = livros[i];
    }
  }

  if (!livro) {
    return res.status(404).json({ mensagem: "Livro não encontrado!" });
  }

  res.send(livro);
});

app.post("/livros/", (req: Request, res: Response) => {
  let objLivro = {
    id: livros.length + 1,
    titulo: req.body.titulo,
    autor: req.body.autor,
  };
  livros.push(objLivro);
  res.status(201).json(objLivro);
});

app.put("/livros/:id", (req: Request, res: Response) => {
  let objLivro = {
    id: parseInt(req.params.id),
    titulo: req.body.titulo,
    autor: req.body.autor,
  };

  for (let i = 0; i < livros.length; i++) {
    if (livros[i].id === parseInt(req.params.id)) {
      livros[i] = objLivro;
    }
  }

  if (!objLivro) {
    return res.status(404).json({ mensagem: "Livro não encontrado!" });
  }

  res.status(201).json(objLivro);
});

app.delete("/livros/:id", (req: Request, res: Response) => {
  livros = livros.filter((livro) => livro.id !== parseInt(req.params.id));
  res.json({ mensagem: "Livro removido com sucesso!" });
});

/* app.delete("/livros/:id", (req: Request, res: Response) => {
  let livroPos = livros.findIndex((l) => l.id === parseInt(req.params.id));
  if (livroPos !== -1) {
    livros.splice(livroPos, 1);
    return res.json({ mensagem: "Livro removido com sucesso!" });
  }
  res.status(404).json({ mensagem: "Livro não encontrado!" });
}); */

app.listen(porta, () => {
  console.log(`Server ON http://localhost:${porta}`);
});
