function filtraOcorrencias(paragrafo) {
  const ocorrencias = []
  // return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1)

  for (const palavra in paragrafo) {
    if (paragrafo[palavra] > 1) {
      ocorrencias.push(`${palavra} ${paragrafo[palavra]}x`)
    }
  }

  return ocorrencias
}

function montaSaidaArquivo(listaPalavras) {
  let textoFinal = ''
  listaPalavras.forEach((paragrafo, indice) => {
    const duplicadas = filtraOcorrencias(paragrafo).join(', ')
    if (duplicadas.length > 0) {
      textoFinal += `Palavras duplicadas no parágrafo ${indice}: ${duplicadas} \n`
    }
  });

  return textoFinal
}

export { montaSaidaArquivo }