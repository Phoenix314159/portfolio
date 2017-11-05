module.exports = {

  async aboutMe1(req, res) {
    const {dbQuery, db: {run}} = req, text = await run(`${dbQuery}'aboutMeText1'`);
    res.status(200).send({text})
  },

  async aboutMe2(req, res) {
    const {dbQuery, db: {run}} = req, text = await run(`${dbQuery}'aboutMeText2'`);
    res.status(200).send({text})
  },

  async keyboards(req, res) {
    const {dbQuery, db: {run}} = req, text = await run(`${dbQuery}'keyboardText'`);
    res.status(200).send({text})
  },

  async vimeo(req, res) {
    const {dbQuery, db: {run}} = req, text = await run(`${dbQuery}'vimeoText'`);
    res.status(200).send({text})
  }
}
