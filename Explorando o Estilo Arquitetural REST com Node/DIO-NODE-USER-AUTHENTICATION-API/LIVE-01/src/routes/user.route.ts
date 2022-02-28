import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';


 const usersRouter = Router();

 usersRouter.get('/users', (req: Request, res: Response, next: NextFunction) =>{
    const users = [{userName: 'Renan'}];
    res.status(StatusCodes.OK).send(users);
 });

 usersRouter.get('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) =>{
    const uuid = req.params.uuid;
    // bancoDeDados.getUserByUUid(uuid);
    res.status(StatusCodes.OK).send({uuid});    
 });

 usersRouter.post('/users', (req: Request, res: Response, next: NextFunction) =>{
   const newUser = req.body;
   console.log(req.body); 
   res.status(StatusCodes.CREATED).send(newUser);
 });

 usersRouter.put('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) =>{
   const uuid = req.params.uuid;
   const modifieUser = req.body

   modifieUser.uuid = uuid;
   res.status(StatusCodes.OK).send({modifieUser});
 
 });

 usersRouter.delete('/users/:uuid', (req: Request<{ uuid: string}>, res: Response, next: NextFunction) =>{
//    const uuid = req.params.uuid;
   res.sendStatus(StatusCodes.OK)
 
 });

 export default usersRouter