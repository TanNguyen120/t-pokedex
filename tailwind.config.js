/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
      },
      linkStyle: {

      }
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'red-space': "url('../public/spaceBG.jpg')",
      'magic-circle': "url('../public/borderPoke.png')",
      // 'magic-circle': "url('../public/newPokeBorder1.gif')",
      'main-bg': "url('../public/bodyBG.png')",
      'evoPokeBg': "url('../public/pokeBorder.png')",
      'gold-frame': "url('../public/gold-frame.png')",
      'blue-abstract': "url('../public/abstract-background-blue.jpg')",
      'grey-abstract': "url('../public/abstractGrey.jpg')",
      'whitePatternDiamond': "url('../public/patternDiamonWhite.jpg')",
      "whiteTriPattern": "url('../public/whiteTriPat.jpg')",
      "smallGreyWhite": "url('../public/smallGreyWhiteBG.jpg')",
      "seaWhite": "url('../public/seaWhite.jpg')",
      "whiteWallPaint": "url('../public/whiteWall.jpg')",
      "regionBg": "url('../public/regionBg.jpg')",
      "fabricBg": "url('../public/fabric.jpg')",
      'whiteMoonBg': "url('../public/whiteMoon.jpg')",
      'whiteStripe': "url('../public/whiteStripe.jpg')",
      'whiteBowl': "url('../public/whiteBrige.jpg')",
      'whitePaper': "url('../public/whitePaper.jpg')",
      "xWhite": "url('../public/xWhite.jpg')",
      "whiteStripe2": "url('../public/whiteStripe2.jpg')",
      "whiteNature": "url('../public/whiteNature.jpg')",
      "whiteThings": "url('../public/whiteThings.jpg')",
      "whiteShineyWave": "url('../public/whiteShineyWave.jpg')",
      "whiteMarble": "url('../public/whiteMarble.jpg')",
      "whiteBubble": "url('../public/whiteBubble.jpg')",
      "whiteOpera": "url('../public/whiteOpera.png')",
      "whiteHair": "url('../public/whiteHair.png')",
      "whiteGreen": "url('../public/greenWhite.jpg')",
      "whiteCell": "url('../public/whiteCell.jpeg')",
      "colorfulAbstract": "url('../public/coulorfulAbstract.jpg')",
      "whiteVoid": "url('../public/voidSurge.png')",
      "whitePaint": "url('../public/whitePaint.jpeg')",
      "whiteManmosa": "url('../public/whiteMimosa.jpg')",
      "detectivePKC": "url('../public/detective-pikachu.jpg')",
      "pokemonBattle": "url('../public/battleBg.png')",
      "genninja": "url('../public/changingBG/genNinja.jpg')",
      "zapdos": "url('../public/changingBG/zapdos.jpg')",
      "garvedoir": "url('../public/changingBG/garvedoir.png')",
      "charizard": "url('../public/changingBG/charizard.jpg')",
      "zigglypuff": "url('../public/changingBG/zigglypuff.jpg')",
      "scarletXgold": "url('../public/changingBG/scarletxgold.jpg')"
    },
  },
  plugins: [],
}
