const getTraitsMeta = (genome) => {
  const meta = {
    total: 0,
    percent: 0.0,
    fifteens: 0,
  }

  for (let i = 0; i < genome.length; i++) {
    meta.total += genome[i]

    if (genome[i] === 15) meta.fifteens += 1
  }

  meta.percent = Math.round((meta.total / 375 + Number.EPSILON) * 100) / 100

  return meta
}

export default getTraitsMeta
