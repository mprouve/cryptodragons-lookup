const getTierAndStrength = (type, genome) => {
  let tier = 0
  let strength = 0

  for (let i = 0; i < genome.length; i++) {
    const geneNum = i + 1
    const trait = genome[i]

    if (geneNum <= 15) {
      tier += 1
      strength += trait * 1 * geneNum
    } else if (geneNum >= 16 && geneNum <= 19) {
      if (type === "Rare" && trait > 0) {
        tier += 1
      } else if (type !== "Common" && type !== "Rare") {
        tier += 1
      }

      strength += trait * 2 * geneNum
    } else if (geneNum >= 20 && geneNum <= 24) {
      if (type === "Epic" && trait > 0) {
        tier += 1
      } else if (type !== "Common" && type !== "Rare" && type !== "Epic") {
        tier += 1
      }

      strength += trait * 3 * geneNum
    } else if (geneNum === 25) {
      if (type === "Legendary" && trait > 0) {
        tier += 1
      }

      strength += trait * 3 * geneNum
    }
  }

  return { tier, strength }
}

export default getTierAndStrength
