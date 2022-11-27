const { Op } = require("sequelize");
const models = require("../models/index");
const loansEndpoints = {};
const jsonwebtoken = require("jsonwebtoken");
const { sequelize } = require("../models/index");

// Creamos nuevo pedido. Hay que pasarle por el body: (article)

loansEndpoints.newLoan = async(req,res) => {
    const { authorization } = req.headers;
    const [strategy, jwt] = authorization.split(" ");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET); 
    const data = req.body;
    const todaysDate = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    console.log(`${todaysDate}`.bgMagenta);
    try {
      await models.loan.create({
        date_of_loan: todaysDate,
        userIdUser: payload.id_user,
        articleIdArticles: data.article,
    }),
    res.send(`Tu pedido ha sido generado`);
} catch (error) {
        res.send(error);
    }
}

// Modificamos un pedido. Hay que pasarle por body: ("articuloNuevo":,"articuloViejo":)

loansEndpoints.modifyLoan = async(req,res)=>{
    const { authorization } = req.headers;
    const [strategy, jwt] = authorization.split(" ");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    let data = req.body;
    try {
      let resp = await models.loan.update({
        articleIdArticles: data.articuloNuevo,
      },{where: {userIdUser:payload.id_user, articleIdArticles:data.articuloViejo }})
      res.send(`Si su pedido anterior era ${data.articuloViejo}, su pedido ha sido actualizado a ${data.articuloNuevo}`)
    } catch (error) {
      res.send(error)
    }
}

// Mostramos los pedidos hechos por el usuario.

loansEndpoints.myLoans = async(req,res) => {
  const { authorization } = req.headers;
    const [strategy, jwt] = authorization.split(" ");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    try {
      let  id  = payload.id_user;
      let resp = await models.loan.findAll({
        where: {
          userIdUser: id,
        },
      });
      res.send(resp);
    }catch(error){
      res.send(error)
    }
}


loansEndpoints.myLoansSeries = async(req,res) => {
  const { authorization } = req.headers;
    const [strategy, jwt] = authorization.split(" ");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    try {
      let  id  = payload.id_user;
      let resp = await sequelize.query(
        `SELECT loans.date_of_loan, loans.date_of_return, loans.id_loan, series.title, series.summary, series.poster
        FROM articles
        Join loans ON loans.ArticleIdArticles = articles.id_articles
        Join series on series.articleIdArticles = articles.id_articles
        WHERE loans.userIdUser = ${id}`, {type: sequelize.QueryTypes.SELECT}
      )
      res.send(resp);
    }catch(error){
      res.send(error)
    }
}

loansEndpoints.myLoansMovies = async(req,res) => {
  const { authorization } = req.headers;
    const [strategy, jwt] = authorization.split(" ");
    const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    try {
      let  id  = payload.id_user;
      let resp = await sequelize.query(
        `SELECT loans.date_of_loan, loans.date_of_return, loans.id_loan, movies.title, movies.summary, movies.poster
        FROM articles
        Join loans ON loans.ArticleIdArticles = articles.id_articles
        Join movies on movies.articleIdArticles = articles.id_articles
        WHERE loans.userIdUser = ${id}`, {type: sequelize.QueryTypes.SELECT});
      res.send(resp);
    }catch(error){
      res.send(error)
    }
}


// Mostramos todos los pedidos (solo el admin lo puede hacer)

loansEndpoints.allLoans = async (req,res) => {
  try {
    let resp = await models.loan.findAll();
    res.send(resp);
  } catch (error) {
    res.send(error)
}
}
module.exports = loansEndpoints;
