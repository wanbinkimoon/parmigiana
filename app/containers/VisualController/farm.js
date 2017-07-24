export const Farm = (fetus, signal, switcher) => {

  let calf = {
    ...fetus
  }

  if (signal.somatic != undefined && signal.psychic != undefined) {
  calf.soma[switcher.soma] = signal.somatic[switcher.soma]
  calf.psiche[switcher.psiche] = signal.psychic[switcher.psiche]

  return calf
}


}