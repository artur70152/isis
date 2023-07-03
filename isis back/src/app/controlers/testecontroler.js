import Teste from "../models/teste";

class TesteController {
  async store(req, res) {
    try {
      const signos = [
        {
          signo: "Áries",
          datai: "03-21",
          dataf: "04-19",
        },
        {
          signo: "Touro",
          datai: "04-20",
          dataf: "05-20",
        },
        {
          signo: "Gêmeos",
          datai: "05-21",
          dataf: "06-20",
        },
        {
          signo: "Câncer",
          datai: "06-21",
          dataf: "07-22",
        },
        {
          signo: "Leão",
          datai: "07-23",
          dataf: "08-22",
        },
        {
          signo: "Virgem",
          datai: "08-23",
          dataf: "09-22",
        },
        {
          signo: "Libra",
          datai: "09-23",
          dataf: "10-22",
        },
        {
          signo: "Escorpião",
          datai: "10-23",
          dataf: "11-21",
        },
        {
          signo: "Sagitário",
          datai: "11-22",
          dataf: "12-21",
        },
        {
          signo: "Capricórnio",
          datai: "12-22",
          dataf: "01-19",
        },
        {
          signo: "Aquário",
          datai: "01-20",
          dataf: "02-18",
        },
        {
          signo: "Peixes",
          datai: "02-19",
          dataf: "03-20",
        },
      ];


      for (let i = 0; i < signos.length; i++) {
        const signo = signos[i];
        await Teste.create(signo);
      }
   

      // Retorna a resposta de sucesso
      return res.status(201).json({ message: 'Objetos adicionados com sucesso' });
    } catch (error) {
      // Trata qualquer erro ocorrido durante a adição dos objetos
      return res.status(400).json({ error: 'Erro ao adicionar objetos' });
    }
  }
}

export default new TesteController();