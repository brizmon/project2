const db = require('../db/config')

const googleFonts = {}

googleFonts.findAll = () =>
  db.query('SELECT * FROM googleFonts')

googleFonts.findById = id =>
  db.one('SELECT * FROM googleFonts WHERE id = $1',[id])

googleFonts.save = font => db.one(
  `
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
  [font.family, "a", "b","c" ] 
)
  

googleFonts.destroy = (id) => {
    return db.none(`
    DELETE FROM googleFonts
    WHERE id = $1
    `, [id]);
}




module.exports = googleFonts