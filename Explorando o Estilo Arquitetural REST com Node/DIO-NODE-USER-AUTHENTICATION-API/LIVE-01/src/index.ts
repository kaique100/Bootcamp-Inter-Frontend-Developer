import express from "express";
import StatusRoute from "./routes/status.route";
import usersRoute from "./routes/user.route";

const app = express();

// configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// configurações de Rotas
app.use(StatusRoute)
app.use(usersRoute);


// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
})