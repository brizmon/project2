const db = require('../db/config')

const googleFonts = {}

googleFonts.findAll = () =>
  db.query('SELECT * FROM googleFonts')

googleFonts.findById = id =>
  db.one('SELECT * FROM googleFonts WHERE id = $1',[id])

googleFonts.create = font => db.one(`
  INSERT INTO googleFonts (
  family,
  category,
  variants,
  regular
  )VALUES(
  $/family/,
  $/category/,
  $/variants/,
  $/regular/
  )RETURNING *`,
  font
)

googleFonts.update = font => db.one(`
  UPDATE googleFonts SET
  family = $1,
  category = $2,
  variants = $3,
  regular = $4
  WHERE id = $5
  RETURNING *`,
  [font.family,
  font.category,
  font.variants,
  font.regular,
  font.id])
  

module.exports = googleFonts