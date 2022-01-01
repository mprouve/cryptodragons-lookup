const getTraitsMeta = (genome) => {
  const meta = {
    totalTraits: 0,
    percent: 0.0,
    fifteens: 0,
  }

  for (let i = 0; i < genome.length; i++) {
    meta.totalTraits += genome[i]

    if (genome[i] === 15) meta.fifteens += 1
  }

  meta.percent = Math.round((meta.totalTraits / 375 + Number.EPSILON) * 100) / 100

  return meta
}

export default getTraitsMeta
