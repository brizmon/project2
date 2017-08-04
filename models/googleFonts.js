const db = require('../db/config')

const googleFonts = {}

googleFonts.findAll = () =>
  db.query('SELECT * FROM googleFonts')

googleFonts.findById = id =>
  db.one('SELECT * FROM googleFonts WHERE id = $1',[id])
/*
googleFonts.create = font => db.one(

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
  [font] 
)*/

googleFonts.create = (font) => {
    return db.one(`
    INSERT INTO googleFonts
    (family,
    category,
    variants,
    regular)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, 
  ['font.family', 'font.category', 'font.variant', 'font.regular']
  //[res.locals.family,res.locals.category,res.locals.variant,res.locals.regular]
  );
}



googleFonts.destroy = (id) => {
    return db.none(`
    DELETE FROM googleFonts
    WHERE id = $1
    `, [id]);
}




module.exports = googleFonts