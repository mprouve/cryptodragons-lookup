const getTraitsMeta = (type, genome) => {
  const meta = {
    totalTraits: 0,
    percent: 0.0,
    tenToFourteens: 0,
    fifteens: 0,
    tier: 0,
    strength: 0,
    secretGene: ''
  }

  for (let i = 0; i < genome.length; i++) {
    const geneNum = i + 1
    const trait = genome[i]

    // totalTraits
    meta.totalTraits += trait

    // tenToFourteens
    if (genome[i] >= 10 && genome[i] < 15) meta.tenToFourteens += 1

    // fifteens
    if (genome[i] === 15) meta.fifteens += 1

    // tier
    // strength
    if (geneNum <= 15) {
      meta.tier += 1
      meta.strength += trait * 1 * geneNum
    } else if (geneNum >= 16 && geneNum <= 19) {
      if (type === 'Rare' && trait > 0) {
        meta.tier += 1
      } else if (type !== 'Common' && type !== 'Rare') {
        meta.tier += 1
      }

      meta.strength += trait * 2 * geneNum
    } else if (geneNum >= 20 && geneNum <= 24) {
      // secretGene
      if (geneNum === 20) meta.secretGene = trait

      if (geneNum === 20 && type === 'Rare' && trait > 0) {
        meta.tier += 1
      } else if (type === 'Epic' && trait > 0) {
        meta.tier += 1
      } else if (type !== 'Common' && type !== 'Rare' && type !== 'Epic') {
        meta.tier += 1
      }

      meta.strength += trait * 3 * geneNum
    } else if (geneNum === 25) {
      if (type === 'Legendary' && trait > 0) {
        meta.tier += 1
      }

      meta.strength += trait * 3 * geneNum
    }
  }

  // percent
  meta.percent = Math.round((meta.totalTraits / 375 + Number.EPSILON) * 10000) / 100

  return meta
}

export default getTraitsMeta
