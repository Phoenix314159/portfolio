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
  },

  async solar(req, res) {
    const {dbQuery, db: {run}} = req, text = await run(`${dbQuery}'solarText'`);
    res.status(200).send({text})
  },

  async adventure(req, res) {
    const {dbQuery, db: {run}} = req, text = await run(`${dbQuery}'adventureText'`);
    res.status(200).send({text})
  },

  async toolbox(req, res) {
    const {dbQuery, db: {run}} = req, text = await run(`${dbQuery}'toolboxText'`);
    res.status(200).send({text})
  },

  async youtube(req, res) {
    const {dbQuery, db: {run}} = req, text = await run(`${dbQuery}'youtubeText'`);
    res.status(200).send({text})
  },

  async feedback(req, res) {
    const {dbQuery, db: {run}} = req, text = await run(`${dbQuery}'feedbackText'`);
    res.status(200).send({text})
  },

  async weather(req, res) {
    const {dbQuery, db: {run}} = req, text = await run(`${dbQuery}'weatherText'`);
    res.status(200).send({text})
  },

  async blogger(req, res) {
    const {dbQuery, db: {run}} = req, text = await run(`${dbQuery}'bloggerText'`);
    res.status(200).send({text})
  }
}
