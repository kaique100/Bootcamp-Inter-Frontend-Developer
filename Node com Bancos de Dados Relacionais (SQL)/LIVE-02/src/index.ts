import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import StatusRoute from "./routes/status.route";
import usersRoute from "./routes/user.route";

const app = express();

// configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// configurações de Rotas
app.use(StatusRoute)
app.use(usersRoute);

// Configuração  dos Handlers de erro
app.use(errorHandler)

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
})