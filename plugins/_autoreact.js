let handler = async (m, { conn }) => {
    let emot = ["π", "π", "π", "π₯²", "βΊοΈ", "π", "π", "π", "π", "π€¨", "π", "π€©", "π₯³", "π", "π£", "π₯Ί", "π€", "π‘", "π₯΅", "π±", "π΄", "π€‘", "β οΈ", "π", "π", "π", "πΏ", "π", "π₯"].getRandom();
    conn.sendMessage(m.chat, {
        react: {
            text: emot,
            key: m.key
        }
    })
}
handler.customPrefix = /^(bilek|banh|cum|kntl|y|mmk|p|baco(t|d)|wibu|pantek|pepek|an?jg|crot)$/i
handler.command = new RegExp

//['bilek', 'banh', 'cum', 'crot', 'p', 'y', 'kontol', 'kntl', 'mmk', 'memek', 'anjg', 'ajg']
export default handler