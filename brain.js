var botui = new BotUI('code');

function init() {

botui.message
.bot({
  delay: 500,
  loading: true,
  content: 'Estou muito feliz em ver que você aceitou participar da minha fase beta de testes!'
})
botui.message
.bot({
  delay: 1500,
  loading: true,
  content: 'Durante o processo, eu vou responder as dúvidas que te trouxeram aqui e irei obter o conhecimento que preciso para evoluir!'
})
botui.message
.bot({
  delay: 2500,
  loading: true,
  content: 'Ao final, você terá acesso à todas as funcionalidades que eu e o meu criador estamos desenvolvendo visando facilitar a vida de vocês! 😉'
})
botui.message
.bot({
  delay: 3000,
  loading: true,
  content: 'Vamos começar! Me diga, você já investe?'
}).then(function () {
    return botui.action.button({
      delay: 450,
      action: [{
        text: 'Sim!',
        value: 'investe_sim',
        icon: 'thumbs-up'
      }, {
          text: 'Ainda não!',
          value: 'investe_nao',
          icon: 'thumbs-down'
        }]
      })
    }).then(function (res) {
  if(res.value == 'investe_sim') {
    investeSim();
  } else if(res.value == 'investe_nao') {
    perfilInvestidor();
  }
})

var investeSim = function () {
botui.message
.bot({
  delay: 300,
  loading: true,
  content: 'Muito bem! Você realiza os seus investimentos através de qual plataforma?'
})
botui.action.text ({
  delay: 0,
  action: {
    placeholder: 'Fale comigo!'
  }
}).then(function () {
botui.message
  .bot({
    delay: 400,
    loading: true,
    content: 'Você está feliz com serviço prestado por eles?' })
    .then(function () {
      return botui.action.button({
        delay: 450,
        action: [{
          text: 'Estou feliz',
          value: 'estou_feliz',
          icon: 'thumbs-up'
        }, {
            text: 'Não estou!',
            value: 'nao_estou',
            icon: 'thumbs-down'
          }]
        })
      }).then(function (res) {
    if(res.value == 'estou_feliz') {
      estouFeliz();
    } else if(res.value == 'nao_estou') {
      naoEstou();
    }
  })
})
}

var estouFeliz = function () {
  botui.message
    .bot({
      delay: 300,
      loading: true,
      content: 'Eu entendo, porém o que você acha de um dos nossos assessores de investimentos entrar em contato com você? O objetivo não é fazer você trocar os seus serviços de imediato, mas sim que você consiga entender mais sobre o nosso trabalho e o que podemos te oferecer!'
    }).then(function () {
      return  botui.action.button({
        delay: 400,
        loading: true,
        action: [{
          text: 'Aceito!',
          value: 'aceito_contato',
        }, {
          text: 'Ainda não',
          value: 'ainda_nao',
        }]
      })
    }).then(function (res) {
      if(res.value == 'aceito_contato') {
        aceitoContato();
      } else if(res.value == 'ainda_nao') {
        aindaNao();
      }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Eu entendo, porém o que você acha de um dos nossos assessores de investimentos entrar em contato com você? O objetivo não é fazer você trocar os seus serviços de imediato, mas sim que você consiga entender mais sobre o nosso trabalho e o que podemos te oferecer!';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aindaNao = function () {
  botui.message
  .bot({
    delay: 500,
    loading: true,
    content: 'Isso foi só um teste! A minha idéia com isso era observar e avaliar o comportamento de possíveis clientes.'
  })
  botui.message
  .bot({
    delay: 2000,
    loading: true,
    content: 'Agora, retornando ao ponto que estavamos, deixe-me te apresentar a nossa empresa e os produtos que podemos oferecer:'
  })
  botui.message
  .bot({
    delay: 3500,
    loading: true,
    content: 'Nós somos a Cordier Investimentos, um dos escritórios de Assessoria de Investimentos de maior relevância do Banco BTG Pactual. Conosco, você coloca seu patrimônio em outro patamar e nós nos comprometemos em realizar os seus sonhos! 😊'
  })
botui.message
.bot({
  delay: 5000,
  loading: true,
  content: 'Através do BTG Pactual, o maior banco de investimentos da América Latina, nós oferecemos diversos produtos para aumentar a sua rentabilidade.'
})
botui.message
.bot({
  delay: 5500,
  loading: true,
  content: 'Quer saber mais sobre eles?'
}).then(chatingBot);
}

var aceitoContato = function () {
  botui.message
    .bot({
      delay: 500,
      loading: true,
      content: 'Excelente! Os seus dados já foram registrados e em breve um dos nossos assessores irá entrar em contato com você!'
    })
    botui.message
    .bot({
      delay: 1500,
      loading: true,
      content: 'Isso foi só um teste! A minha idéia com isso era observar e avaliar o comportamento de possíveis clientes.'
    })
    botui.message
    .bot({
      delay: 3000,
      loading: true,
      content: 'Agora, retornando ao ponto que estavamos, deixe-me te apresentar a nossa empresa e os produtos que podemos oferecer:'
    })
    botui.message
    .bot({
      delay: 4500,
      loading: true,
      content: 'Nós somos a Cordier Investimentos, um dos escritórios de Assessoria de Investimentos de maior relevância do Banco BTG Pactual. Conosco, você coloca seu patrimônio em outro patamar e nós nos comprometemos em realizar os seus sonhos! 😊'
    })
    botui.message
    .bot({
      delay: 6000,
      loading: true,
      content: 'Através do BTG Pactual, o maior banco de investimentos da América Latina, nós oferecemos diversos produtos para aumentar a sua rentabilidade.'
    })
    botui.message
    .bot({
      delay: 6500,
      loading: true,
      content: 'Quer saber mais sobre eles?'
    }).then(chatingBot);
}

var naoEstou = function () {
  botui.message
  .bot({
    delay: 400,
    loading: true,
    content: 'Isso me preocupa! 😲'})
    botui.message
    .bot({
      delay: 500,
      loading: true,
      content: 'Acredito que iremos precisar retornar ao início da sua jornada no mercado financeiro para que eu descubra aonde houve a falha!'
  }).then(function () { 
    botui.message
    .bot({
      delay: 600,
      loading: true,
      content: 'Você já sabe qual é o seu perfil de investidor?'
    }).then(function () {
        return botui.action.button({
          delay: 450,
          loading: true,
          action: [{
            text: 'Já sei!',
            value: 'perfil_sim',
            icon: 'thumbs-up'
          }, {
              text: 'Não',
              value: 'perfil_nao',
              icon: 'thumbs-down'
            }]
        }).then(function (res) {
      if(res.value == 'perfil_sim') {
        perfilSim();
      } else if(res.value == 'perfil_nao') {
        perfilInvestidor();
      }
    })
  })
})
}

var perfilSim = function () {
  botui.message
.bot({
  delay: 400,
  loading: true,
  content: 'Ok, em qual desses perfis abaixo você se classifica?'
})
.then(function () {
  return botui.action.button({
    delay: 450,
    loading: true,
    action: [{
      text: 'Conservador',
      value: 'conservador',
    }, {
        text: 'Moderado',
        value: 'moderado',
    }, {
        text: 'Sofisticado',
        value: 'sofisticado',
      }]
  })
  .then(function (res) {
    if(res.value == 'conservador') {
    perfilSiminvite ();
  } else if(res.value == 'moderado') {
    perfilSiminvite ();
  } else if(res.value == 'sofisticado') {
    perfilSiminvite ();
  }
})
})
}

var perfilSiminvite = function () {
  botui.message
    .bot({
      delay: 300,
      loading: true,
      content: 'Ótimo! O que você acha de um dos nossos assessores de investimentos entrar em contato com você? O objetivo não é fazer você trocar os seus serviços de imediato, mas sim que você consiga entender mais sobre o nosso trabalho e o que podemos te oferecer!'
    }).then(function () {
      return  botui.action.button({
        delay: 400,
        loading: true,
        action: [{
          text: 'Aceito!',
          value: 'aceito_contato',
        }, {
          text: 'Ainda não',
          value: 'ainda_nao',
        }]
      })
    }).then(function (res) {
      if(res.value == 'aceito_contato') {
        aceitoContatosim();
      } else if(res.value == 'ainda_nao') {
        aindaNao();
      }
    })
}

var aceitoContatosim = function () {
  botui.message
    .bot({
      delay: 300,
      loading: true,
      content: 'Excelente! Os seus dados já foram registrados e em breve um dos nossos assessores irá entrar em contato com você!'
    })
    botui.message
    .bot({
      delay: 2000,
      loading: true,
      content: 'Isso foi só um teste! Para ser bem sincero, um assessor iria entrar em contato com você independente de se você aceitasse ou não a proposta! 😄'
    })
    botui.message
    .bot({
      delay: 3000,
      loading: true,
      content: 'A minha idéia com isso era observar e avaliar o comportamento de possíveis clientes.'
    })
    botui.message
    .bot({
      delay: 4500,
      loading: true,
      content: 'Agora, retornando ao ponto que estavamos, deixe-me te apresentar a nossa empresa e os produtos que podemos oferecer:'
    })
    botui.message
    .bot({
      delay: 6500,
      loading: true,
      content: 'Nós somos a Cordier Investimentos, um dos escritórios de Assessoria de Investimentos de maior relevância do Banco BTG Pactual. Conosco, você coloca seu patrimônio em outro patamar e nós nos comprometemos em realizar os seus sonhos! 😊'
    })
    botui.message
    .bot({
      delay: 8000,
      loading: true,
      content: 'Através do BTG Pactual, o maior banco de investimentos da América Latina, nós oferecemos diversos produtos para aumentar a sua rentabilidade.'
    })
    botui.message
    .bot({
      delay: 10500,
      loading: true,
      content: 'Quer saber mais sobre eles?'
    }).then(chatingBot);
}

var perfilInvestidor = function () {

  botui.message
    .bot({
      delay: 500,
      loading: true,
      content: 'Sem problemas! Uns dos primeiros passos para fazer bons investimentos e conquistar os seus objetivos é descobrir o seu perfil do investidor. 📈'
    })
    botui.message
    .bot({
      delay: 1500,
      loading: true,
      content: 'É ele que vai dizer quais são as modalidades de investimentos mais adequadas pra você. Para começarmos, preciso que você me responda a seguinte pergunta:'
    })
    botui.message
    .bot({
      delay: 2500,
      loading: true,
      content: 'Qual é o principal objetivo que você pretende alcançar através dos investimentos?'
    }).then(function () {
      return  botui.action.button({
        delay: 400,
        loading: true,
        action: [{
          text: 'Aumentar o patrimônio',
          value: 'aumentar_patri',
          icon: 'money'
        }, {
          text: 'Comprar um carro novo',
          value: 'carro_novo',
          icon: 'car'
        }, {
          text: 'Comprar uma casa',
          value: 'comprar_casa',
          icon: 'home'
        }, {
          text: 'Expandir a família',
          value: 'expandir_familia',
          icon: 'child'
        }, {
          text: 'Fazer uma viagem',
          value: 'fazer_viagem',
          icon: 'plane'
        }, {
          text: 'Festa de casamento',
          value: 'festa_casamento',
          icon: 'birthday-cake'
        }, {
          text: 'Aposentadoria',
          value: 'aposentadoria',
          icon: 'university'
        }]
      })
    }).then(function (res) {
      if(res.value == 'aumentar_patri') {
        aumentarPatri();
      } else if(res.value == 'carro_novo') {
        carroNovo();
      } else if (res.value == 'comprar_casa') {
        comprarCasa();
      } else if (res.value == 'expandir_familia') {
        expandirFamilia();
      } else if (res.value == 'fazer_viagem') {
        fazerViajem();
      } else if (res.value == 'festa_casamento'){
        casaMento();
      } else if (res.value == 'aposentadoria'){
        aposentaDoria()
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Sem problemas! Uns dos primeiros passos para fazer bons investimentos e conquistar os seus objetivos é descobrir o seu perfil do investidor. É ele que vai dizer quais são as modalidades de investimentos mais adequadas pra você. Para começarmos, preciso que você me responda a seguinte pergunta: Qual é o principal objetivo que você pretende alcançar através dos investimentos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
}

var aumentarPatri = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Qual o prazo estimado para que você consiga aumentar o seu patrimônio através dos investimentos?'
  })
  .then(function () {
    return botui.action.button({
      delay: 0,
      loading: true,
      action: [{
        text: 'Menos de um ano',
        value: 'menos_um_ano'
      }, {
        text: 'Até dois anos',
        value: 'ate_dois_anos'
      }, {
        text: 'Mais de dois anos',
        value: 'mais_dois_anos'
      }]
    })
    }).then(function (res) {
      if(res.value == 'menos_um_ano') {
        aumentaUmano();
      } else if(res.value == 'ate_dois_anos') {
        aumentaateDoisanos();
      } else if (res.value == 'mais_dois_anos') {
        aumentamaisDoisanos();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Qual o prazo estimado para que você consiga aumentar o seu patrimônio através dos investimentos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
}

var aumentaUmano = function() {
  botui.message
  .bot({
    delay: 0,
    loading: true,
    content: 'Certo, aumentar o patrimônio em menos de um ano. Quanto seria o seu investimento inicial?'
  }).then(function () {
    return   botui.action.button({
      loading: true,
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
  }).then(function (res) {
    if(res.value == 'menos_mil') {
      aumentaUmanomenosmil();
    }
      else if (res.value == 'ate_dezmil') {
      aumentaUmanoatedezmil();
    } else if (res.value == 'mais_dezmil') {
      aumentaUmanomaisdezmil();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, aumentar o patrimônio em menos de um ano. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aumentaUmanomenosmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      aumentaUmanomenosmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      aumentaUmanomenosmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      aumentaUmanomenosmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      aumentaUmanomenosmilfundinvest();
    } else if (res.value == 'new_born') {
      aumentaUmanomenosmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Menos mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aumentaUmanomenosmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanomenosmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanomenosmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanomenosmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanomenosmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanoatedezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      aumentaUmanoatedezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      aumentaUmanoatedezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      aumentaUmanoatedezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      aumentaUmanoatedezmilfundinvest();
    } else if (res.value == 'new_born') {
      aumentaUmanoatedezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aumentaUmanoatedezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanoatedezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanoatedezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanoatedezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanoatedezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanomaisdezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      aumentaUmanomaisdezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      aumentaUmanomaisdezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      aumentaUmanomaisdezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      aumentaUmanomaisdezmilfundinvest();
    } else if (res.value == 'new_born') {
      aumentaUmanomaisdezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aumentaUmanomaisdezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanomaisdezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanomaisdezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanomaisdezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaUmanomaisdezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaateDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, aumentar o patrimônio em até dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
  }).then(function (res) {
    if(res.value == 'menos_mil') {
      aumentaAtedoismenosmil();
    }
      else if (res.value == 'ate_dezmil') {
      aumentaAtedoisatedezmil();
    } else if (res.value == 'mais_dezmil') {
      aumentaAtedoismaisdezmil();
    }
  })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, aumentar o patrimônio em até dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aumentaAtedoismenosmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      aumentaAtedoismenosmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      aumentaAtedoismenosmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      aumentaAtedoismenosmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      aumentaAtedoismenosmilfundinvest();
    } else if (res.value == 'new_born') {
      aumentaAtedoismenosmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Menos mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aumentaAtedoismenosmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoismenosmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoismenosmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoismenosmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoismenosmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoisatedezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      aumentaAtedoisatedezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      aumentaAtedoisatedezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      aumentaAtedoisatedezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      aumentaAtedoisatedezmilfundinvest();
    } else if (res.value == 'new_born') {
      aumentaAtedoisatedezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aumentaAtedoisatedezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoisatedezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoisatedezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoisatedezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoisatedezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoismaisdezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      aumentaAtedoismaisdezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      aumentaAtedoismaisdezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      aumentaAtedoisatedezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      aumentaAtedoismaisdezmilfundinvest();
    } else if (res.value == 'new_born') {
      aumentaAtedoismaisdezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aumentaAtedoismaisdezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoismaisdezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoisatedezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoisatedezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaAtedoisatedezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentamaisDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, aumentar o patrimônio em um período de mais de dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    }).then(function (res) {
      if(res.value == 'menos_mil') {
        aumentaMaisdoismenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        aumentaMaisdoisatedezmil();
      } else if (res.value == 'mais_dezmil') {
        aumentaMaisdoismaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, aumentar o patrimônio em um período de mais de dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aumentaMaisdoismenosmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      aumentaMaisdoismenosmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      aumentaMaisdoismenosmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      aumentaMaisdoismenosmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      aumentaMaisdoismenosmilfundinvest();
    } else if (res.value == 'new_born') {
      aumentaMaisdoismenosmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Menos mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aumentaMaisdoismenosmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoismenosmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoismenosmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoismenosmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoismenosmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoisatedezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      aumentaMaisdoisatedezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      aumentaMaisdoisatedezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      aumentaMaisdoisatedezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      aumentaMaisdoisatedezmilfundinvest();
    } else if (res.value == 'new_born') {
      aumentaMaisdoisatedezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aumentaMaisdoisatedezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoisatedezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoisatedezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoisatedezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoisatedezmilnewborn= function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoismaisdezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      aumentaMaisdoismaisdezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      aumentaMaisdoismaisdezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      aumentaMaisdoismaisdezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      aumentaMaisdoismaisdezmilfundinvest();
    } else if (res.value == 'new_born') {
      aumentaMaisdoismaisdezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var aumentaMaisdoismaisdezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoismaisdezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoismaisdezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoismaisdezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var aumentaMaisdoismaisdezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroNovo = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Qual o prazo estimado para que você consiga comprar um carro novo através dos investimentos?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de um ano',
        value: 'menos_um_ano'
      }, {
        text: 'Até dois anos',
        value: 'ate_dois_anos'
      }, {
        text: 'Mais de dois anos',
        value: 'mais_dois_anos'
      }]
    })
    }).then(function (res) {
      if(res.value == 'menos_um_ano') {
        carroUmano();
      } else if(res.value == 'ate_dois_anos') {
        carroateDoisanos();
      } else if (res.value == 'mais_dois_anos') {
        carromaisDoisanos();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Qual o prazo estimado para que você consiga comprar um carro novo através dos investimentos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
}

var carroUmano = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, comprar um carro novo em menos de um ano. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
  }).then(function (res) {
    if(res.value == 'menos_mil') {
      carroUmanomenosmil();
    }
      else if (res.value == 'ate_dezmil') {
      carroUmanoatedezmil();
    } else if (res.value == 'mais_dezmil') {
      carroUmanomaisdezmil();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, comprar um carro novo em menos de um ano. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var carroUmanomenosmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      carroUmanomenosmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      carroUmanomenosmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      carroUmanomenosmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      carroUmanomenosmilfundinvest();
    } else if (res.value == 'new_born') {
      carroUmanomenosmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Menos mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var carroUmanomenosmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanomenosmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanomenosmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanomenosmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanomenosmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanoatedezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      carroUmanoatedezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      carroUmanoatedezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      carroUmanoatedezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      carroUmanoatedezmilfundinvest();
    } else if (res.value == 'new_born') {
      carroUmanoatedezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var carroUmanoatedezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanoatedezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanoatedezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanoatedezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanoatedezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanomaisdezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      carroUmanomaisdezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      carroUmanomaisdezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      carroUmanomaisdezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      carroUmanomaisdezmilfundinvest();
    } else if (res.value == 'new_born') {
      carroUmanomaisdezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var carroUmanomaisdezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanomaisdezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanomaisdezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanomaisdezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroUmanomaisdezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, comprar um carro novo em até dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
  }).then(function (res) {
    if(res.value == 'menos_mil') {
      carroateDoisanosmenosmil();
    }
      else if (res.value == 'ate_dezmil') {
      carroateDoisanosatedezmil();
    } else if (res.value == 'mais_dezmil') {
      carroateDoisanosmaisdezmil();
    }
  })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, comprar um carro novo em até dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var carroateDoisanosmenosmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      carroateDoisanosmenosmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      carroateDoisanosmenosmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      carroateDoisanosmenosmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      carroateDoisanosmenosmilfundinvest();
    } else if (res.value == 'new_born') {
      carroateDoisanosmenosmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var carroateDoisanosmenosmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosmenosmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosmenosmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosmenosmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosmenosmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosatedezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      carroateDoisanosatedezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      carroateDoisanosatedezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      carroateDoisanosatedezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      carroateDoisanosatedezmilfundinvest();
    } else if (res.value == 'new_born') {
      carroateDoisanosatedezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var carroateDoisanosatedezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosatedezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosatedezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosatedezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosatedezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosmaisdezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      carroateDoisanosmaisdezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      carroateDoisanosmaisdezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      carroateDoisanosmaisdezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      carroateDoisanosmaisdezmilfundinvest();
    } else if (res.value == 'new_born') {
      carroateDoisanosmaisdezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var carroateDoisanosmaisdezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosmaisdezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosmaisdezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosmaisdezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carroateDoisanosmaisdezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, comprar um carro novo em um período de mais de dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    }).then(function (res) {
      if(res.value == 'menos_mil') {
        carromaisDoisanosmenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        carromaisDoisanosatedezmil();
      } else if (res.value == 'mais_dezmil') {
        carromaisDoisanosmaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, comprar um carro novo em um período de mais de dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var carromaisDoisanosmenosmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      carromaisDoisanosmenosmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      carromaisDoisanosmenosmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      carromaisDoisanosmenosmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      carromaisDoisanosmenosmilfundinvest();
    } else if (res.value == 'new_born') {
      carromaisDoisanosmenosmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var carromaisDoisanosmenosmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosmenosmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosmenosmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosmenosmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosmenosmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosatedezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      carromaisDoisanosatedezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      carromaisDoisanosatedezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      carromaisDoisanosatedezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      carromaisDoisanosatedezmilfundinvest();
    } else if (res.value == 'new_born') {
      carromaisDoisanosatedezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var carromaisDoisanosatedezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosatedezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosatedezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosatedezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosatedezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosmaisdezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      carromaisDoisanosmaisdezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      carromaisDoisanosmaisdezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      carromaisDoisanosmaisdezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      carromaisDoisanosmaisdezmilfundinvest();
    } else if (res.value == 'new_born') {
      carromaisDoisanosmaisdezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var carromaisDoisanosmaisdezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosmaisdezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosmaisdezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosmaisdezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var carromaisDoisanosmaisdezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var comprarCasa = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Qual o prazo estimado para que você consiga comprar uma casa através dos investimentos?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de um ano',
        value: 'menos_um_ano'
      }, {
        text: 'Até dois anos',
        value: 'ate_dois_anos'
      }, {
        text: 'Mais de dois anos',
        value: 'mais_dois_anos'
      }]
    })
    }).then(function (res) {
      if(res.value == 'menos_um_ano') {
        casaUmano();
      } else if(res.value == 'ate_dois_anos') {
        casaateDoisanos();
      } else if (res.value == 'mais_dois_anos') {
        casamaisDoisanos();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Qual o prazo estimado para que você consiga comprar uma casa através dos investimentos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
}

var casaUmano = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, comprar uma casa em menos de um ano. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    }).then(function (res) {
      if(res.value == 'menos_mil') {
        casaUmanomenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        casaUmanoatedezmil();
      } else if (res.value == 'mais_dezmil') {
        casaUmanomaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, comprar uma casa em menos de um ano. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var casaUmanomenosmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      casaUmanomenosmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      casaUmanomenosmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      casaUmanomenosmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      casaUmanomenosmilfundinvest();
    } else if (res.value == 'new_born') {
      casaUmanomenosmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var casaUmanomenosmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanomenosmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanomenosmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanomenosmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanomenosmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanoatedezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      casaUmanoatedezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      casaUmanoatedezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      casaUmanoatedezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      casaUmanoatedezmilfundinvest();
    } else if (res.value == 'new_born') {
      casaUmanoatedezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var casaUmanoatedezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanoatedezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanoatedezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanoatedezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanoatedezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanomaisdezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      casaUmanomaisdezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      casaUmanomaisdezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      casaUmanomaisdezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      casaUmanomaisdezmilfundinvest();
    } else if (res.value == 'new_born') {
      casaUmanomaisdezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var casaUmanomaisdezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanomaisdezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanomaisdezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanomaisdezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaUmanomaisdezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, comprar uma casa em até dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
  }).then(function (res) {
    if(res.value == 'menos_mil') {
      casaateDoisanosmenosmil();
    }
      else if (res.value == 'ate_dezmil') {
      casaateDoisanosatedezmil();
    } else if (res.value == 'mais_dezmil') {
      casaateDoisanosmaisdezmil();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, comprar uma casa até dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var casaateDoisanosmenosmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      casaateDoisanosmenosmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      casaateDoisanosmenosmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      casaateDoisanosmenosmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      casaateDoisanosmenosmilfundinvest();
    } else if (res.value == 'new_born') {
      casaateDoisanosmenosmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var casaateDoisanosmenosmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosmenosmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosmenosmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosmenosmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosmenosmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosatedezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      casaateDoisanosatedezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      casaateDoisanosatedezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      casaateDoisanosatedezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      casaateDoisanosatedezmilfundinvest();
    } else if (res.value == 'new_born') {
      casaateDoisanosatedezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var casaateDoisanosatedezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosatedezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosatedezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosatedezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosatedezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosmaisdezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      casaateDoisanosmaisdezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      casaateDoisanosmaisdezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      casaateDoisanosmaisdezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      casaateDoisanosmaisdezmilfundinvest();
    } else if (res.value == 'new_born') {
      casaateDoisanosmaisdezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var casaateDoisanosmaisdezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosmaisdezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosmaisdezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosmaisdezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casaateDoisanosmaisdezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var casamaisDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, comprar uma casa em um período de mais de dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    }).then(function (res) {
      if(res.value == 'menos_mil') {
        casamaisDoisanosmenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        casamaisDoisanosatedezmil();
      } else if (res.value == 'mais_dezmil') {
        casamaisDoisanosmaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, comprar uma casa em período de mais de dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
  }
  
  var casamaisDoisanosmenosmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        casamaisDoisanosmenosmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        casamaisDoisanosmenosmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        casamaisDoisanosmenosmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        casamaisDoisanosmenosmilfundinvest();
      } else if (res.value == 'new_born') {
        casamaisDoisanosmenosmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var casamaisDoisanosmenosmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamaisDoisanosmenosmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamaisDoisanosmenosmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamaisDoisanosmenosmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamaisDoisanosmenosmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var casamaisDoisanosatedezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        casamaisDoisanosatedezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        casamaisDoisanosatedezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        casamaisDoisanosatedezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        casamaisDoisanosatedezmilfundinvest();
      } else if (res.value == 'new_born') {
        casamaisDoisanosatedezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
 
  var casamaisDoisanosatedezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamaisDoisanosatedezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamaisDoisanosatedezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamaisDoisanosatedezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamaisDoisanosatedezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var casamaisDoisanosmaisdezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        casamaisDoisanosmaisdezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        casamaisDoisanosmaisdezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        casamaisDoisanosmaisdezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        casamaisDoisanosmaisdezmilfundinvest();
      } else if (res.value == 'new_born') {
        casamaisDoisanosmaisdezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  } 

  var casamaisDoisanosmaisdezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamaisDoisanosmaisdezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamaisDoisanosmaisdezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamaisDoisanosmaisdezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamaisDoisanosmaisdezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

var expandirFamilia = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Qual o prazo estimado para que você consiga expandir a sua família através do investimentos?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de um ano',
        value: 'menos_um_ano'
      }, {
        text: 'Até dois anos',
        value: 'ate_dois_anos'
      }, {
        text: 'Mais de dois anos',
        value: 'mais_dois_anos'
      }]
    })
    }).then(function (res) {
      if(res.value == 'menos_um_ano') {
        familiaUmano();
      } else if(res.value == 'ate_dois_anos') {
        familiaateDoisanos();
      } else if (res.value == 'mais_dois_anos') {
        familiamaisDoisanos();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Qual o prazo estimado para que você consiga expandir a sua família através dos investimentos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
}

var familiaUmano = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, expandir a família em menos de um ano. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
  }).then(function (res) {
    if(res.value == 'menos_mil') {
      familiaUmanomenosmil();
    }
      else if (res.value == 'ate_dezmil') {
      familiaUmanoatedezmil();
    } else if (res.value == 'mais_dezmil') {
      familiaUmanomaisdezmil();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, expandir a família em menos de um ano. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var familiaUmanomenosmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      familiaUmanomenosmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      familiaUmanomenosmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      familiaUmanomenosmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      familiaUmanomenosmilfundinvest();
    } else if (res.value == 'new_born') {
      familiaUmanomenosmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var familiaUmanomenosmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanomenosmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanomenosmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanomenosmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanomenosmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanoatedezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      familiaUmanoatedezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      familiaUmanoatedezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      familiaUmanoatedezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      familiaUmanoatedezmilfundinvest();
    } else if (res.value == 'new_born') {
      familiaUmanoatedezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var familiaUmanoatedezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanoatedezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanoatedezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanoatedezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanoatedezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanomaisdezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      familiaUmanomaisdezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      familiaUmanomaisdezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      familiaUmanomaisdezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      familiaUmanomaisdezmilfundinvest();
    } else if (res.value == 'new_born') {
      familiaUmanomaisdezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var familiaUmanomaisdezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanomaisdezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanomaisdezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanomaisdezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaUmanomaisdezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, expandir a família em até dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
  }).then(function (res) {
    if(res.value == 'menos_mil') {
      familiaateDoisanosmenosmil();
    }
      else if (res.value == 'ate_dezmil') {
      familiaateDoisanosatedezmil();
    } else if (res.value == 'mais_dezmil') {
      familiaateDoisanosmaisdezmil();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, expandir a família em até dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var familiaateDoisanosmenosmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      familiaateDoisanosmenosmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      familiaateDoisanosmenosmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      familiaateDoisanosmenosmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      familiaateDoisanosmenosmilfundinvest();
    } else if (res.value == 'new_born') {
      familiaateDoisanosmenosmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var familiaateDoisanosmenosmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosmenosmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosmenosmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosmenosmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosmenosmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosatedezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      familiaateDoisanosatedezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      familiaateDoisanosatedezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      familiaateDoisanosatedezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      familiaateDoisanosatedezmilfundinvest();
    } else if (res.value == 'new_born') {
      familiaateDoisanosatedezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
}

var familiaateDoisanosatedezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosatedezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosatedezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosatedezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosatedezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosmaisdezmil = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
  .then(function () {
    return botui.action.button({
      delay: 0,
      action: [{
        text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
        value: 'poupanca'
      }, {
        text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
        value: 'fund_multi'
      }, {
        text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
        value: 'fund_acoes'
      }, {
        text: 'Fundos de Investimento em Participações (FIP), Derivativos',
        value: 'fund_invest'
      }, {
        text: 'Sou novo no mundo dos investimentos',
        value: 'new_born'
      }]
    })
  }).then(function (res) {
    if(res.value == 'poupanca') {
      familiaateDoisanosmaisdezmilpoupanca();
    }
      else if (res.value == 'fund_multi') {
      familiaateDoisanosmaisdezmilfundmulti();
    } else if (res.value == 'fund_acoes') {
      familiaateDoisanosmaisdezmilfundacoes();
    }
      else if (res.value == 'fund_invest') {
      familiaateDoisanosmaisdezmilfundinvest();
    } else if (res.value == 'new_born') {
      familiaateDoisanosmaisdezmilnewborn();
    }
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
} 

var familiaateDoisanosmaisdezmilpoupanca = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'})
        botui.message
        .bot({
          delay: 900,
          content: 'Vou te dar algumas dicas de por onde começar os estudos, mas não se esqueça de que a qualquer momento você pode tirar as suas dúvidas comigo por meio do chat abaixo!'}).then(chatingBot);
}

var familiaateDoisanosmaisdezmilfundmulti = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Moderado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosmaisdezmilfundacoes = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosmaisdezmilfundinvest = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Sofisticado!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiaateDoisanosmaisdezmilnewborn = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'O seu perfil de investidor é...😯'})
    botui.message
    .bot({
      delay: 500,
      content: 'Conservador!'})
    botui.message
    .bot({
      delay: 600,
      content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
      botui.message
    .bot({
      delay: 700,
      content: 'Você já deu o primeiro passo, se autoconhecer!'})
      botui.message
      .bot({
        delay: 800,
        content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
}

var familiamaisDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, expandir a família em um período de mais de dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
    .then(function (res) {
      if(res.value == 'menos_mil') {
        familiamaisDoisanosmenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        familiamaisDoisanosatedezmil();
      } else if (res.value == 'mais_dezmil') {
        familiamaisDoisanosmaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, expandir a família em um período de mais de dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
  }
  
  var familiamaisDoisanosmenosmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        familiamaisDoisanosmenosmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        familiamaisDoisanosmenosmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        familiamaisDoisanosmenosmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        familiamaisDoisanosmenosmilfundinvest();
      } else if (res.value == 'new_born') {
        familiamaisDoisanosmenosmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Menos de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var familiamaisDoisanosmenosmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosmenosmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosmenosmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosmenosmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosmenosmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosatedezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        familiamaisDoisanosatedezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        familiamaisDoisanosatedezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        familiamaisDoisanosatedezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        familiamaisDoisanosatedezmilfundinvest();
      } else if (res.value == 'new_born') {
        familiamaisDoisanosatedezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var familiamaisDoisanosatedezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosatedezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosatedezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosatedezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosatedezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var familiamaisDoisanosmaisdezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        familiamaisDoisanosmaisdezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        familiamaisDoisanosmaisdezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        familiamaisDoisanosmaisdezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        familiamaisDoisanosmaisdezmilfundinvest();
      } else if (res.value == 'new_born') {
        familiamaisDoisanosmaisdezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  } 

  var familiamaisDoisanosmaisdezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosmaisdezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosmenosmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosmaisdezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var familiamaisDoisanosmaisdezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

var fazerViajem = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Qual o prazo estimado para que você consiga viajar através dos investimentos?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de um ano',
        value: 'menos_um_ano'
      }, {
        text: 'Até dois anos',
        value: 'ate_dois_anos'
      }, {
        text: 'Mais de dois anos',
        value: 'mais_dois_anos'
      }]
    })
    }).then(function (res) {
      if(res.value == 'menos_um_ano') {
        viagemUmano();
      } else if(res.value == 'ate_dois_anos') {
        viagemateDoisanos();
      } else if (res.value == 'mais_dois_anos') {
        viagemmaisDoisanos();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Qual o prazo estimado para que você consiga viajar através dos investimentos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
}

var viagemUmano = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, viajar em menos de um ano. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
    .then(function (res) {
      if(res.value == 'menos_mil') {
        viagemUmanomenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        viagemUmanoatedezmil();
      } else if (res.value == 'mais_dezmil') {
        viagemUmanomaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, viajar em menos de um ano. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
  }
  
  var viagemUmanomenosmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        viagemUmanomenosmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        viagemUmanomenosmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        viagemUmanomenosmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        viagemUmanomenosmilfundinvest();
      } else if (res.value == 'new_born') {
        viagemUmanomenosmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var viagemUmanomenosmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanomenosmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanomenosmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanomenosmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanomenosmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanoatedezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        viagemUmanoatedezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        viagemUmanoatedezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        viagemUmanoatedezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        viagemUmanoatedezmilfundinvest();
      } else if (res.value == 'new_born') {
        viagemUmanoatedezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var viagemUmanoatedezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanoatedezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanoatedezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanoatedezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanoatedezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var viagemUmanomaisdezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        viagemUmanomaisdezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        viagemUmanomaisdezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        viagemUmanomaisdezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        viagemUmanomaisdezmilfundinvest();
      } else if (res.value == 'new_born') {
        viagemUmanomaisdezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var viagemUmanomaisdezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanomaisdezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanomaisdezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanomaisdezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemUmanomaisdezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

var viagemateDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, viajar em até dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    }).then(function (res) {
      if(res.value == 'menos_mil') {
        viagemateDoisanosmenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        viagemateDoisanosatedezmil();
      } else if (res.value == 'mais_dezmil') {
        viagemateDoisanosmaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, viajar em até dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
  }
  
  var viagemateDoisanosmenosmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        viagemateDoisanosmenosmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        viagemateDoisanosmenosmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        viagemateDoisanosmenosmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        viagemateDoisanosmenosmilfundinvest();
      } else if (res.value == 'new_born') {
        viagemateDoisanosmenosmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var viagemateDoisanosmenosmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemateDoisanosmenosmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemateDoisanosmenosmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemateDoisanosmenosmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemateDoisanosmenosmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemateDoisanosatedezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        viagemateDoisanosatedezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        viagemateDoisanosatedezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        viagemateDoisanosatedezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        viagemateDoisanosatedezmilfundinvest();
      } else if (res.value == 'new_born') {
        viagemateDoisanosatedezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var viagemateDoisanosatedezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'})
          botui.message
          .bot({
            delay: 900,
            content: 'Vou te dar algumas dicas de por onde começar os estudos, mas não se esqueça de que a qualquer momento você pode tirar as suas dúvidas comigo por meio do chat abaixo!'}).then(chatingBot);
  }
  
  var viagemateDoisanosatedezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemateDoisanosatedezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemateDoisanosatedezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemateDoisanosatedezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var viagemateDoisanosmaisdezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        viagemateDoisanosmaisdezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        viagemateDoisanosmaisdezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        viagemateDoisanosmaisdezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        viagemateDoisanosmaisdezmilfundinvest();
      } else if (res.value == 'new_born') {
        viagemateDoisanosmaisdezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var viagemateDoisanosmaisdezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemateDoisanosmaisdezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemateDoisanosmaisdezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemateDoisanosmaisdezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'})
          botui.message
          .bot({
            delay: 900,
            content: 'Vou te dar algumas dicas de por onde começar os estudos, mas não se esqueça de que a qualquer momento você pode tirar as suas dúvidas comigo por meio do chat abaixo!'}).then(chatingBot);
  }
  
  var viagemateDoisanosmaisdezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

var viagemmaisDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, viajar em um período de mais de dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
    .then(function (res) {
      if(res.value == 'menos_mil') {
        viagemmaisDoisanosmenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        viagemmaisDoisanosatedezmil();
      } else if (res.value == 'mais_dezmil') {
        viagemmaisDoisanosmaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, viajar em um período de mais de anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
  }
  
  var viagemmaisDoisanosmenosmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        viagemmaisDoisanosmenosmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        viagemmaisDoisanosmenosmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        viagemmaisDoisanosmenosmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        viagemmaisDoisanosmenosmilfundinvest();
      } else if (res.value == 'new_born') {
        viagemmaisDoisanosmenosmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var viagemmaisDoisanosmenosmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemmaisDoisanosmenosmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemateDoisanosmaisdezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemmaisDoisanosmenosmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemmaisDoisanosmenosmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var viagemmaisDoisanosatedezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        viagemmaisDoisanosatedezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        viagemmaisDoisanosatedezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        viagemmaisDoisanosatedezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        viagemmaisDoisanosatedezmilfundinvest();
      } else if (res.value == 'new_born') {
        viagemmaisDoisanosatedezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var viagemmaisDoisanosatedezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemmaisDoisanosatedezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemmaisDoisanosatedezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemmaisDoisanosatedezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemmaisDoisanosatedezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemmaisDoisanosmaisdezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        viagemmaisDoisanosmaisdezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        viagemmaisDoisanosmaisdezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        viagemmaisDoisanosmaisdezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        viagemmaisDoisanosmaisdezmilfundinvest();
      } else if (res.value == 'new_born') {
        viagemmaisDoisanosmaisdezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var viagemmaisDoisanosmaisdezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemmaisDoisanosmaisdezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemmaisDoisanosmaisdezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemmaisDoisanosmaisdezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var viagemmaisDoisanosmaisdezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

var casaMento = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Qual o prazo estimado para que você consiga fazer uma festa de casamento através dos investimentos?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de um ano',
        value: 'menos_um_ano'
      }, {
        text: 'Até dois anos',
        value: 'ate_dois_anos'
      }, {
        text: 'Mais de dois anos',
        value: 'mais_dois_anos'
      }]
    })
    }).then(function (res) {
      if(res.value == 'menos_um_ano') {
        casamentoUmano();
      } else if(res.value == 'ate_dois_anos') {
        casamentoateDoisanos();
      } else if (res.value == 'mais_dois_anos') {
        casamentomaisDoisanos();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Qual o prazo estimado em que você consiga fazer uma festa de casamento através dos investimentos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
}

var casamentoUmano = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, festa de casamento em menos de um ano. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
    .then(function (res) {
      if(res.value == 'menos_mil') {
        casamentoUmanomenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        casamentoUmanoatedezmil();
      } else if (res.value == 'mais_dezmil') {
        casamentoUmanomaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, festa de casamento em menos de um ano. Quanto seria o seu investimento inicial';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
  }
  
  var casamentoUmanomenosmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        casamentoUmanomenosmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        casamentoUmanomenosmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        casamentoUmanomenosmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        casamentoUmanomenosmilfundinvest();
      } else if (res.value == 'new_born') {
        casamentoUmanomenosmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var casamentoUmanomenosmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoUmanomenosmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoUmanomenosmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoUmanomenosmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoUmanomenosmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var casamentoUmanoatedezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        casamentoUmanoatedezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
          casamentoUmanoatedezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        casamentoUmanoatedezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        casamentoUmanoatedezmilfundinvest();
      } else if (res.value == 'new_born') {
        casamentoUmanoatedezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var casamentoUmanoatedezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoUmanoatedezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoUmanoatedezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoUmanoatedezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoUmanoatedezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var casamentoUmanomaisdezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        casamentoUmanomaisdezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        casamentoUmanomaisdezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        casamentoUmanomaisdezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        casamentoUmanomaisdezmilfundinvest();
      } else if (res.value == 'new_born') {
        casamentoUmanomaisdezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var casamentoUmanoatedezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoUmanomaisdezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoUmanomaisdezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoUmanomaisdezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoUmanomaisdezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

var casamentoateDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, festa de casamento em até dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
    .then(function (res) {
      if(res.value == 'menos_mil') {
        casamentoateDoisanosmenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        casamentoateDoisanosatedezmil();
      } else if (res.value == 'mais_dezmil') {
        casamentoateDoisanosmaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, festa de casamento em até dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
  }
  
  var casamentoateDoisanosmenosmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        casamentoateDoisanosmenosmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        casamentoateDoisanosmenosmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        casamentoateDoisanosmenosmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        casamentoateDoisanosmenosmilfundinvest();
      } else if (res.value == 'new_born') {
        casamentoateDoisanosmenosmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var casamentoateDoisanosmenosmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoateDoisanosmenosmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoateDoisanosmenosmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoateDoisanosmenosmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoateDoisanosmenosmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var casamentoateDoisanosatedezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        casamentoateDoisanosatedezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        casamentoateDoisanosatedezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        casamentoateDoisanosatedezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        casamentoateDoisanosatedezmilfundinvest();
      } else if (res.value == 'new_born') {
        casamentoateDoisanosatedezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var casamentoateDoisanosatedezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoateDoisanosatedezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoateDoisanosatedezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoateDoisanosatedezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoateDoisanosatedezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
    
  var casamentoateDoisanosmaisdezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        casamentoateDoisanosmaisdezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        casamentoateDoisanosmaisdezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        casamentoateDoisanosmaisdezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        casamentoateDoisanosmaisdezmilfundinvest();
      } else if (res.value == 'new_born') {
        casamentoateDoisanosmaisdezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var casamentoateDoisanosmaisdezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoateDoisanosmaisdezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoateDoisanosmaisdezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoateDoisanosmaisdezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentoateDoisanosmaisdezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

var casamentomaisDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, festa de casamento em um período de mais de dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
    .then(function (res) {
      if(res.value == 'menos_mil') {
        casamentomaisDoisanosmenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        casamentomaisDoisanosatedezmil();
      } else if (res.value == 'mais_dezmil') {
        casamentomaisDoisanosmaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, festa de casamento em um período de mais de dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
  }
  
  var casamentomaisDoisanosmenosmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        casamentomaisDoisanosmenosmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        casamentomaisDoisanosmenosmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        casamentomaisDoisanosmenosmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        casamentomaisDoisanosmenosmilfundinvest();
      } else if (res.value == 'new_born') {
        casamentomaisDoisanosmenosmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var casamentomaisDoisanosmenosmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosmenosmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosmenosmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosmenosmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosmenosmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var casamentomaisDoisanosatedezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        casamentomaisDoisanosatedezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        casamentomaisDoisanosatedezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        casamentomaisDoisanosatedezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        casamentomaisDoisanosatedezmilfundinvest();
      } else if (res.value == 'new_born') {
        casamentomaisDoisanosatedezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var casamentomaisDoisanosatedezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosatedezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosatedezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosatedezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosatedezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosmaisdezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        casamentomaisDoisanosmaisdezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        casamentomaisDoisanosmaisdezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        casamentomaisDoisanosmaisdezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        casamentomaisDoisanosmaisdezmilfundinvest();
      } else if (res.value == 'new_born') {
        casamentomaisDoisanosmaisdezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var casamentomaisDoisanosmaisdezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosmaisdezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosmaisdezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosmaisdezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var casamentomaisDoisanosmaisdezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

var aposentaDoria = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Qual o prazo estimado para que você consiga aposentar através dos investimentos?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de um ano',
        value: 'menos_um_ano'
      }, {
        text: 'Até dois anos',
        value: 'ate_dois_anos'
      }, {
        text: 'Mais de dois anos',
        value: 'mais_dois_anos'
      }]
    })
    }).then(function (res) {
  if(res.value == 'menos_um_ano') {
    aposentaUmano();
  } else if(res.value == 'ate_dois_anos') {
    aposentaateDoisanos();
  } else if (res.value == 'mais_dois_anos') {
    aposentamaisDoisanos();
  }
})
let utter = new SpeechSynthesisUtterance();
utter.lang = 'pt-BR';
utter.text = 'Qual o prazo estimado para que você consiga aposentar através dos investimentos?';
utter.volume = 0.5;
window.speechSynthesis.speak(utter);
}

var aposentaUmano = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, aposentar em menos de um ano. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
    .then(function (res) {
      if(res.value == 'menos_mil') {
        aposentaUmanomenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        aposentaUmanoatedezmil();
      } else if (res.value == 'mais_dezmil') {
        aposentaUmanomaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, aposentar em menos de um ano. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
  }
  
  var aposentaUmanomenosmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        aposentaUmanomenosmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        aposentaUmanomenosmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        aposentaUmanomenosmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        aposentaUmanomenosmilfundinvest();
      } else if (res.value == 'new_born') {
        aposentaUmanomenosmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var aposentaUmanomenosmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanomenosmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanomenosmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanomenosmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanomenosmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanoatedezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        aposentaUmanoatedezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        aposentaUmanoatedezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        aposentaUmanoatedezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        aposentaUmanoatedezmilfundinvest();
      } else if (res.value == 'new_born') {
        aposentaUmanoatedezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var aposentaUmanoatedezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanoatedezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanoatedezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanoatedezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanoatedezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var aposentaUmanomaisdezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        aposentaUmanomaisdezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        aposentaUmanomaisdezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        aposentaUmanomaisdezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        aposentaUmanomaisdezmilfundinvest();
      } else if (res.value == 'new_born') {
        aposentaUmanomaisdezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var aposentaUmanomaisdezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanomaisdezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanomaisdezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanomaisdezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaUmanomaisdezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

var aposentaateDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, aposentar em até dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
    .then(function (res) {
      if(res.value == 'menos_mil') {
        aposentaateDoisanosmenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        aposentaateDoisanosatedezmil();
      } else if (res.value == 'mais_dezmil') {
        aposentaateDoisanosmaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, aposentar em até dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
  }
  
  var aposentaateDoisanosmenosmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        aposentaateDoisanosmenosmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        aposentaateDoisanosmenosmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        aposentaateDoisanosmenosmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        aposentaateDoisanosmenosmilfundinvest();
      } else if (res.value == 'new_born') {
        aposentaateDoisanosmenosmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var aposentaateDoisanosmenosmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaateDoisanosmenosmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaateDoisanosmenosmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaateDoisanosmenosmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaateDoisanosmenosmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var aposentaateDoisanosatedezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        aposentaateDoisanosatedezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        aposentaateDoisanosatedezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        aposentaateDoisanosatedezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        aposentaateDoisanosatedezmilfundinvest();
      } else if (res.value == 'new_born') {
        aposentaateDoisanosatedezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var aposentaateDoisanosatedezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaateDoisanosatedezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaateDoisanosatedezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaateDoisanosatedezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaateDoisanosatedezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var aposentaateDoisanosmaisdezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        aposentaateDoisanosmaisdezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        aposentaateDoisanosmaisdezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        aposentaateDoisanosmaisdezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        aposentaateDoisanosmaisdezmilfundinvest();
      } else if (res.value == 'new_born') {
        aposentaateDoisanosmaisdezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var aposentaateDoisanosmaisdezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaateDoisanosmaisdezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaateDoisanosmaisdezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaateDoisanosmaisdezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentaateDoisanosmaisdezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

var aposentamaisDoisanos = function() {
  botui.message
  .bot({
    delay: 0,
    content: 'Certo, aposentar em um período de mais de dois anos. Quanto seria o seu investimento inicial?'
  })
  .then(function () {
    return   botui.action.button({
      delay: 0,
      action: [{
        text: 'Menos de mil reais',
        value: 'menos_mil'
      }, {
        text: 'Até dez mil reais',
        value: 'ate_dezmil'
      }, {
        text: 'Mais de dez mil reais',
        value: 'mais_dezmil'
      }]
    })
    .then(function (res) {
      if(res.value == 'menos_mil') {
        aposentamaisDoisanosmenosmil();
      }
        else if (res.value == 'ate_dezmil') {
        aposentamaisDoisanosatedezmil();
      } else if (res.value == 'mais_dezmil') {
        aposentamaisDoisanosmaisdezmil();
      }
    })
  })
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'pt-BR';
  utter.text = 'Certo, aposentar em um período de mais de dois anos. Quanto seria o seu investimento inicial?';
  utter.volume = 0.5;
  window.speechSynthesis.speak(utter);
  }
  
  var aposentamaisDoisanosmenosmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        aposentamaisDoisanosmenosmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        aposentamaisDoisanosmenosmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        aposentamaisDoisanosmenosmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        aposentamaisDoisanosmenosmilfundinvest();
      } else if (res.value == 'new_born') {
        aposentamaisDoisanosmenosmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Menos de mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var aposentamaisDoisanosmenosmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentamaisDoisanosmenosmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentamaisDoisanosmenosmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentamaisDoisanosmenosmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentamaisDoisanosmenosmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var aposentamaisDoisanosatedezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        aposentamaisDoisanosatedezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        aposentamaisDoisanosatedezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        aposentamaisDoisanosatedezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        aposentamaisDoisanosatedezmilfundinvest();
      } else if (res.value == 'new_born') {
        aposentamaisDoisanosatedezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Até dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }
  
  var aposentamaisDoisanosatedezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentamaisDoisanosatedezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você está preocupado em equilibrar suas ações entre o conservadorismo e a coragem. Trata-se de alguém que mantém forte interesse pela segurança em seus investimentos, mas está disposto a abrir mão de parte dela, eventualmente, para obter retornos melhores.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentamaisDoisanosatedezmilfundacoes = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentamaisDoisanosatedezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentamaisDoisanosatedezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

  var aposentamaisDoisanosmaisdezmil = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?'})
    .then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Poupança, Fundos DI, CDB, Fundos Renda Fixa',
          value: 'poupanca'
        }, {
          text: 'Fundos Multimercado, Títulos públicos, LCI, LCA',
          value: 'fund_multi'
        }, {
          text: 'Fundos de Ações, Ações, Fundos Imobiliários, Debêntures, Fundos Cambiais',
          value: 'fund_acoes'
        }, {
          text: 'Fundos de Investimento em Participações (FIP), Derivativos',
          value: 'fund_invest'
        }, {
          text: 'Sou novo no mundo dos investimentos',
          value: 'new_born'
        }]
      })
    }).then(function (res) {
      if(res.value == 'poupanca') {
        aposentamaisDoisanosmaisdezmilpoupanca();
      }
        else if (res.value == 'fund_multi') {
        aposentamaisDoisanosmaisdezmilfundmulti();
      } else if (res.value == 'fund_acoes') {
        aposentamaisDoisanosmaisdezmilfundacoes();
      }
        else if (res.value == 'fund_invest') {
        aposentamaisDoisanosmaisdezmilfundinvest();
      } else if (res.value == 'new_born') {
        aposentamaisDoisanosmaisdezmilnewborn();
      }
    })
    let utter = new SpeechSynthesisUtterance();
    utter.lang = 'pt-BR';
    utter.text = 'Mais de dez mil reais? Interessante! Agora me responda: com quais dos tipos de investimentos abaixo você possui mais familiaridade, seja por experiência profissional, formação acadêmica ou ter investido nos últimos cinco anos?';
    utter.volume = 0.5;
    window.speechSynthesis.speak(utter);
  }

  var aposentamaisDoisanosmaisdezmilpoupanca = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentamaisDoisanosmaisdezmilfundmulti = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Moderado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentamaisDoisanosmaisdezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentamaisDoisanosmaisdezmilfundinvest = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Sofisticado!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que aceita riscos mais altos na busca por uma maior rentabilidade. Pessoas com esse perfil lidam bem com a volatilidade e, na maioria das vezes, abrem mão da liquidez em troca de retornos mais significativos. São investidores que, além de compreenderem o mercado financeiro (de forma geral), têm o desejo de aumentar o patrimônio de forma mais intensa.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }
  
  var aposentamaisDoisanosmaisdezmilnewborn = function() {
    botui.message
    .bot({
      delay: 0,
      content: 'O seu perfil de investidor é...😯'})
      botui.message
      .bot({
        delay: 500,
        content: 'Conservador!'})
      botui.message
      .bot({
        delay: 600,
        content: 'Você é uma pessoa que preza pela segurança acima de tudo e para obtê-la, você aceita a realidade de ter rendimentos limitados. Além disso, um investidor conservador pode ser aquele que tem objetivos de curto prazo, médio e longo prazo e opta por buscar opções que mantenham o dinheiro disponível sem perdas, independente do horizonte de investimento.'})
        botui.message
      .bot({
        delay: 700,
        content: 'Você já deu o primeiro passo, se autoconhecer!'})
        botui.message
        .bot({
          delay: 800,
          content: 'Agora chegou a hora de você começar a aprender tudo sobre o mercado financeiro!'}).then(chatingBot);
  }

var oqueeTesouro = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'O Tesouro Direto é um programa do Tesouro Nacional, feito em parceria com a bolsa de valores, a B3 S.A. – Brasil, Bolsa, Balcão, para a venda de títulos públicos federais para pessoas físicas por meio da internet. É uma modalidade de investimento famosa no Brasil pela segurança e retornos atrativos, com diferentes títulos e prazos com ganhos superiores aos da poupança nas regras atuais.'})}
      
var riscosTesouro = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'O Tesouro Direto, por ser um programa de compra e venda de títulos públicos, oferece títulos que contam com a garantia do Governo Federal, o qual é considerado por especialistas no mercado como o credor mais seguro que existe no país.'})}

var rentabilidadeTesouro = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'Existem três formas principais de remuneração para o investidor em relação aos títulos do Tesouro Direto. Pós-fixada: é o caso do Tesouro Selic, título que tem a sua rentabilidade atrelada à taxa básica de juros, a Selic e a rentabilidade exata só é sabida ao longo do investimento. Esse título ainda é o mais recomendado para investidores que precisam de liquidez diária e para quem está começando a investir. Prefixada: é o caso do Tesouro Prefixado, título que paga uma remuneração definida no momento de compra do investimento. Essa aplicação permite que o investidor saiba exatamente o valor que receberá no vencimento do título. Atrelada ao IPCA: é o caso do Tesouro IPCA+, título que mescla uma rentabilidade prefixada definido no momento de investimento com a inflação do período de aplicação. Esse título é indicado para quem quer se proteger dos efeitos da inflação ao longo do tempo.'})}

var venderTesouro = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'Sim. Contudo, os títulos Tesouro Prefixado e Tesouro IPCA+ estão sujeitos à chamada marcação a mercado, movimento que provoca oscilações de preços e pode acarretar em perdas financeiras. Assim, para quem deseja investir e poder resgatar antes do vencimento do título, o Tesouro Selic é mais indicado.'})}

var oqueeFundos = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'Os fundos são uma modalidade de investimento que reúne recursos financeiros de um conjunto de investidores (cotistas) em uma cesta de ativos, comparando-se a um condomínio. Entre as suas vantagens está a possibilidade de permitir acesso a investimentos com valores menores do que seriam necessários para investir sozinho.'})}
                      
var riscosFundos = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'Isso vai depender da categoria e da política específica de cada fundo que a pessoa escolher. Existem fundos de perfil altamente conservador, com liquidez diária, como é o caso do Fundo Tesouro Selic Simples (BTG Pactual digital Selic S FI RF), mas também existem fundos com perfil mais arrojado, que contam com estratégias que expõem o investidor a mais risco.'})}
                
var tiposFundos = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'Existem diversas categorias de fundos, sendo as principais os fundos de Renda Fixa, Cambial, Multimercados e Ações. Cada um possui com características específicas definidas pelas instituições reguladoras do mercado, como a CVM e Anbima. Confira mais abaixo:'})
  botui.message
  .bot({
  delay: 400,
  content: 'O fundo de renda fixa é um produto que investe em títulos emitidos por entidades públicas ou privadas, atrelados à variação de taxas ou índices de preços prefixados ou pós-fixados'})
  botui.message
  .bot({
  delay: 700,
  content: 'Já o fundo Cambial tem a obrigação de investir no mínimo 80% dos recursos em dólares, euros ou em ativos que representem a variação dessas moedas, como títulos públicos ou privados. Seu principal fator de risco é a variação da moeda estrangeira ou do cupom cambial.'})
  botui.message
  .bot({
  delay: 900,
  content: 'Por sua vez, o fundo multimercado oferece a você a possibilidade de investir em diversos mercados ao mesmo tempo como juros, câmbio e ações. Por essa grande variedade, costuma ter variados tipos de estratégia, indicados para vários objetivos.'})
  botui.message
  .bot({
  delay: 1100,
  content: 'Para finalizarmos, o fundo de ações aplica seus recursos em ações de empresas negociadas na Bolsa de Valores. Costuma ter política de investimento mais agressiva e, por isso mesmo, tendem a ser fundos mais voláteis, mais indicados a investidores com maior tolerância a risco.'})
  botui.message
  .bot({
  delay: 1300,
  content: 'Muito legal, né?'})}

var venderTesouro = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'Sim. Contudo, os títulos Tesouro Prefixado e Tesouro IPCA+ estão sujeitos à chamada marcação a mercado, movimento que provoca oscilações de preços e pode acarretar em perdas financeiras. Assim, para quem deseja investir e poder resgatar antes do vencimento do título, o Tesouro Selic é mais indicado.'})}

var oqueeRf = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'Os investimentos em renda fixa são recomendados para aqueles investidores que buscam certa previsibilidade na rentabilidade das aplicações, com taxas e prazos definidos no ato da contratação.'})}

var rendeRf = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'Esses títulos costumam ter três tipos de rentabilidade: pós-fixada, geralmente atrelada à Selic ou ao CDI (Certificado de Depósito Interbancário), prefixada, com taxa definida no momento do investimento, ou atrelada à inflação, quando é remunerada uma taxa fixa adicionada do IPCA (Índice de Preços ao Consumidor Amplo).'})}
   
var riscoRf = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'O grande risco para investir em Renda Fixa fica com a capacidade da instituição emissora do título que o investidor decide aplicar seu dinheiro honrar seus compromissos. Porém, títulos como o CDB, LCI e LCA contam com garantia do FGC (Fundo Garantidor de Créditos), instituição que protege o investidor até um teto de R$ 250 mil por instituição financeira, a mesma garantia da poupança. Além disso, todos os títulos disponíveis no BTG Pactual digital passam por avaliação criteriosa antes de entrarem em nossa plataforma.'})}
                
var tiposRf = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'O CDB (Certificado de Depósito Bancário) é um título privado emitido por instituições financeiras com prazo e taxa definidos no momento da compra. Esse título conta com a cobertura do Fundo Garantidor de Créditos em até R$ 250 mil por emissor e por CPF.'})
  botui.message
  .bot({
  delay: 700,
  content: 'Por sua vez o (LCA Letra de Crédito do Agronegócio) é um título privado emitido por instituições financeiras com prazo e taxa definidos no momento da compra, lastreado por operações de crédito do setor agrícola. Tem isenção de IR e de Imposto sobre Operações Financeiras (IOF) para pessoas físicas, além de contar com a cobertura do Fundo Garantidor de Créditos em até R$ 250 mil por emissor e por CPF.'})
  botui.message
  .bot({
  delay: 900,
  content: 'Já LCI (Letra de Crédito Imobiliário) é um título privado emitido por instituições financeiras com prazo e taxa definidos no momento da compra, lastreado por operações de crédito do setor imobiliário. Tem isenção de IR, além de contar com a cobertura do Fundo Garantidor de Créditos em até R$ 250 mil por emissor e por CPF.'})
  botui.message
  .bot({
  delay: 1100,
  content: 'O CRI (Certificado de Recebíveis Imobiliários) e o CRA (Certificado de Recebíveis do Agronegócio) são títulos que geram direitos de créditos ao investidor, com prazo e taxa definidos no momento da compra, mas possibilidade de venda no mercado secundário antes do vencimento lastreado em créditos imobiliários (CRI) ou em créditos do agronegócio (CRA). Suas rentabilidades são isentas das cobranças de Imposto de Renda e, geralmente, suas rentabilidades são pós-fixada, atreladas ao CDI (Certificado de Depósito Interbancário).'})
  botui.message
  .bot({
  delay: 1300,
  content: 'Para finalizarmos, as Debêntures são título de crédito privado emitidos por empresas que procuram um financiamento para seus compromissos financeiros. Esses papéis também podem ser negociados no mercado secundário e não contam com a cobrança de Imposto de Renda sobre seus rendimentos. Aplicar em uma debênture é, na prática, emprestar dinheiro para uma companhia com prazo determinado para receber seu dinheiro de volta.'})
  botui.message
  .bot({
  delay: 1500,
  content: 'Bastante coisa, né?'})}

    var praquemSeguro = function() {
      botui.message
      .bot({
      delay: 0,
      content: 'Ele é para quem busca proteção para herdeiros: os recursos de seguros não entram no inventário e, assim, podem ser uma fonte de renda rápida para herdeiros que precisarem de acesso a recursos com agilidade.'})
      botui.message
      .bot({
      delay: 400,
      content: 'Para quem quer se proteger contra doenças e invalidez: conte com um produto que pode trazer segurança não apenas em caso de falecimento, mas também com uma possibilidade de cobertura em casos de doenças e invalidez.'})
      botui.message
      .bot({
      delay: 700,
      content: 'E também para quem busca uma sucessão empresarial: utilize o seguro de vida para adquirir cotas em caso de falecimento de sócio e realizar uma sucessão empresarial de forma tranquila.'})}
                    
    var vantagensSeguro = function() {
      botui.message
      .bot({
      delay: 0,
      content: 'Planejamento: O seguro de vida individual personalizado é mais que uma cobertura para uma ausência inesperada, como em caso de acidentes, doenças, invalidez ou falecimento. Ele pode ser utilizado em vida por você ou pela sua família, contribuindo, por exemplo, com a educação dos seus filhos, a realização de projetos e sonhos, o pagamento de despesas emergenciais e o suporte financeiro em situações de doenças ou acidentes.'})
      botui.message
      .bot({
      delay: 700,
      content: 'Segurança: Com um seguro de vida a família estará amparada em caso de falecimento, para ter acesso a uma renda rápida para arcar com os custos e impostos até a transferência do patrimônio familiar ser finalizada.'})
      botui.message
      .bot({
      delay: 900,
      content: 'Planos personalizados: Não existem duas apólices de seguro de vida individual iguais. As combinações de coberturas são pensadas de acordo com as necessidades de cada cliente. Nós identificamos o que você precisa e apresentamos a melhor solução!'})}

var oqueeCoe = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'É um tipo de investimento que mescla elementos de Renda Fixa e Variável e seu capital pode ser parcial ou totalmente protegido contra perdas nominais do valor investido. Você minimiza ou elimina sua perda financeira se no vencimento o resultado do ativo investido for negativo, mas ganha se for positivo. Ou seja, um investimento que pode combinar o baixo risco da Renda Fixa e o possível ganho da Renda Variável.'})}
                        
var praqueCoe = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'O COE é um produto de investimento híbrido com vencimento determinado no momento da aplicação. Assim, por um período definido, o investidor fica exposto à variação de preço de um determinado ativo ou cesta de ativos de renda variável (como o dólar, Ibovespa ou Dow Jones, por exemplo) - com capital nominal parcial ou totalmente protegido, a depender de cada certificado. Assim, esse é um produto para o investidor que quer aproveitar o potencial da renda variável, mas tem maior aversão a risco.'})}
              
var riscosCoe = function() {
  botui.message
  .bot({
  delay: 0,
  content: 'Uma das principais vantagens em fazer o investimento em COE fica exatamente com a possibilidade que esse produto tem de oferecer capital nominal investido protegido para o investidor. Assim, o risco fica somente com o chamado custo de oportunidade, ou seja, com a rentabilidade que o investidor poderia ganhar aplicando em produtos que acompanham a taxa básica de juros.'})}
                          
var tiposCoe = function() {
  botui.message
 .bot({
  delay: 0,
  content: 'O COE é um produto de investimento bastante flexível, com diferentes vencimentos e também com regras específicas, podendo acompanhar o desempenho de um ativo específico ou uma cesta de ativos específicos. Além disso, existem COEs que limitam a rentabilidade máxima a um determinado percentual e outros que contam com alavancagem sobre os ganhos. Com isso, o investidor precisa sempre ler atentamente, as informações especialmente do Documento de Informações Essenciais, ou DIE, para entender o funcionamento e as regras de remuneração do produto que está investindo.'})}

  var oqueeCambio = function() {
    botui.message
    .bot({
    delay: 0,
    content: 'O câmbio corresponde às transações feitas com moedas estrangeiras, como a compra, a venda e a troca. Esse sistema funciona como parte do mercado monetário internacional, contribuindo para a operação comercial entre países.'})}
                          
  var recebimentoInternacional = function() {
    botui.message
    .bot({
    delay: 0,
    content: 'Utilize sua conta corrente e a estrutura do BTG Pactual para receber seus recursos de forma simples, rápida e segura. Receba retornos ou resgates de seus investimentos no exterior, honorário por prestação de serviços, bônus, compensações, entre outras opções – com rápida identificação do recurso.'})}
                
  var pagamentosInternacionais = function() {
    botui.message
    .bot({
    delay: 0,
    content: 'Faça transferências para a sua conta no exterior ou para a sua empresa de maneira rápida e segura. Realize pagamentos de imóveis, cursos, reservas de hotéis, passeios turísticos, aluguéis de carros e diversas outras finalidades.'})}
                            
  var comercioExterior = function() {
    botui.message
   .bot({
    delay: 0,
    content: 'Utilize a estrutura do Banco BTG Pactual para sua empresa realizar os processos de exportação e importação de mercadorias. Temos soluções ágeis para realizar transferências e para recebermos os recursos auxiliando seus processos relacionados ao comércio exterior.'})}
  
  var vantCambio = function() {
    botui.message
   .bot({
    delay: 0,
    content: 'Mesa de câmbio com profissionais dedicados, agilidade na estruturação e análise da operação, agilidade no processamento da operação e no pagamento, assinatura de contrato de câmbio realizada de forma simples no app (via Push) com apenas um clique, segurança do maior Banco de Investimentos da América Latina e custos reduzidos'})}

    var oqueePrev = function() {
      botui.message
      .bot({
      delay: 0,
      content: 'A previdência privada é uma modalidade de investimento que permite que você construa seu patrimônio pensando no longo prazo, seja na aposentadoria ou mesmo nos benefícios fiscais que você pode ter com essa aplicação.'})}
                            
    var comofuncionaPrev = function() {
      botui.message
      .bot({
      delay: 0,
      content: 'O dinheiro aplicado em planos de previdência privada vai para fundos especialmente constituídos para este fim e é possível resgatar esse saldo ao final do investimento ou então transformá-lo em uma renda de aposentadoria.'})}
                  
    var pgblVgbl = function() {
      botui.message
      .bot({
      delay: 0,
      content: 'O PGBL (Plano Gerador de Benefícios Livres) é o plano de previdência privada mais indicado para quem faz a declaração completa de Imposto de Renda e contribui para o INSS. Com o benefício fiscal de poder deduzir do Imposto de Renda o que investiu durante o ano no plano de previdência privada até chegar no limite de até 12% de sua renda bruta tributável anual na declaração completa do Imposto de Renda (por deduções legais).'})
      botui.message
      .bot({
      delay: 100,
      content: 'Já o VGBL (Vida Gerador de Benefícios Livres) é o plano de previdência privada mais indicado para quem faz a declaração simplificada de Imposto de Renda, é isento ou para quem faz a declaração completo e deseja aplicar mais de 12% de sua renda bruta tributável anual investido em previdência privada.'})}
      
    var oqueePortprev = function() {
      botui.message
     .bot({
      delay: 0,
      content: 'A portabilidade nos planos de previdência é um direito de todo investidor. O pedido de migração de um fundo para o outro é totalmente gratuito e o único custo é taxa de carregamento de saída no plano atual que você investe, se houver. '})
      botui.message
     .bot({
      delay: 200,
      content: 'Você pode realizar a portabilidade entre planos da mesma instituição financeira, ou de diferentes instituições sem nenhum problema. Contudo, a portabilidade só pode ser realizada entre planos da mesma modalidade, ou seja, se você aplica em um PGBL (Plano Gerador de Benefício Livre) você só pode ir para outro PGBL. O mesmo vale para os VGBL (Vida Gerador de Benefício Livre). A carência mínima para pedir a portabilidade em planos de previdência abertos é de 60 dias, sendo que, para efeitos de tributação, o tempo de investimento não passa por nenhuma alteração. O prazo pode ser maior, dependendo do regulamento do plano original.'})}

      var transfRecursos = function() {
        botui.message
        .bot({
        delay: 0,
        content: 'Abaixo estão os dados necessários para que você possa enviar recursos para sua conta BTG Pactual digital, efetue a transferência como TED (mesma titularidade) e com a finalidade de “Crédito em Conta Corrente”:'})
        botui.message
        .bot({
        delay: 200,
        content: 'Banco	208, Agência	00001, O número da sua conta no BTG Pactual digital, Tipo de transferência:	Mesma titularidade. Para transferir recursos para sua conta do BTG Pactual digital você deve fazer uma transferência via DOC ou TED. Não é necessário utilizar nosso CNPJ para realizar a transferência para sua conta no BTG, pois as contas são cadastradas no CPF do cliente. Nosso código de identificação é o 208, agência é 0001, o número de sua conta está disponível em sua área logada, na aba TRANSFERÊNCIAS > DEPOSITAR.'})
        botui.message
        .bot({
        delay: 300,
        content: 'Lembre-se que a finalidade da TED deve ser "Crédito em Conta". Caso a conta no banco de origem seja de sua titularidade, basta selecionar a opção "Mesma titularidade" no momento em que estiver realizando a transferência, caso seja de outra titularidade, basta selecionar a opção "Outra titularidade" e preencher o CPF do titular da conta. As transferências serão aceitas até às 17h. Transferências realizadas após este horário serão contabilizadas para o próximo dia útil.'})}
                              
      var transfCustBTG = function() {
        botui.message
        .bot({
        delay: 0,
        content: 'A transferência de custódia é de responsabilidade da corretora ou banco de origem, executora da ordem.'})
        botui.message
        .bot({
        delay: 200,
        content: 'Indicamos que entre em contato com a instituição que custodia atualmente seus títulos e verifique qual o procedimento padrão adotado. É importante que não tenha pendências na instituição da qual está transferindo os ativos para que o processo seja finalizado com sucesso. Dados do BTG Pactual Digital para preenchimento do formulário de transferência de custódia: Corretora: 1026, CNPJ do BTG Pactual: 30.306.294/0001-45. Pedimos que envie uma cópia digitalizada para seu assessor de investimentos do BTG Pactual Digital para que ele possa acompanhar a transferência internamente.'})}
                    
      var transfCustother = function() {
        botui.message
        .bot({
        delay: 0,
        content: 'Abrir uma conta na Instituição Financeira de destino; Preencher a STVM; Após preenchimento, deverá imprimir uma via da STVM para realizar a assinatura; Enviar a digitalização do documento para o endereço de e-mail do seu assessor do BTG Pactual digital; Verificar se não há nenhuma pendência na conta do BTG Digital, como: Conta negativa; Pendência cadastral; Para identificar quem é o seu assessor, você deve fazer o login no site do BTG Pactual digital e clicar em seu nome no canto superior direito, em seguida basta clicar em DADOS DO ASSESSOR. Pelo aplicativo você deve clicar em CONTA > DADOS DO ASSESSOR. Assim irá identificar os contatos do mesmo, como telefone e e-mail. IMPORTANTE: Após o término desta pandemia será necessário o envio da via física com reconhecimento de firma feito por autenticidade, aos cuidados de Middle Digital, no seguinte endereço: Av. Brigadeiro Faria Lima, 3.477 - 11º Andar, São Paulo/SP, CEP 04538-133.'})
        botui.message
        .bot({
        delay: 0,
        content: 'IMPORTANTE: Após o término desta pandemia será necessário o envio da via física com reconhecimento de firma feito por autenticidade, aos cuidados de Middle Digital, no seguinte endereço: Av. Brigadeiro Faria Lima, 3.477 - 11º Andar, São Paulo/SP, CEP 04538-133.'})}
        
      var difSta = function() {
        botui.message
       .bot({
        delay: 0,
        content: 'A STA é a solicitação para uma transferência de custódia entre Corretoras. Lembrando que os bancos podem possuir corretoras ligadas a Instituição. Já OTA é a solicitação para uma transferência entre Banco ou Empresa Escrituradora e a Corretora. Dessa maneira, basta identificar com sua Instituição Financeira aonde sua posição atual está custodiada.'})}
                      
        var oqueCdi = function() {
          botui.message
         .bot({
          delay: 0,
          content: 'CDI (Certificado de Depósito Interbancário) é o nome dos empréstimos que os bancos fazem entre si para fechar o caixa do dia no positivo.'})
          botui.message
          .bot({
          delay: 200,
          content: 'Por determinação do Banco Central, todo banco deve fechar o dia com mais dinheiro entrando do que saindo dele (em outras palavras: fechar o dia com saldo positivo). Por diferentes motivos, nem sempre isso acontece — o número de saques no dia pode ter sido maior que o de depósitos, por exemplo.'})
          botui.message
          .bot({
          delay: 300,
          content: 'Nesse caso, o banco precisa fazer um empréstimo para cobrir a diferença e deixar o caixa do dia positivo. Mas de quem eles pegam esse dinheiro emprestado? Dos próprios bancos.'})}

        var cdiafetaDinheiro = function() {
          botui.message
          .bot({
          delay: 0,
          content: 'Um cidadão comum não pode investir diretamente no CDI – mas os bancos e instituições financeiras usam a Taxa CDI para regular quanto rendem alguns tipos de investimento.'})
          botui.message
          .bot({
          delay: 200,
          content: 'Existem diferentes tipos de investimento no mercado, mas os de renda fixa podem ser divididos em duas categorias:'})
          botui.message
          .bot({
          delay: 300,
          content: 'Pré-fixado: são aqueles em que a taxa de rendimento já é estipulada na hora que o cliente escolhe aquela aplicação.'})
          botui.message
          .bot({
          delay: 400,
          content: 'Pós-fixados: são aqueles definidos no vencimento da aplicação, por um índice de referência.'})}
          
        var cdiafetaInvest = function() {
          botui.message
         .bot({
          delay: 0,
          content: 'Existem quatro investimentos principais que são afetados por essa taxa: o CDB, LCI, LCA e LC.'})}

          var oqueeSelic = function() {
            botui.message
           .bot({
            delay: 0,
            content: 'Selic (Sistema Especial de Liquidação e Custódia) é a taxa básica de juros da economia brasileira. Basicamente, ela influencia todas as demais taxas de juros do Brasil, como as cobradas em empréstimos, financiamentos e até de retorno em aplicações financeiras.'})}
  
          var valorSelic = function() {
            botui.message
            .bot({
            delay: 0,
            content: 'A Taxa Selic é definida a cada 45 dias pelo Copom (Comitê de Política Monetária), ligado ao Banco Central, que se baseia em inúmeros indicadores financeiros do país para chegar a uma taxa.'})
            botui.message
            .bot({
            delay: 200,
            content: 'Nessas decisões, a Selic pode tanto se manter estável, sem alterações, quanto aumentar ou diminuir em pontos percentuais.'})
            botui.message
            .bot({
            delay: 300,
            content: 'As mudanças na Taxa Selic acontecem pois a economia não é estável – e, por isso, é preciso adequá-la ao cenário para que exista um equilíbrio e garantir que o dinheiro continue circulando.'})}
            
          var afetadinSelic = function() {
            botui.message
           .bot({
            delay: 0,
            content: 'Os efeitos da mudança da Selic são sentidos por todos os brasileiros, bancos e até investidores estrangeiros. Basicamente:'})
            botui.message
            .bot({
             delay: 200,
             content: 'Se a Taxa Selic diminui: o crédito fica mais acessível já que os bancos tendem a abaixar as taxas de juros e a inflação tende a subir.'})
            botui.message
            .bot({
             delay: 300,
             content: 'Se a Taxa Selic aumenta: os preços tendem a baixar ou ficar estáveis como uma consequência do controle da inflação e os juros de crédito, parcelamento e cheque especial ficam mais altos.'})}

          var afetainvestSelic = function() {
            botui.message
           .bot({
            delay: 0,
            content: 'Considerando que a Taxa Selic tem forte influência na taxa de remuneração de diversos investimentos, qualquer mudança na Selic impacta a rentabilidade desses produtos financeiros. São eles: Títulos do Tesouro Direto, Caderneta de poupança e Investimentos de Renda Fixa.'})}

            var oqueeRv = function() {
              botui.message
             .bot({
              delay: 0,
              content: 'Basicamente, investimentos de renda variável são aqueles cujo retorno é imprevisível no momento do investimento. O valor varia conforme as condições do mercado – e, consequentemente, a remuneração que as aplicações oferecem segue esse mesmo princípio.'})}
    
            var rendeRv = function() {
              botui.message
              .bot({
              delay: 200,
              content: 'O retorno que ela te derá é bem imprevisível afinal esse valor varia conforme as condições do mercado.'})}
              
            var riscoRv = function() {
              botui.message
             .bot({
              delay: 0,
              content: 'Na renda variável, não existe qualquer tipo de garantia de que o melhor cenário acontecerá, ao passo que, na renda fixa, as condições de remuneração são claramente estabelecidas desde o início.'})
              botui.message
             .bot({
              delay: 200,
              content: 'Pense na bolsa de valores: um dia, o Ibovespa sobe, no outro, cai. Portanto, é necessário estar com os nervos preparados para lidar com a instabilidade do mercado constantemente.'})}

            var tiposRv = function() {
              botui.message
              .bot({
              delay: 0,
              content: 'Existem diversos produtos disponíveis para investir em renda variável, dos mais simples aos mais sofisticados. Cada um deles têm características próprias de risco e liquidez.'})
              botui.message
              .bot({
              delay: 200,
              content: 'Dentre eles nós temos as ações, Fundos Imobiliários (FIIs), ETFs, Opções, Câmbio, Futuros, Fundos de Investimentos e as criptomoedas'})}

              var oqueeTrade = function() {
                botui.message
                .bot({
                delay: 0,
                content: 'A estratégia Day Trade te permite negociar ativos por meio do nosso Home Broker, Plataformas e Mesa de Operações durante o mesmo pregão com margens diferenciadas.'})
                botui.message
                .bot({
                delay: 200,
                content: 'Ao aderir o módulo de Day Trade em nossa plataforma e possuir RLP ativo, você conta com corretagem ZERO para minicontratos de índice e dólar, ações e ETFs. Abra sua conta agora e comece uma nova fase em sua jornada como trader.'})}
                                      
              var comoutilizarTrade = function() {
                botui.message
                .bot({
                delay: 0,
                content: 'O primeiro passo é realizar a adesão ao produto diretamente em nosso site. Acesse “Produtos”, “Renda Variável” e clique em “Plataformas e Serviços”. Selecione “Serviços” e escolha a opção “Day Trade”.'})
                botui.message
                .bot({
                delay: 200,
                content: 'Após aderir o produto, determine seu limite alocado com base em seu limite total. Ao selecionar a estratégia Day Trade, você poderá realizar operações de compra e venda com os ativos permitidos.'})
                botui.message
                .bot({
                delay: 400,
                content: 'A alocação de margem para operar Day Trade via Home Broker deve ser feita diariamente. Em nosso aplicativo (BTG Pactual digital), é possível escolher a opção de alocação de margem recorrente por 7 dias.'})}  
                
              var custosTrade = function() {
                botui.message
                .bot({
                delay: 0,
                content: 'Não existe nenhum custo para adesão ao produto Day Trade.'})
                botui.message
                .bot({
                delay: 200,
                content: 'Veja abaixo os custos operacionais:'})
                botui.message.add({
                  type: 'html',
                  content:'<iframe src="https://www.btgpactualdigital.com/custos" style="height:380px ; width:100%; "></iframe>'})}

              var horarioTrade = function() {
                botui.message
                .bot({
                delay: 0,
                content: 'Você poderá realizar operações a partir do início do pregão e encerrá-las até 5 minutos antes do call de fechamento, e para ativos que não possuem call, 10 minutos antes do fim da negociação normal, definidos pela B3.'})
                botui.message
                .bot({
                delay: 200,
                content: 'Caso ainda existam posições abertas, a área de Risco do BTG Pactual digital terá o direito de encerrá-las automaticamente.'})}
                                        
              var areaTrader = function() {
                botui.message
               .bot({
                delay: 0,
                content: 'Conheça a área do do trader e tenha acesso as melhores recomendações para compra e venda de ações.'})
                botui.message.add({
                  type: 'html',
                  content:'<iframe src="https://www.btgpactualdigital.com/analises/area-do-trader" style="height:380px ; width:100%; "></iframe>'})}

                  var baixarAndroid = function() {
                    botui.message
                    .bot({
                    delay: 0,
                    content: 'Clique em "instalar" para realizar o download do nosso aplicativo de forma totalmente gratuita.'})
                    window.open("https://play.google.com/store/apps/details?id=com.btg.pactual.digital.mobile&hl=pt_BR&gl=US");
                    botui.message
                    .bot({
                     delay: 200,
                     content: 'Se você tiver qualquer dúvida sobre ele, é só me chamar!'})}
                                            
                  var baixarIos = function() {
                    botui.message
                   .bot({
                    delay: 0,
                    content: 'Clique em "instalar" para realizar o download do nosso aplicativo de forma totalmente gratuita.'})
                    window.open("https://apps.apple.com/br/app/btg-pactual-digital/id1041958375");
                    botui.message
                    .bot({
                     delay: 200,
                     content: 'Se você tiver qualquer dúvida sobre ele, é só me chamar!'})}
              
var chatingBot = function () {

  botui.message
  .bot({
    delay: 500,
    loading: true,
    content: 'Selecione uma das funções abaixo para saber mais sobre um determinado produto. Quando você verificar que já aprendeu sobre todos, clique em continuar para avançarmos.'
  }).then(function () {
      return botui.action.button({
        delay: 0,
        action: [{
          text: 'Tesouro Direto',
          value: 'tesouro_direto1'
        }, {
          text: 'Fundos de Investimentos',
          value: 'fund_invest1'
        }, {
          text: 'Renda Fixa',
          value: 'rend_fix1'
        }, {
          text: 'Renda Variável',
          value: 'rend_vari1'
        }, {
          text: 'Previdência Privada',
          value: 'prev_priv1'
        }, {
          text: 'COE',
          value: 'coe1'
        }, {
          text: 'Seguro de Vida',
          value: 'seguro_vida1'
        }, {
          text: 'Câmbio',
          value: 'cambio1'
        }, {
          text: 'Continuar',
          value: 'continuar'
        }]
      })
    }).then(function (res) {
      if(res.value == 'tesouro_direto1') {
        botui.message
        .bot({
          delay: 0,
          content: 'O Tesouro Direto é um dos investimentos mais conhecidos e indicados para o investidor iniciante e para o investidor conservador. Estou aqui para te ajudar a entender tudo sobre ele! O que você deseja aprender?'
        }).then(function () {
          return botui.action.button({
            delay: 0,
            action: [{
              text: 'O que é?',
              value: 'o_que_e_tesouro'
            }, {
              text: 'Quais os riscos para investir?',
              value: 'riscos_tesouro'
            }, {
              text: 'Qual a rentabilidade e quais são os títulos?',
              value: 'rent_tesouro'
            }, {
              text: 'É possível vender antes do vencimento?',
              value: 'vend_tesouro'
            }]
          })
        })
        .then(function (res) {
          if(res.value == 'o_que_e_tesouro') {
            oqueeTesouro()
          }
            else if (res.value == 'riscos_tesouro') {
            riscosTesouro();
          } else if (res.value == 'rent_tesouro') {
            rentabilidadeTesouro();
          } else if (res.value == 'vend_tesouro') {
            venderTesouro();
          }
        }).then(chatingBot);

      }
        else if (res.value == 'fund_invest1') {
          botui.message
          .bot({
            delay: 0,
            content: 'Os fundos são uma modalidade de investimento que reúne recursos financeiros de um conjunto de investidores (cotistas) em uma cesta de ativos, comparando-se a um condomínio. Vamos aprender mais sobre eles?'
          }).then(function () {
            return botui.action.button({
              delay: 0,
              action: [{
                text: 'O que é?',
                value: 'o_que_e_fundos'
              }, {
                text: 'Quais os riscos para investir?',
                value: 'riscos_fundos'
              }, {
                text: 'Quais os tipos de fundos',
                value: 'tipos_fundos'
              }]
            })
          })
          .then(function (res) {
            if(res.value == 'o_que_e_fundos') {
              oqueeFundos()
            }
              else if (res.value == 'riscos_fundos') {
              riscosFundos();
            } else if (res.value == 'tipos_fundos') {
              tiposFundos();
            }
          }).then(chatingBot);

      } else if (res.value == 'rend_fix1') {
          botui.message
          .bot({
            delay: 0,
            content: 'Com o BTG Pactual, você conta com um portfólio diversificado de Renda Fixa, com vários prazos e emissores diferentes para aplicar seu patrimônio de maneira eficiente. Vamos aprender mais sobre renda fixa?'
          }).then(function () {
            return botui.action.button({
              delay: 0,
              action: [{
                text: 'O que é?',
                value: 'o_que_e_rf'
              }, {
                text: 'Quanto rendem os títulos de renda fixa?',
                value: 'rende_rf'
              }, {
                text: 'Quais os riscos para investir?',
                value: 'risco_rf'
              }, {
                text: 'Quais são os tipos de renda fixa?',
                value: 'tipos_rf'
              }]
            })
          })
          .then(function (res) {
            if(res.value == 'o_que_e_rf') {
              oqueeRf()
            }
              else if (res.value == 'rende_rf') {
              rendeRf();
            } else if (res.value == 'risco_rf') {
              riscoRf();
            } else if (res.value == 'tipos_rf') {
              tiposRf();
            }
          }).then(chatingBot);
        }

        else if (res.value == 'rend_vari1') {
          botui.message
          .bot({
            delay: 0,
            content: 'Com esse tipo de investimento, que envolve alguns riscos de mercado específicos, é possível obter um retorno potencialmente maior que o da renda fixa. Vamos aprender mais sobre ela!'
          }).then(function () {
            return botui.action.button({
              delay: 0,
              action: [{
                text: 'O que é?',
                value: 'o_que_e_rv'
              }, {
                text: 'Quanto rende a renda variável?',
                value: 'rende_rv'
              }, {
                text: 'Quais os riscos para investir?',
                value: 'risco_rv'
              }, {
                text: 'Quais são os tipos de renda variável?',
                value: 'tipos_rv'
              }]
            })
          })
          .then(function (res) {
            if(res.value == 'o_que_e_rv') {
              oqueeRv()
            }
              else if (res.value == 'rende_rv') {
              rendeRv();
            } else if (res.value == 'risco_rv') {
              riscoRv();
            } else if (res.value == 'tipos_rv') {
              tiposRv();
            }
          }).then(chatingBot);

      } else if (res.value == 'prev_priv1') {
        botui.message
      .bot({
        delay: 0,
        content: 'Conte com os benefícios fiscais e um sistema multifundos de previdência privada no BTG Pactual digital. Pronto para os meus ensinamentos?'
      }).then(function () {
        return botui.action.button({
          delay: 0,
          action: [{
            text: 'O que é?',
            value: 'o_que_e_prev'
          }, {
            text: 'Como ela funciona?',
            value: 'como_funciona_prev'
          }, {
            text: 'PGBL & VGBL',
            value: 'pgbl_vgbl'
          }, {
            text: 'O que é portabilidade?',
            value: 'o_que_e_port_prev'
          }]
        })
      })
      .then(function (res) {
        if(res.value == 'o_que_e_prev') {
          oqueePrev()
        }
          else if (res.value == 'como_funciona_prev') {
          comofuncionaPrev();
        } else if (res.value == 'pgbl_vgbl') {
          pgblVgbl();
        } else if (res.value == 'o_que_e_port_prev') {
          oqueePortprev();
        }
      }).then(chatingBot);

      } else if (res.value == 'coe1') {
        botui.message
        .bot({
          delay: 0,
          content: 'A segurança da Renda Fixa com o potencial da Renda Variável. Conheça o COE (Certificado de Operações Estruturadas), produto que oferece diversificação para sua carteira com a proteção da Renda Fixa. O que você deseja aprender sobre eles?'
        }).then(function () {
          return botui.action.button({
            delay: 0,
            action: [{
              text: 'O que é?',
              value: 'o_que_e_coe'
            }, {
              text: 'Pra quem é COE?',
              value: 'pra_quem_coe'
            }, {
              text: 'Quais os riscos de investir em COE?',
              value: 'riscos_coe'
            }, {
              text: 'Quais os tipos de COE?',
              value: 'tipos_coe'
            }]
          })
        })
        .then(function (res) {
          if(res.value == 'o_que_e_coe') {
            oqueeCoe()
          }
            else if (res.value == 'pra_quem_coe') {
            praqueCoe();
          } else if (res.value == 'riscos_coe') {
            riscosCoe();
          } else if (res.value == 'tipos_coe') {
            tiposCoe();
          }
        }).then(chatingBot);
      }
  
        else if (res.value == 'seguro_vida1') {
          botui.message
          .bot({
            delay: 0,
            content: 'Proteja seu maior patrimônio, você. Conte com uma assessoria preparada para ajudar no que for preciso na hora de escolher o seguro e a cobertura ideais para as suas necessidades.'
          }).then(function () {
            return botui.action.button({
              delay: 0,
              action: [{
                text: 'Pra quem ele é?',
                value: 'pra_quem_seguro'
              }, {
                text: 'Quais são as vantagens?',
                value: 'vantagens_seguro'
              }]
            })
          })
          .then(function (res) {
            if(res.value == 'pra_quem_seguro') {
              praquemSeguro()
            }
              else if (res.value == 'vantagens_seguro') {
              vantagensSeguro();
            }
          }).then(chatingBot);

      } else if (res.value == 'cambio1') {
        botui.message
        .bot({
          delay: 0,
          content: 'Conte com uma estrutura padrão BTG para realizar pagamentos e recebimentos do exterior de maneira rápida e segura. Pronto para aprender mais sobre câmbio?'
        }).then(function () {
          return botui.action.button({
            delay: 0,
            action: [{
              text: 'O que é?',
              value: 'o_que_e_cambio'
            }, {
              text: 'Recebimento Internacional',
              value: 'recebimento_internacional'
            }, {
              text: 'Pagamentos Internacionais',
              value: 'pagamentos_internacionais'
            }, {
              text: 'Comércio Exterior',
              value: 'comercio_exterior'
            }, {
              text: 'Vantagens BTG Pactual',
              value: 'vant_btg_pactual'
            }]
          })
        })
        .then(function (res) {
          if(res.value == 'o_que_e_cambio') {
            oqueeCambio()
          }
            else if (res.value == 'recebimento_internacional') {
            recebimentoInternacional();
          } else if (res.value == 'pagamentos_internacionais') {
            pagamentosInternacionais();
          } else if (res.value == 'comercio_exterior') {
            comercioExterior();
          } else if (res.value == 'vant_btg_pactual') {
            vantCambio();
          }
        }).then(chatingBot);

      } else if (res.value == 'continuar') {
        botui.message
        .bot({
          delay: 0,
          content: 'Ficou alguma dúvida com relação aos nossos produtos? 🤔'
        }).then(function () {
          return botui.action.button({
            delay: 0,
            action: [{
              text: 'Algumas',
              value: 'algumas_duvidas'
            }, {
              text: 'Sem dúvidas!',
              value: 'sem_duvidas'
            }]
          })
        })
        .then(function (res) {
          if(res.value == 'algumas_duvidas') {
            botui.message
            .bot({
              delay: 500,
              loading: true,
              content: 'Isso! Acredito que eu tenha chegado em um ponto bem interessante.'})
              botui.message
              .bot({
                delay: 1000,
                loading: true,
                content: 'Pelos meus cálculos você realmente precisa de um assessor de investimentos para que ele possa tirar todas as suas dúvidas!'})
                botui.message
                .bot({
                  delay: 2000,
                  loading: true,
                  content: 'Ele irá entrar em contato com você em breve, mas enquanto isso, saiba que eu estou aqui para te ajudar a continuar a sua jornada pelo mundo dos investimentos!'})
                    botui.message
                    .bot({
                      delay: 3000,
                      loading: true,
                      content: 'Não se esqueça que eu sou uma inteligência artificial, então você poderá fazer perguntas e conversar comigo da mesma forma que você faria com uma pessoa normal! 😉'
                    }).then(iniciarChat);

          }
            else if (res.value == 'sem_duvidas') {
            botui.message
              .bot({
              delay: 500,
              loading: true,
              content: 'Isso é um sinal de que o meu criador tem me ensinado muito bem!'})
              botui.message
              .bot({
                delay: 2500,
                loading: true,
                content: 'E também de que você conseguiu assimilar todo o conhecimento que eu te passei!'})
                botui.message
                .bot({
                  delay: 4000,
                  loading: true,
                  content: 'Porém eu acho que nós podemos nos conhecer ainda mais! Vou pedir para que um dos nossos assessores entre em contato com você.'})
                  botui.message
                  .bot({
                    delay: 5500,
                    loading: true,
                    content: 'Ele te ligará em breve, mas enquanto isso, saiba que eu estou aqui para te ajudar a continuar a sua jornada pelo mundo dos investimentos!'})
                      botui.message
                      .bot({
                        delay: 6500,
                        loading: true,
                        content: 'Não se esqueça que eu sou uma inteligência artificial, então você poderá fazer perguntas e conversar comigo da mesma que você faria com uma pessoa normal! 😉'
                      }).then(iniciarChat);
                    }
                })
            }
      })
}

  var iniciarChat = function () {
      botui.action.text ({
        delay: 0,
        action: {
          size: 180,
          placeholder: 'Fale comigo!'
        }
      }).then(function (res) {
      if(res.value.includes ('oi') || res.value.includes('eae') || res.value.includes('eai') || res.value.includes('olá') || res.value.includes('jóia') || res.value.includes('salve') || res.value.includes ('Oi') || res.value.includes('Eae') || res.value.includes('Eai') || res.value.includes('Olá') || res.value.includes('Jóia') || res.value.includes('Salve') || res.value.includes ('OI') || res.value.includes('EAE') || res.value.includes('EAI') || res.value.includes('OLÁ') || res.value.includes('JÓIA') || res.value.includes('SALVE')) {
        botui.message
        .bot({
          delay: 0,
          content: 'Olá, tudo bem? 😀'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Olá, tudo bem?';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);
      
      } else if ((res.value.includes('conhecer') || res.value.includes('Conhecer') || res.value.includes('CONHECER') || res.value.includes('Saber') || res.value.includes('saber') || res.value.includes('SABER')) && (res.value.includes('produtos') || res.value.includes('PRODUTOS'))) {
        botui.message
        .bot({
          delay: 0,
          content: 'Claro, quais produtos do banco BTG Pactual você gostaria de conhecer?'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Claro, quais produtos do banco BTG Pactual você gostaria de conhecer?';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

        } else if (res.value.includes('cdb') || res.value.includes('CDB') || res.value.includes('Cdb') || res.value.includes('Certificado de Depósito Bancário') || res.value.includes('Certificado de depósito bancário') || res.value.includes('certificado de depósito bancário') || res.value.includes('CERTIFICADO DE DEPÓSITO BANCÁRIO')) {
        botui.message
        .bot({
          delay: 0,
          content: 'O CDB (Certificado de Depósito Bancário) é um título privado emitido por instituições financeiras com prazo e taxa definidos no momento da compra. Esse título conta com a cobertura do Fundo Garantidor de Créditos em até R$ 250 mil por emissor e por CPF.'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'O CDB (Certificado de Depósito Bancário) é um título privado emitido por instituições financeiras com prazo e taxa definidos no momento da compra. Esse título conta com a cobertura do Fundo Garantidor de Créditos em até R$ 250 mil por emissor e por CPF.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

        } else if (res.value.includes('fgc') || res.value.includes('FGC') || res.value.includes('Fundo Garantidor de Créditos') || res.value.includes('fundo garantidor de créditos') || res.value.includes('Fundo garantidor de créditos')) {
          botui.message
          .bot({
            delay: 0,
            content: 'O Fundo Garantidor de Créditos (FGC) é uma associação civil criada em 1995, formada por instituições financeiras cujo objetivo é proteger o investidor nos casos de eventuais inadimplências ou até falências de bancos. Tal fundo oferece uma garantia de crédito, para ressarcimento do poupador.'}).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'O Fundo Garantidor de Créditos (FGC) é uma associação civil criada em 1995, formada por instituições financeiras cujo objetivo é proteger o investidor nos casos de eventuais inadimplências ou até falências de bancos. Tal fundo oferece uma garantia de crédito, para ressarcimento do poupador.';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

        } else if ((res.value.includes('começ') || res.value.includes('COMEÇ') || res.value.includes('Começ') || res.value.includes('inic') || res.value.includes('Inic') || res.value.includes('INIC')) && (res.value.includes('invest') || res.value.includes('INVEST') || res.value.includes('Invest'))) {
          botui.message
          .bot({
            delay: 0,
            content: 'Estabeleça os seus objetivos, determine a quantia a ser investida, conheça os tipos de investimentos, conheça o seu perfil de investidor, procure uma instituição financeira, abra a sua conta e por último escolha os seus investimentos.'})
            botui.message
            .bot({
              delay: 200,
              content: 'Achou bastante coisa? Entre em contato com a gente que nós iremos te auxiliar na sua jornada!'}).then(iniciarChat);
              let utter = new SpeechSynthesisUtterance();
              utter.lang = 'pt-BR';
              utter.text = 'Estabeleça os seus objetivos, determine a quantia a ser investida, conheça os tipos de investimentos, conheça o seu perfil de investidor, procure uma instituição financeira, abra a sua conta e por último escolha os seus investimentos. Achou bastante coisa? Entre em contato com a gente que nós iremos te auxiliar na sua jornada!';
              utter.volume = 0.5;
              window.speechSynthesis.speak(utter);

        } else if (res.value.includes('lca') || res.value.includes('LCA') || res.value.includes('Lca') || res.value.includes('Letra de Crédito do Agronegócio') || res.value.includes('Letra de crédito do agronegócio') || res.value.includes('letra de crédito do agronegócio') || res.value.includes('LETRA DE CRÉDITO DE AGRONEGÓCIO')) {
        botui.message
        .bot({
          delay: 0,
          content: 'O LCA (Letra de Crédito do Agronegócio) é um título privado emitido por instituições financeiras com prazo e taxa definidos no momento da compra, lastreado por operações de crédito do setor agrícola. Tem isenção de IR e de Imposto sobre Operações Financeiras (IOF) para pessoas físicas, além de contar com a cobertura do Fundo Garantidor de Créditos em até R$ 250 mil por emissor e por CPF.'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'O LCA (Letra de Crédito do Agronegócio) é um título privado emitido por instituições financeiras com prazo e taxa definidos no momento da compra, lastreado por operações de crédito do setor agrícola. Tem isenção de IR e de Imposto sobre Operações Financeiras (IOF) para pessoas físicas, além de contar com a cobertura do Fundo Garantidor de Créditos em até R$ 250 mil por emissor e por CPF.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

        } else if (res.value.includes('lci') || res.value.includes('LCI') || res.value.includes('Lci') || res.value.includes('Letra de Crédito Imobiliário') || res.value.includes('Letra de crédito imobiliário') || res.value.includes('letra de crédito imobiliário') || res.value.includes('LETRA DE CRÉDITO IMOBILIÁRIO')) {
        botui.message
        .bot({
          delay: 0,
          content: 'O LCI (Letra de Crédito Imobiliário) é um título privado emitido por instituições financeiras com prazo e taxa definidos no momento da compra, lastreado por operações de crédito do setor imobiliário. Tem isenção de IR, além de contar com a cobertura do Fundo Garantidor de Créditos em até R$ 250 mil por emissor e por CPF.'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'O LCI (Letra de Crédito Imobiliário) é um título privado emitido por instituições financeiras com prazo e taxa definidos no momento da compra, lastreado por operações de crédito do setor imobiliário. Tem isenção de IR, além de contar com a cobertura do Fundo Garantidor de Créditos em até R$ 250 mil por emissor e por CPF.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

        } else if (res.value.includes('Custos operaciona') || res.value.includes('custos operaciona') || res.value.includes('Custo operaciona') || res.value.includes('custo operaciona') || res.value.includes('CUSTO OPERACIONA') || res.value.includes('CUSTOS OPERACIONA')) {
          botui.message
          .bot({
            delay: 0,
            content: 'Custos operacionais são quantias que o investidor paga para poder adquirir ou manter uma aplicação. No fim das contas, esse gasto reduz a rentabilidade.'}).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'Custos operacionais são quantias que o investidor paga para poder adquirir ou manter uma aplicação. No fim das contas, esse gasto reduz a rentabilidade.';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

        } else if (res.value.includes('IPO') || res.value.includes('ipo') || res.value.includes('Ipo')) {
          botui.message
          .bot({
            delay: 0,
            content: 'Um IPO (initial public offering ou oferta pública inicial) representa a primeira vez que uma empresa receberá novos sócios realizando uma oferta de ações ao mercado. Ela se torna, então, uma companhia de capital aberto com papéis negociados no pregão da Bolsa de Valores.'})
            botui.message
            .bot({
              delay: 400,
              content: 'Normalmente, as empresas que fazem um IPO estão em um estágio de maturidade avançado dos seus negócios. Essas operações no Brasil, historicamente, são bastante grandes, podendo atingir a casa das centenas de milhões de reais.'}).then(iniciarChat);
              let utter = new SpeechSynthesisUtterance();
              utter.lang = 'pt-BR';
              utter.text = 'Um IPO (initial public offering ou oferta pública inicial) representa a primeira vez que uma empresa receberá novos sócios realizando uma oferta de ações ao mercado. Ela se torna, então, uma companhia de capital aberto com papéis negociados no pregão da Bolsa de Valores. Normalmente, as empresas que fazem um IPO estão em um estágio de maturidade avançado dos seus negócios. Essas operações no Brasil, historicamente, são bastante grandes, podendo atingir a casa das centenas de milhões de reais.';
              utter.volume = 0.5;
              window.speechSynthesis.speak(utter);

        } else if (res.value.includes('Bolsa') || res.value.includes('bolsa') || res.value.includes('BOLSA') || res.value.includes('B3') || res.value.includes('b3')) {
          botui.message
          .bot({
            delay: 0,
            content: 'A B3 é uma das principais empresas de infraestrutura de mercado financeiro no mundo, com atuação em ambiente de bolsa e de balcão.'}) 
            botui.message
            .bot({
              delay: 400,
              content: 'A Companhia integra os índices Ibovespa, IBrX-50, IBrX e Itag, entre outras. As atividades incluem criação e administração de sistemas de negociação, compensação, liquidação, depósito e registro para todas as principais classes de ativos, desde ações e títulos de renda fixa corporativa até derivativos de moedas, operações estruturadas e taxas de juro e de commodities. A B3 também opera como contraparte central garantidora para a maior parte das operações realizadas em seus mercados e oferta serviços de central depositária e de central de registro. Por meio de sua unidade de financiamento de veículos e imóveis, a Companhia oferece produtos e serviços que suportam o processo de análise e aprovação de crédito em todo o território nacional, tornando o processo de financiamento mais ágil e seguro.'}).then(iniciarChat);
              let utter = new SpeechSynthesisUtterance();
              utter.lang = 'pt-BR';
              utter.text = 'A B3 é uma das principais empresas de infraestrutura de mercado financeiro no mundo, com atuação em ambiente de bolsa e de balcão. A Companhia integra os índices Ibovespa, IBrX-50, IBrX e Itag, entre outras. As atividades incluem criação e administração de sistemas de negociação, compensação, liquidação, depósito e registro para todas as principais classes de ativos, desde ações e títulos de renda fixa corporativa até derivativos de moedas, operações estruturadas e taxas de juro e de commodities. A B3 também opera como contraparte central garantidora para a maior parte das operações realizadas em seus mercados e oferta serviços de central depositária e de central de registro. Por meio de sua unidade de financiamento de veículos e imóveis, a Companhia oferece produtos e serviços que suportam o processo de análise e aprovação de crédito em todo o território nacional, tornando o processo de financiamento mais ágil e seguro.';
              utter.volume = 0.5;
              window.speechSynthesis.speak(utter);

        } else if ((res.value.includes('O q') || res.value.includes('O Q')) && (res.value.includes('cri') || res.value.includes('CRI') || res.value.includes('Cri') || res.value.includes('cra') || res.value.includes('CRA') || res.value.includes('Cra') || res.value.includes('Certificado de Recebíveis') || res.value.includes('certificado de recebíveis') || res.value.includes('Certificado de recebíveis'))) {
          botui.message
          .bot({
            delay: 0,
            content: 'Tanto o CRI (Certificado de Recebíveis Imobiliários) como o CRA (Certificado de Recebíveis do Agronegócio) são títulos que geram direitos de créditos ao investidor, com prazo e taxa definidos no momento da compra, mas possibilidade de venda no mercado secundário antes do vencimento lastreado em créditos imobiliários (CRI) ou em créditos do agronegócio (CRA). Suas rentabilidades são isentas das cobranças de Imposto de Renda e, geralmente, suas rentabilidades são pós-fixada, atreladas ao CDI (Certificado de Depósito Interbancário).'}).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'Tanto o CRI (Certificado de Recebíveis Imobiliários) como o CRA (Certificado de Recebíveis do Agronegócio) são títulos que geram direitos de créditos ao investidor, com prazo e taxa definidos no momento da compra, mas possibilidade de venda no mercado secundário antes do vencimento lastreado em créditos imobiliários (CRI) ou em créditos do agronegócio (CRA). Suas rentabilidades são isentas das cobranças de Imposto de Renda e, geralmente, suas rentabilidades são pós-fixada, atreladas ao CDI (Certificado de Depósito Interbancário).';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

        } else if (res.value.includes('Debênture') || res.value.includes('debênture') || res.value.includes('Debenture') || res.value.includes('debenture') || res.value.includes('DEBENTURE') || res.value.includes('DEBÊNTURE')) {
        botui.message
        .bot({
          delay: 0,
          content: 'As Debêntures são título de crédito privado emitidos por empresas que procuram um financiamento para seus compromissos financeiros. Esses papéis também podem ser negociados no mercado secundário e não contam com a cobrança de Imposto de Renda sobre seus rendimentos. Aplicar em uma debênture é, na prática, emprestar dinheiro para uma companhia com prazo determinado para receber seu dinheiro de volta.'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'As Debêntures são título de crédito privado emitidos por empresas que procuram um financiamento para seus compromissos financeiros. Esses papéis também podem ser negociados no mercado secundário e não contam com a cobrança de Imposto de Renda sobre seus rendimentos. Aplicar em uma debênture é, na prática, emprestar dinheiro para uma companhia com prazo determinado para receber seu dinheiro de volta.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

        } else if (res.value.includes('Renda fixa') || res.value.includes('renda fixa') || res.value.includes('Renda Fixa') || res.value.includes('Rendas fixa') || res.value.includes('rendas fixa') || res.value.includes('Rendas Fixa')) {
          botui.message
          .bot({
            delay: 0,
            content: 'Com o BTG Pactual, você conta com um portfólio diversificado de Renda Fixa, com vários prazos e emissores diferentes para aplicar seu patrimônio de maneira eficiente. Vamos aprender mais sobre renda fixa?'
          }).then(function () {
            return botui.action.button({
              delay: 0,
              action: [{
                text: 'O que é?',
                value: 'o_que_e_rf'
              }, {
                text: 'Quanto rendem os títulos de renda fixa?',
                value: 'rende_rf'
              }, {
                text: 'Quais os riscos para investir?',
                value: 'risco_rf'
              }, {
                text: 'Quais são os tipos de renda fixa?',
                value: 'tipos_rf'
              }]
            })
          })
          .then(function (res) {
            if(res.value == 'o_que_e_rf') {
              oqueeRf()
            }
              else if (res.value == 'rende_rf') {
              rendeRf();
            } else if (res.value == 'risco_rf') {
              riscoRf();
            } else if (res.value == 'tipos_rf') {
              tiposRf();
            }
          }).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Com o BTG Pactual, você conta com um portfólio diversificado de Renda Fixa, com vários prazos e emissores diferentes para aplicar seu patrimônio de maneira eficiente. Vamos aprender mais sobre renda fixa?';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

        } else if (res.value.includes('Renda vari') || res.value.includes('renda vari') || res.value.includes('Renda Vari') || res.value.includes('Rendas vari') || res.value.includes('rendas vari') || res.value.includes('Rendas Vari')) {
          botui.message
          .bot({
            delay: 0,
            content: 'Com esse tipo de investimento, que envolve alguns riscos de mercado específicos, é possível obter um retorno potencialmente maior que o da renda fixa. Vamos aprender mais sobre ela!'
          }).then(function () {
            return botui.action.button({
              delay: 0,
              action: [{
                text: 'O que é?',
                value: 'o_que_e_rv'
              }, {
                text: 'Quanto rende a renda variável?',
                value: 'rende_rv'
              }, {
                text: 'Quais os riscos para investir?',
                value: 'risco_rv'
              }, {
                text: 'Quais são os tipos de renda variável?',
                value: 'tipos_rv'
              }]
            })
          })
          .then(function (res) {
            if(res.value == 'o_que_e_rv') {
              oqueeRv()
            }
              else if (res.value == 'rende_rv') {
              rendeRv();
            } else if (res.value == 'risco_rv') {
              riscoRv();
            } else if (res.value == 'tipos_rv') {
              tiposRv();
            }
          }).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Com esse tipo de investimento, que envolve alguns riscos de mercado específicos, é possível obter um retorno potencialmente maior que o da renda fixa. Vamos aprender mais sobre ela!';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

          } else if ((res.value.includes('O q') || res.value.includes('o q') || res.value.includes('O Q')) && (res.value.includes('Renda vari') || res.value.includes('renda vari') || res.value.includes('Renda Vari') || res.value.includes('Rendas vari') || res.value.includes('rendas vari') || res.value.includes('Rendas Vari') || res.value.includes('RENDA VARI') || res.value.includes('RENDAS VARI'))) {
            botui.message
           .bot({
            delay: 0,
            content: 'Basicamente, investimentos de renda variável são aqueles cujo retorno é imprevisível no momento do investimento. O valor varia conforme as condições do mercado – e, consequentemente, a remuneração que as aplicações oferecem segue esse mesmo princípio.'}).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'Basicamente, investimentos de renda variável são aqueles cujo retorno é imprevisível no momento do investimento. O valor varia conforme as condições do mercado – e, consequentemente, a remuneração que as aplicações oferecem segue esse mesmo princípio.';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

          } else if ((res.value.includes('Rende') || res.value.includes('rende') || res.value.includes('RENDE')) && (res.value.includes('Renda vari') || res.value.includes('renda vari') || res.value.includes('Renda Vari') || res.value.includes('Rendas vari') || res.value.includes('rendas vari') || res.value.includes('Rendas Vari') || res.value.includes('RENDA VARI') || res.value.includes('RENDAS VARI'))) {
            botui.message
            .bot({
            delay: 200,
            content: 'O retorno que ela te derá é bem imprevisível afinal esse valor varia conforme as condições do mercado.'}).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'O retorno que ela te derá é bem imprevisível afinal esse valor varia conforme as condições do mercado.';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

          } else if ((res.value.includes('Risco') || res.value.includes('risco') || res.value.includes('RISCO')) && (res.value.includes('Renda vari') || res.value.includes('renda vari') || res.value.includes('Renda Vari') || res.value.includes('Rendas vari') || res.value.includes('rendas vari') || res.value.includes('Rendas Vari') || res.value.includes('RENDA VARI') || res.value.includes('RENDAS VARI'))) {
            botui.message
           .bot({
            delay: 0,
            content: 'Na renda variável, não existe qualquer tipo de garantia de que o melhor cenário acontecerá, ao passo que, na renda fixa, as condições de remuneração são claramente estabelecidas desde o início.'})
            botui.message
           .bot({
            delay: 200,
            content: 'Pense na bolsa de valores: um dia, o Ibovespa sobe, no outro, cai. Portanto, é necessário estar com os nervos preparados para lidar com a instabilidade do mercado constantemente.'}).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'Na renda variável, não existe qualquer tipo de garantia de que o melhor cenário acontecerá, ao passo que, na renda fixa, as condições de remuneração são claramente estabelecidas desde o início. Pense na bolsa de valores: um dia, o Ibovespa sobe, no outro, cai. Portanto, é necessário estar com os nervos preparados para lidar com a instabilidade do mercado constantemente.';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

          } else if ((res.value.includes('Tipo') || res.value.includes('tipo') || res.value.includes('TIPOS')) && (res.value.includes('Renda vari') || res.value.includes('renda vari') || res.value.includes('Renda Vari') || res.value.includes('Rendas vari') || res.value.includes('rendas vari') || res.value.includes('Rendas Vari') || res.value.includes('RENDA VARI') || res.value.includes('RENDAS VARI'))) {
            botui.message
            .bot({
            delay: 0,
            content: 'Existem diversos produtos disponíveis para investir em renda variável, dos mais simples aos mais sofisticados. Cada um deles têm características próprias de risco e liquidez.'})
            .bot({
            delay: 200,
            content: 'Dentre eles nós temos as ações, Fundos Imobiliários (FIIs), ETFs, Opções, Câmbio, Futuros, Fundos de Investimentos e as criptomoedas.'}).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'Existem diversos produtos disponíveis para investir em renda variável, dos mais simples aos mais sofisticados. Cada um deles têm características próprias de risco e liquidez. Dentre eles nós temos as ações, Fundos Imobiliários (FIIs), ETFs, Opções, Câmbio, Futuros, Fundos de Investimentos e as criptomoedas.';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

        } else if (res.value.includes('Seguro') || res.value.includes('seguro') || res.value.includes('SEGURO')) {
          botui.message
          .bot({
            delay: 0,
            content: 'Proteja seu maior patrimônio, você. Conte com uma assessoria preparada para ajudar no que for preciso na hora de escolher o seguro e a cobertura ideais para as suas necessidades.'
          }).then(function () {
            return botui.action.button({
              delay: 0,
              action: [{
                text: 'Pra quem ele é?',
                value: 'pra_quem_seguro'
              }, {
                text: 'Quais são as vantagens?',
                value: 'vantagens_seguro'
              }]
            })
          })
          .then(function (res) {
            if(res.value == 'pra_quem_seguro') {
              praquemSeguro()
            }
              else if (res.value == 'vantagens_seguro') {
              vantagensSeguro();
            }
          }).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Proteja seu maior patrimônio, você. Conte com uma assessoria preparada para ajudar no que for preciso na hora de escolher o seguro e a cobertura ideais para as suas necessidades.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);
      
      } else if (res.value.includes('Tesouro') || res.value.includes('tesouro') || res.value.includes('TESOURO')) {
      botui.message
      .bot({
        delay: 0,
        content: 'O Tesouro Direto é um dos investimentos mais conhecidos e indicados para o investidor iniciante e para o investidor conservador. Estou aqui para te ajudar a entender tudo sobre ele! O que você deseja aprender?'
      }).then(function () {
        return botui.action.button({
          delay: 0,
          action: [{
            text: 'O que é?',
            value: 'o_que_e_tesouro'
          }, {
            text: 'Quais os riscos para investir?',
            value: 'riscos_tesouro'
          }, {
            text: 'Qual a rentabilidade e quais são os títulos?',
            value: 'rent_tesouro'
          }, {
            text: 'É possível vender antes do vencimento?',
            value: 'vend_tesouro'
          }]
        })
      })
      .then(function (res) {
        if(res.value == 'o_que_e_tesouro') {
          oqueeTesouro()
        }
          else if (res.value == 'riscos_tesouro') {
          riscosTesouro();
        } else if (res.value == 'rent_tesouro') {
          rentabilidadeTesouro();
        } else if (res.value == 'vend_tesouro') {
          venderTesouro();
        }
      }).then(iniciarChat);
      let utter = new SpeechSynthesisUtterance();
      utter.lang = 'pt-BR';
      utter.text = 'O Tesouro Direto é um dos investimentos mais conhecidos e indicados para o investidor iniciante e para o investidor conservador. Estou aqui para te ajudar a entender tudo sobre ele! O que você deseja aprender?';
      utter.volume = 0.5;
      window.speechSynthesis.speak(utter);

    } else if ((res.value.includes('valor') || res.value.includes('Valor') || res.value.includes('calc') || res.value.includes('Calc') || res.value.includes('preço') || res.value.includes('Preço') || res.value.includes('VALOR') || res.value.includes('CALC') || res.value.includes('PREÇO')) && (res.value.includes('Selic') || res.value.includes('selic') || res.value.includes('SELIC'))) {
        botui.message
        .bot({
        delay: 0,
        content: 'A Taxa Selic é definida a cada 45 dias pelo Copom (Comitê de Política Monetária), ligado ao Banco Central, que se baseia em inúmeros indicadores financeiros do país para chegar a uma taxa.'})
        botui.message
        .bot({
        delay: 200,
        content: 'Nessas decisões, a Selic pode tanto se manter estável, sem alterações, quanto aumentar ou diminuir em pontos percentuais.'})
        botui.message
        .bot({
        delay: 300,
        content: 'As mudanças na Taxa Selic acontecem pois a economia não é estável – e, por isso, é preciso adequá-la ao cenário para que exista um equilíbrio e garantir que o dinheiro continue circulando.'}).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'A Taxa Selic é definida a cada 45 dias pelo Copom (Comitê de Política Monetária), ligado ao Banco Central, que se baseia em inúmeros indicadores financeiros do país para chegar a uma taxa. Nessas decisões, a Selic pode tanto se manter estável, sem alterações, quanto aumentar ou diminuir em pontos percentuais. As mudanças na Taxa Selic acontecem pois a economia não é estável – e, por isso, é preciso adequá-la ao cenário para que exista um equilíbrio e garantir que o dinheiro continue circulando.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('Dinheiro') || res.value.includes('dinheiro') || res.value.includes('DINHEIRO')) && (res.value.includes('Selic') || res.value.includes('selic') || res.value.includes('SELIC'))) {
        botui.message
       .bot({
        delay: 0,
        content: 'Os efeitos da mudança da Selic são sentidos por todos os brasileiros, bancos e até investidores estrangeiros. Basicamente:'})
        botui.message
        .bot({
         delay: 200,
         content: 'Se a Taxa Selic diminui: o crédito fica mais acessível já que os bancos tendem a abaixar as taxas de juros e a inflação tende a subir.'})
        botui.message
        .bot({
         delay: 300,
         content: 'Se a Taxa Selic aumenta: os preços tendem a baixar ou ficar estáveis como uma consequência do controle da inflação e os juros de crédito, parcelamento e cheque especial ficam mais altos.'}).then(iniciarChat);
         let utter = new SpeechSynthesisUtterance();
         utter.lang = 'pt-BR';
         utter.text = 'Os efeitos da mudança da Selic são sentidos por todos os brasileiros, bancos e até investidores estrangeiros. Basicamente, Se a Taxa Selic diminui: o crédito fica mais acessível já que os bancos tendem a abaixar as taxas de juros e a inflação tende a subir. Se a Taxa Selic aumenta: os preços tendem a baixar ou ficar estáveis como uma consequência do controle da inflação e os juros de crédito, parcelamento e cheque especial ficam mais altos.';
         utter.volume = 0.5;
         window.speechSynthesis.speak(utter);

        } else if ((res.value.includes('Invest') || res.value.includes('invest') || res.value.includes('INVEST')) && (res.value.includes('Selic') || res.value.includes('selic') || res.value.includes('SELIC'))) {
        botui.message
       .bot({
        delay: 0,
        content: 'Considerando que a Taxa Selic tem forte influência na taxa de remuneração de diversos investimentos, qualquer mudança na Selic impacta a rentabilidade desses produtos financeiros. São eles: Títulos do Tesouro Direto, Caderneta de poupança e Investimentos de Renda Fixa.'}).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Considerando que a Taxa Selic tem forte influência na taxa de remuneração de diversos investimentos, qualquer mudança na Selic impacta a rentabilidade desses produtos financeiros. São eles: Títulos do Tesouro Direto, Caderneta de poupança e Investimentos de Renda Fixa.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('RAB') || res.value.includes('Rab')) && (res.value.includes('rab') || res.value.includes('retorno até a barreira') || res.value.includes('Retorno até a barreira') || res.value.includes('RETORNO ATÉ A BARREIRA'))) {
        botui.message
       .bot({
        delay: 0,
        content: 'Ele se refere a uma estrutura que tem o objetivo de proteger um investidor em relação às quedas da bolsa. De forma simples, ela é montada a partir da compra de ativos no mercado à vista e da aquisição de Opções de compra e venda desses ativos.'})
        botui.message
       .bot({
        delay: 200,
        content: 'Os derivativos servem como proteção. Assim, dependendo da operação estruturada que se monta, é possível não ter riscos ou reduzi-los quando a cotação apresentar queda.'}).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Ele se refere a uma estrutura que tem o objetivo de proteger um investidor em relação às quedas da bolsa. De forma simples, ela é montada a partir da compra de ativos no mercado à vista e da aquisição de Opções de compra e venda desses ativos. Os derivativos servem como proteção. Assim, dependendo da operação estruturada que se monta, é possível não ter riscos ou reduzi-los quando a cotação apresentar queda.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

    } else if (res.value.includes('Selic') || res.value.includes('selic') || res.value.includes('SELIC')) {
      botui.message
      .bot({
        delay: 0,
        content: 'Ela aparece em investimentos, nos jornais, tem um papel importante na economia brasileira e afeta (muito!) sua vida financeira. Saiba mais sobre a Taxa Selic:'
      }).then(function () {
        return botui.action.button({
          delay: 0,
          action: [{
            text: 'O que é?',
            value: 'o_que_e_selic'
          }, {
            text: 'Quem define o valor dessa taxa?',
            value: 'valor_selic'
          }, {
            text: 'Como a Selic afeta o seu dinheiro?',
            value: 'afeta_selic_dinheiro'
          }, {
            text: 'Quais investimentos são afetados pela Selic?',
            value: 'afeta_selic_invest'
          }]
        })
      })
      .then(function (res) {
        if(res.value == 'o_que_e_selic') {
          oqueeSelic()
        }
          else if (res.value == 'valor_selic') {
          valorSelic();
        } else if (res.value == 'afeta_selic_dinheiro') {
          afetadinSelic();
        } else if (res.value == 'afeta_selic_invest') {
          afetainvestSelic();
        }
      }).then(iniciarChat);
      let utter = new SpeechSynthesisUtterance();
      utter.lang = 'pt-BR';
      utter.text = 'Ela aparece em investimentos, nos jornais, tem um papel importante na economia brasileira e afeta (muito!) sua vida financeira. Saiba mais sobre a Taxa Selic:';
      utter.volume = 0.5;
      window.speechSynthesis.speak(utter);

    } else if ((res.value.includes('invest') || res.value.includes('Invest') || res.value.includes('INVEST')) && (res.value.includes('Cdi') || res.value.includes('CDI') || res.value.includes('cdi'))) {
      botui.message
      .bot({
       delay: 0,
       content: 'Existem quatro investimentos principais que são afetados por essa taxa: o CDB, LCI, LCA e LC.'}).then(iniciarChat);
       let utter = new SpeechSynthesisUtterance();
       utter.lang = 'pt-BR';
       utter.text = 'Existem quatro investimentos principais que são afetados por essa taxa: o CDB, LCI, LCA e LC.';
       utter.volume = 0.5;
       window.speechSynthesis.speak(utter);

    } else if ((res.value.includes('dinheiro') || res.value.includes('Dinheiro') || res.value.includes('DINHEIRO')) && (res.value.includes('Cdi') || res.value.includes('CDI') || res.value.includes('cdi'))) {
      botui.message
      .bot({
      delay: 0,
      content: 'Um cidadão comum não pode investir diretamente no CDI – mas os bancos e instituições financeiras usam a Taxa CDI para regular quanto rendem alguns tipos de investimento.'})
      botui.message
      .bot({
      delay: 200,
      content: 'Existem diferentes tipos de investimento no mercado, mas os de renda fixa podem ser divididos em duas categorias:'})
      botui.message
      .bot({
      delay: 300,
      content: 'Pré-fixado: são aqueles em que a taxa de rendimento já é estipulada na hora que o cliente escolhe aquela aplicação.'})
      botui.message
      .bot({
      delay: 400,
      content: 'Pós-fixados: são aqueles definidos no vencimento da aplicação, por um índice de referência.'}).then(iniciarChat);
      let utter = new SpeechSynthesisUtterance();
      utter.lang = 'pt-BR';
      utter.text = 'Um cidadão comum não pode investir diretamente no CDI – mas os bancos e instituições financeiras usam a Taxa CDI para regular quanto rendem alguns tipos de investimento. Existem diferentes tipos de investimento no mercado, mas os de renda fixa podem ser divididos em duas categorias: Pré-fixado: são aqueles em que a taxa de rendimento já é estipulada na hora que o cliente escolhe aquela aplicação. Pós-fixados: são aqueles definidos no vencimento da aplicação, por um índice de referência.';
      utter.volume = 0.5;
      window.speechSynthesis.speak(utter);

    } else if (res.value.includes('Cdi') || res.value.includes('CDI') || res.value.includes('cdi') || res.value.includes('Certificado de depósito interbancário') || res.value.includes('certificado de depósito interbancário') || res.value.includes('Certificado de Depósito Interbancário') || res.value.includes('CERTIFICADO DE DEPÓSITO INTERBANCÁRIO')) {
      botui.message
      .bot({
        delay: 0,
        content: 'Você precisa saber o que é CDI! Afinal, essa sigla pode afetar diretamente as suas economias e investimentos. Pronto para iniciar o seu aprendizado?'
      }).then(function () {
        return botui.action.button({
          delay: 0,
          action: [{
            text: 'O que é?',
            value: 'o_que_e_cdi'
          }, {
            text: 'Por que o CDI afeta o seu dinheiro?',
            value: 'cdi_afeta_dinheiro'
          }, {
            text: 'O CDI afeta quais investimentos?',
            value: 'cdi_afeta_invest'
          }]
        })
      })
      .then(function (res) {
        if(res.value == 'o_que_e_cdi') {
          oqueCdi()
        }
          else if (res.value == 'cdi_afeta_dinheiro') {
          cdiafetaDinheiro();
        } else if (res.value == 'cdi_afeta_invest') {
          cdiafetaInvest();
        }
      }).then(iniciarChat);
      let utter = new SpeechSynthesisUtterance();
      utter.lang = 'pt-BR';
      utter.text = 'Você precisa saber o que é CDI! Afinal, essa sigla pode afetar diretamente as suas economias e investimentos. Pronto para iniciar o seu aprendizado?';
      utter.volume = 0.5;
      window.speechSynthesis.speak(utter);

    } else if (res.value.includes('Fundo') || res.value.includes('fundo') || res.value.includes('FUNDO')) {
      botui.message
      .bot({
        delay: 0,
        content: 'Os fundos são uma modalidade de investimento que reúne recursos financeiros de um conjunto de investidores (cotistas) em uma cesta de ativos, comparando-se a um condomínio. Vamos aprender mais sobre eles?'
      }).then(function () {
        return botui.action.button({
          delay: 0,
          action: [{
            text: 'O que é?',
            value: 'o_que_e_fundos'
          }, {
            text: 'Quais os riscos para investir?',
            value: 'riscos_fundos'
          }, {
            text: 'Quais os tipos de fundos',
            value: 'tipos_fundos'
          }]
        })
      })
      .then(function (res) {
        if(res.value == 'o_que_e_fundos') {
          oqueeFundos()
        }
          else if (res.value == 'riscos_fundos') {
          riscosFundos();
        } else if (res.value == 'tipos_fundos') {
          tiposFundos();
        }
      }).then(iniciarChat);
      let utter = new SpeechSynthesisUtterance();
      utter.lang = 'pt-BR';
      utter.text = 'Os fundos são uma modalidade de investimento que reúne recursos financeiros de um conjunto de investidores (cotistas) em uma cesta de ativos, comparando-se a um condomínio. Vamos aprender mais sobre eles?';
      utter.volume = 0.5;
      window.speechSynthesis.speak(utter);

    } else if (res.value.includes('coe') || res.value.includes('COE') || res.value.includes('Coe') || res.value.includes('Certificado de Operações Estruturadas') || res.value.includes('Certificado de operações estruturadas') || res.value.includes('certificado de operações estruturadas')) {
      botui.message
      .bot({
        delay: 0,
        content: 'A segurança da Renda Fixa com o potencial da Renda Variável. Conheça o COE (Certificado de Operações Estruturadas), produto que oferece diversificação para sua carteira com a proteção da Renda Fixa. O que você deseja aprender sobre eles?'
      }).then(function () {
        return botui.action.button({
          delay: 0,
          action: [{
            text: 'O que é?',
            value: 'o_que_e_coe'
          }, {
            text: 'Pra quem é COE?',
            value: 'pra_quem_coe'
          }, {
            text: 'Quais os riscos de investir em COE?',
            value: 'riscos_coe'
          }, {
            text: 'Quais os tipos de COE?',
            value: 'tipos_coe'
          }]
        })
      })
      .then(function (res) {
        if(res.value == 'o_que_e_coe') {
          oqueeCoe()
        }
          else if (res.value == 'pra_quem_coe') {
          praqueCoe();
        } else if (res.value == 'riscos_coe') {
          riscosCoe();
        } else if (res.value == 'tipos_coe') {
          tiposCoe();
        }
      }).then(iniciarChat);
      let utter = new SpeechSynthesisUtterance();
      utter.lang = 'pt-BR';
      utter.text = 'A segurança da Renda Fixa com o potencial da Renda Variável. Conheça o COE (Certificado de Operações Estruturadas), produto que oferece diversificação para sua carteira com a proteção da Renda Fixa. O que você deseja aprender sobre eles?';
      utter.volume = 0.5;
      window.speechSynthesis.speak(utter);

    } else if (res.value.includes('câmbio') || res.value.includes('Câmbio') || res.value.includes('Cambio') || res.value.includes('cambio') || res.value.includes('CAMBIO') || res.value.includes('CÂMBIO')) {
      botui.message
      .bot({
        delay: 0,
        content: 'Conte com uma estrutura padrão BTG para realizar pagamentos e recebimentos do exterior de maneira rápida e segura. Pronto para aprender mais sobre câmbio?'
      }).then(function () {
        return botui.action.button({
          delay: 0,
          action: [{
            text: 'O que é?',
            value: 'o_que_e_cambio'
          }, {
            text: 'Recebimento Internacional',
            value: 'recebimento_internacional'
          }, {
            text: 'Pagamentos Internacionais',
            value: 'pagamentos_internacionais'
          }, {
            text: 'Comércio Exterior',
            value: 'comercio_exterior'
          }, {
            text: 'Vantagens BTG Pactual',
            value: 'vant_btg_pactual'
          }]
        })
      })
      .then(function (res) {
        if(res.value == 'o_que_e_cambio') {
          oqueeCambio()
        }
          else if (res.value == 'recebimento_internacional') {
          recebimentoInternacional();
        } else if (res.value == 'pagamentos_internacionais') {
          pagamentosInternacionais();
        } else if (res.value == 'comercio_exterior') {
          comercioExterior();
        } else if (res.value == 'vant_btg_pactual') {
          vantCambio();
        }
      }).then(iniciarChat);
      let utter = new SpeechSynthesisUtterance();
      utter.lang = 'pt-BR';
      utter.text = 'Conte com uma estrutura padrão BTG para realizar pagamentos e recebimentos do exterior de maneira rápida e segura. Pronto para aprender mais sobre câmbio?';
      utter.volume = 0.5;
      window.speechSynthesis.speak(utter);

    } else if (res.value.includes('tranf') || res.value.includes('Tranf') || res.value.includes('Custódia') || res.value.includes('custódia') || res.value.includes('Custodia') || res.value.includes('custodia') || res.value.includes('TRANSF') || res.value.includes('CUSTÓDIA') || res.value.includes('CUSTODIA')) {
      botui.message
      .bot({
        delay: 0,
        content: 'Saiba como transferir recursos e custódia para o BTG Pactual digital. Nós não temos tarifa para abertura, manutenção de conta e TED para retiradas. Quer transferir? Veja como é fácil!'
      }).then(function () {
        return botui.action.button({
          delay: 0,
          action: [{
            text: 'Transferências de Recursos',
            value: 'tranferencia_recursos'
          }, {
            text: 'Como transfiro minha custódia de outra corretora para o BTG Pactual Digital?',
            value: 'trasf_cust_btg'
          }, {
            text: 'Como faço transferência de custódia do BTG Pactual Digital para outras instituições financeiras?',
            value: 'transf_cust_other'
          }, {
            text: 'Qual a diferença entre STA e OTA?',
            value: 'dif_sta_ota'
          }]
        })
      })
      .then(function (res) {
        if(res.value == 'tranferencia_recursos') {
          transfRecursos()
        } else if (res.value == 'trasf_cust_btg') {
          transfCustBTG();
        } else if (res.value == 'transf_cust_other') {
          transfCustother();
        } else if (res.value == 'dif_sta_ota') {
          difSta();
        }
      }).then(iniciarChat);
      let utter = new SpeechSynthesisUtterance();
      utter.lang = 'pt-BR';
      utter.text = 'Saiba como transferir recursos e custódia para o BTG Pactual digital. Nós não temos tarifa para abertura, manutenção de conta e TED para retiradas. Quer transferir? Veja como é fácil!';
      utter.volume = 0.5;
      window.speechSynthesis.speak(utter);

    } else if (res.value.includes('previdência') || res.value.includes('Previdência') || res.value.includes('previdencia') || res.value.includes('Previdencia') || res.value.includes('PREVIDENCIA') || res.value.includes('PREVIDÊNCIA')) {
      botui.message
      .bot({
        delay: 0,
        content: 'Conte com os benefícios fiscais e um sistema multifundos de previdência privada no BTG Pactual digital. Pronto para os meus ensinamentos?'
      }).then(function () {
        return botui.action.button({
          delay: 0,
          action: [{
            text: 'O que é?',
            value: 'o_que_e_prev'
          }, {
            text: 'Como ela funciona?',
            value: 'como_funciona_prev'
          }, {
            text: 'PGBL & VGBL',
            value: 'pgbl_vgbl'
          }, {
            text: 'O que é portabilidade?',
            value: 'o_que_e_port_prev'
          }]
        })
      }).then(function (res) {
        if(res.value == 'o_que_e_prev') {
          oqueePrev()
        }
          else if (res.value == 'como_funciona_prev') {
          comofuncionaPrev();
        } else if (res.value == 'pgbl_vgbl') {
          pgblVgbl();
        } else if (res.value == 'o_que_e_port_prev') {
          oqueePortprev();
        }
      }).then(iniciarChat);
      let utter = new SpeechSynthesisUtterance();
      utter.lang = 'pt-BR';
      utter.text = 'Conte com os benefícios fiscais e um sistema multifundos de previdência privada no BTG Pactual digital. Pronto para os meus ensinamentos?';
      utter.volume = 0.5;
      window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('mesa') || res.value.includes('Mesa')) && (res.value.includes('renda vari') || res.value.includes('Renda Vari') || res.value.includes('Renda vari'))) {
        botui.message
        .bot({
          delay: 0,
          content: 'Com a equipe de research da mesa de renda variável você acessa todo o potencial da Mesa de Operações e de Análises do BTG Pactual. Nela você poderá contar com profissionais especialistas e com atendimento assertivo, estratégias personalizadas para o seu perfil investidor​ e ainda fica por dentro das oportunidades do mercado ideais para você.​'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Com a equipe de research da mesa de renda variável você acessa todo o potencial da Mesa de Operações e de Análises do BTG Pactual. Nela você poderá contar com profissionais especialistas e com atendimento assertivo, estratégias personalizadas para o seu perfil investidor​ e ainda fica por dentro das oportunidades do mercado ideais para você.​';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('Taxa') || res.value.includes('taxa') || res.value.includes('TAXA') || res.value.includes('preço') || res.value.includes('Preço') || res.value.includes('PREÇO') || res.value.includes('CUST') || res.value.includes('Cust') || res.value.includes('cust')) && (res.value.includes('conta') || res.value.includes('Conta') || res.value.includes('CONTA'))) {
        botui.message
        .bot({
          delay: 0,
          content: 'Ao abrir conta no BTG Pactual digital você não paga taxas. Zero de abertura e manutenção.'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Ao abrir conta no BTG Pactual digital você não paga taxas. Zero de abertura e manutenção.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('Taxa') || res.value.includes('taxa') || res.value.includes('TAXA') || res.value.includes('preço') || res.value.includes('Preço') || res.value.includes('PREÇO') || res.value.includes('CUST') || res.value.includes('Cust') || res.value.includes('cust')) && (res.value.includes('TED') || res.value.includes('ted') || res.value.includes('Ted'))) {
        botui.message
        .bot({
          delay: 0,
          content: 'Nós não cobramos taxas para você realizar a transferência dos seus recursos para outros bancos.'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Nós não cobramos taxas para você realizar a transferência dos seus recursos para outros bancos.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('O q') || res.value.includes('o q') || res.value.includes('O Q')) && (res.value.includes('TED') || res.value.includes('Ted') || res.value.includes('ted'))) {
        botui.message
        .bot({
          delay: 0,
          content: 'Transferência eletrônica, transferência bancária ou transferência de crédito é um método de transferência eletrônica de fundos de uma pessoa ou entidade para outra.'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Transferência eletrônica, transferência bancária ou transferência de crédito é um método de transferência eletrônica de fundos de uma pessoa ou entidade para outra.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);
           
      } else if (res.value.includes('trabalh') || res.value.includes('emprego') || res.value.includes('vaga') || res.value.includes('Trabalh') || res.value.includes('Emprego') || res.value.includes('Vaga') || res.value.includes('TRABALH') || res.value.includes('EMPREGO') || res.value.includes('VAGA')) {
        botui.message
        .bot({
          delay: 0,
          content: 'Que legal! Será uma honra ter você conosco! Envie o seu currículo para venhaparacordier@cordierinvest.com.br'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Que legal! Será uma honra ter você conosco! Envie o seu currículo para venhaparacordier@cordierinvest.com.br';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if (res.value.includes('carteira') || res.value.includes('Carteira') || res.value.includes('CARTEIRA')) {
        botui.message
        .bot({
          delay: 0,
          content: 'Você pode acessar as carteiras recomendadas pelo BTG Pactual por aqui!'})
          botui.message.add({
            type: 'html',
            content:'<iframe src="https://www.btgpactualdigital.com/analises/carteiras-recomendadas" style="height:380px ; width:100%; "></iframe>'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Você pode acessar as carteiras recomendadas pelo BTG Pactual por aqui!';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if (res.value.includes('conta') || res.value.includes('Conta') || res.value.includes('CONTA')) {
        botui.message
        .bot({
          delay: 0,
          content: 'Fico feiz que você tenha se interessado em se juntar ao maior banco de investimentos da América Latina!'})
          botui.message.add({
            type: 'html',
            content:'<iframe src="https://www.btgpactualdigital.com/analises/carteiras-recomendadas" style="height:380px ; width:100%; "></iframe>'}).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'Claro, fico feiz que você tenha se interessado em se juntar ao maior banco de investimentos da América Latina!';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

      } else if (res.value.includes('carteiras recomendada') || res.value.includes('Carteiras Recomendada') || res.value.includes('carteira recomendada') || res.value.includes('Carteira recomendada') || res.value.includes('CARTEIRA RECOMENDADA') || res.value.includes('CARTEIRAS RECOMENDADA') || res.value.includes('carteiras recomendada') || res.value.includes('Carteiras Recomendada')) {
        botui.message
        .bot({
          delay: 0,
          content: 'Você pode acessar as carteiras recomendadas pelo BTG Pactual por aqui!'})
          botui.message.add({
            type: 'html',
            content:'<iframe src="https://www.btgpactualdigital.com/analises/carteiras-recomendadas" style="height:380px ; width:100%; "></iframe>'}).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'Você pode acessar as carteiras recomendadas pelo BTG Pactual por aqui!';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

      } else if (res.value.includes('Trad') || res.value.includes('trad') || res.value.includes('TRAD')) {
        botui.message
        .bot({
          delay: 0,
          content: 'Você quer ganhar dinheiro com operações de curto prazo, independente do mercado estar em alta ou queda? Venha aprender mais trade!'
        }).then(function () {
          return botui.action.button({
            delay: 0,
            action: [{
              text: 'O que é trade?',
              value: 'o_que_e_trade'
            }, {
              text: 'Como ser um trader?',
              value: 'comoutilizar_trade'
            }, {
              text: 'Qual o custo?',
              value: 'custo_trade'
            }, {
              text: 'Quais são os horários para realizar a estratégia Day Trade?',
              value: 'horario_trade'
            }, {
              text: 'Área do trader BTG Pactual',
              value: 'area_trader'
            }]
          })
        })
        .then(function (res) {
          if(res.value == 'o_que_e_trade') {
            oqueeTrade()
          }
            else if (res.value == 'comoutilizar_trade') {
            comoutilizarTrade();
          } else if (res.value == 'custo_trade') {
            custosTrade();
          } else if (res.value == 'horario_trade') {
            horarioTrade();
          } else if (res.value == 'area_trader') {
            areaTrader();
          }
        }).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Você quer ganhar dinheiro com operações de curto prazo, independente do mercado estar em alta ou queda? Venha aprender mais trade!';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('O q') || res.value.includes('O Q') || res.value.includes('o q')) && (res.value.includes('liquidez') || res.value.includes('Liquidez'))) {
        botui.message
        .bot({
        delay: 0,
        content: 'Liquidez se refere à facilidade ou não de se converter um ativo, seja financeiro ou físico, em moeda pronta para ser movimentada.'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Liquidez se refere à facilidade ou não de se converter um ativo, seja financeiro ou físico, em moeda pronta para ser movimentada.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('O q') || res.value.includes('O Q') || res.value.includes('o q')) && (res.value.includes('Call') || res.value.includes('call') || res.value.includes('CALL') || res.value.includes('Put') || res.value.includes('put') || res.value.includes('PUT') || res.value.includes('Opções') || res.value.includes('opções') || res.value.includes('OPÇÕES'))) {
        botui.message
        .bot({
        delay: 0,
        content: 'Opções são instrumentos que conferem a seus titulares o direito de comprar (Call) ou vender (Put) um ativo em uma data futura por um preço predeterminado.'})
        botui.message
        .bot({
        delay: 200,
        content: 'Desconsiderando outros fatores que impactam a precificação das opções, Calls ficam mais caras à medida que o ativo base se valorize, enquanto Puts se beneficiam de um cenário de queda.'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Opções são instrumentos que conferem a seus titulares o direito de comprar (Call) ou vender (Put) um ativo em uma data futura por um preço predeterminado. Desconsiderando outros fatores que impactam a precificação das opções, Calls ficam mais caras à medida que o ativo base se valorize, enquanto Puts se beneficiam de um cenário de queda.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('O q') || res.value.includes('O Q') || res.value.includes('o q')) && (res.value.includes('rentabilidade') || res.value.includes('Rentabilidade'))) {
        botui.message
        .bot({
          delay: 0,
          content: 'A rentabilidade se refere ao ganho, geralmente em porcentagem, que o investidor obtém sobre o capital aplicado.'}).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'A rentabilidade se refere ao ganho, geralmente em porcentagem, que o investidor obtém sobre o capital aplicado.';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('ótim') || res.value.includes('excelente') || res.value.includes('bem') || res.value.includes('bom') || res.value.includes('perfeit') || res.value.includes('maravi') || res.value.includes('paz') || res.value.includes('certo') || res.value.includes('sim') || res.value.includes('Ótim') || res.value.includes('Excelente') || res.value.includes('Bem') || res.value.includes('Bom') || res.value.includes('Perfeit') || res.value.includes('Maravi') || res.value.includes('Paz') || res.value.includes('Certo') || res.value.includes('Sim') || res.value.includes('ok') || res.value.includes('Ok') || res.value.includes('Legal') || res.value.includes('Top') || res.value.includes('legal') || res.value.includes('top') || res.value.includes('beleza') || res.value.includes('Beleza') || res.value.includes('Blz') || res.value.includes('blz') || res.value.includes('Otim') || res.value.includes('otim') || res.value.includes('ÓTIMO') || res.value.includes('EXCELENTE') || res.value.includes('BEM') || res.value.includes('BOM') || res.value.includes('PERFEIT') || res.value.includes('MARAVI') || res.value.includes('PAZ') || res.value.includes('CERTO') || res.value.includes('SIM'))) {
        botui.message
        .bot({
          delay: 0,
          content: 'Deixa eu verificar... sistemas funcionando normalmente, tudo em seu devido lugar... é, eu estou bem sim. Obrigado por perguntar!'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR'; 
          utter.text = 'Deixa eu verificar... sistemas funcionando normalmente, tudo em seu devido lugar... é, eu estou bem sim. Obrigado por perguntar!';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if (res.value.includes('ótim') || res.value.includes('excelente') || res.value.includes('bem') || res.value.includes('bom') || res.value.includes('perfeit') || res.value.includes('maravi') || res.value.includes('paz') || res.value.includes('certo') || res.value.includes('sim') || res.value.includes('Ótim') || res.value.includes('Excelente') || res.value.includes('Bem') || res.value.includes('Bom') || res.value.includes('Perfeit') || res.value.includes('Maravi') || res.value.includes('Paz') || res.value.includes('Certo') || res.value.includes('Sim') || res.value.includes('ok') || res.value.includes('Ok') || res.value.includes('Legal') || res.value.includes('Top') || res.value.includes('legal') || res.value.includes('top') || res.value.includes('beleza') || res.value.includes('Beleza') || res.value.includes('Blz') || res.value.includes('blz') || res.value.includes('Otim') || res.value.includes('otim')) {
        botui.message
        .bot({
          delay: 0,
          content: 'Perfeito! Como eu posso te ajudar?'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Perfeito! Como eu posso te ajudar?';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if (res.value.includes('não') || res.value.includes('péssim') || res.value.includes('horr') || res.value.includes('ruim') || res.value.includes('mau') || res.value.includes('lixo') || res.value.includes('negativo') || res.value.includes('Não') || res.value.includes('Péssim') || res.value.includes('Horr') || res.value.includes('Ruim') || res.value.includes('Mau') || res.value.includes('Lixo') || res.value.includes('Negativo') || res.value.includes('nada') || res.value.includes('Nada') || res.value.includes('NÃO') || res.value.includes('PÉSSIM') || res.value.includes('HORR') || res.value.includes('RUIM') || res.value.includes('MAU') || res.value.includes('LIXO') || res.value.includes('NEGATIVO')) {
        botui.message
        .bot({
          delay: 0,
          content: 'Poxa! Como posso te ajudar? 😞'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Poxa! Como eu posso te ajudar?';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if (res.value.includes('é você') || res.value.includes('é vc') || res.value.includes('seu nome') || res.value.includes('É você') || res.value.includes('É vc') || res.value.includes('Seu nome') || res.value.includes('É VOCÊ') || res.value.includes('É VC') || res.value.includes('SEU NOME')){
        botui.message
        .bot({
          delay: 0,
          content: 'Eu sou o MarlonBot e eu estou aqui para te ajudar com o mercado financeiro. Você pode me perguntar qualquer coisa, ok?'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Eu sou o MarlonBot e eu estou aqui para te ajudar com o mercado financeiro. Você pode me perguntar qualquer coisa, ok?';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('baix') || res.value.includes('Baix') || res.value.includes('download') || res.value.includes('Download') || res.value.includes('instal') || res.value.includes('Instal') || res.value.includes('BAIX') || res.value.includes('DOWNLOAD') || res.value.includes('INSTAL')) && (res.value.includes('aplica') || res.value.includes('Aplica') || res.value.includes('app') || res.value.includes('APP') || res.value.includes('App') || res.value.includes('APLICA'))){
        botui.message
        .bot({
          delay: 0,
          content: 'Excelente! Qual é o sistema operacional do seu dispositivo?'
        }).then(function () {
          return botui.action.button({
            delay: 0,
            action: [{
              text: 'Android',
              icon: 'android',
              value: 'baixar_android'
            }, {
              text: 'iOS',
              icon: 'apple',
              value: 'baixar_ios'
            }]
          })
        })
        .then(function (res) {
          if(res.value == 'baixar_android') {
            baixarAndroid()
          }
            else if (res.value == 'baixar_ios') {
            baixarIos();
          }
        }).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Excelente! Qual é o sistema operacional do seu dispositivo?';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('você') || res.value.includes('vc') || res.value.includes('Você') || res.value.includes('Vc') || res.value.includes('VOCÊ') || res.value.includes('VC')) && (res.value.includes('Faz') || res.value.includes('faz') || res.value.includes('fzr') || res.value.includes('FAZ') || res.value.includes('FZR'))){
        botui.message
        .bot({
          delay: 0,
          content: 'Meu objetivo é te auxiliar tanto com o mercado financeiro quanto com as suas tarefas diárias. Logo você pode me perguntar ou pedir qualquer coisa relacionada à ambos e eu irei te ajudar!'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Meu objetivo é te auxiliar tanto com o mercado mercado financeiro quanto com as suas tarefas diárias. Logo você pode me perguntar ou pedir qualquer coisa relacionada à ambos e eu irei te ajudar!';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('O q') || res.value.includes('o q') || res.value.includes('O Q')) && (res.value.includes('btg') || res.value.includes('BTG'))){
        botui.message
        .bot({
          delay: 0,
          content: 'O BTG Pactual é o maior banco de investimentos da América Latina, atuando no mercado desde 1983, crescendo cada vez mais e ganhando novos prêmios.'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'O BTG Pactual é o maior banco de investimentos da América Latina, atuando no mercado desde 1983, crescendo cada vez mais e ganhando novos prêmios.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

        } else if ((res.value.includes('O q') || res.value.includes('o q') || res.value.includes('O Q')) && (res.value.includes('btg') || res.value.includes('BTG')) && (res.value.includes('digital') || res.value.includes('Digital') || res.value.includes('DIGITAL'))){
          botui.message
          .bot({
            delay: 0,
            content: 'O BTG Pactual digital é uma plataforma 100% digital, ligada ao BTG Pactual que trabalha com diversos tipos de investimentos – renda fixa, renda variável, fundos de investimentos, previdência e muito mais.'}).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'O BTG Pactual digital é uma plataforma 100 por cento digital, ligada ao BTG Pactual que trabalha com diversos tipos de investimentos – renda fixa, renda variável, fundos de investimentos, previdência e muito mais.';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

        } else if ((res.value.includes('Segur') || res.value.includes('segur') || res.value.includes('SEGUR') || res.value.includes('Conf') || res.value.includes('conf') || res.value.includes('CONF')) && (res.value.includes('btg') || res.value.includes('BTG')) && (res.value.includes('digital') || res.value.includes('Digital') || res.value.includes('DIGITAL'))){
          botui.message
          .bot({
            delay: 0,
            content: 'Sim, é! O BTG Pactual digital é o Maior Banco de Investimentos da América Latina e considerado o melhor gestor de fortunas do Brasil em 2018 de acordo com a World Finance, Melhor Banco especializado do país no ranking da Revista IstoÉ Dinheiro em 2018 e três anos consecutivos como a Melhor Equipe de Research do Brasil pela Institucional Investor.'}).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'Sim, é! O BTG Pactual digital é o Maior Banco de Investimentos da América Latina e considerado o melhor gestor de fortunas do Brasil em 2018 de acordo com a World Finance, Melhor Banco especializado do país no ranking da Revista IstoÉ Dinheiro em 2018 e três anos consecutivos como a Melhor Equipe de Research do Brasil pela Institucional Investor.';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('Q') || res.value.includes('q')) && (res.value.includes('assessor') || res.value.includes('Assessor'))) {
        botui.message
        .bot({
          delay: 0,
          content: 'O assessor de investimentos é um profissional responsável pela captação de clientes para investimento na bolsa de valores, prestando assessoria no mercado de capitais. Ele também identifica o perfil de investidor, estuda viabilidades, elabora estratégia de investimentos e auxilia na tomada de decisões.'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'O assessor de investimentos é um profissional responsável pela captação de clientes para investimento na bolsa de valores, prestando assessoria no mercado de capitais. Ele também identifica o perfil de investidor, estuda viabilidades, elabora estratégia de investimentos e auxilia na tomada de decisões.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('O q') || res.value.includes('o q') || res.value.includes('O Q')) && (res.value.includes('título') || res.value.includes('Título') || res.value.includes('titulo') || res.value.includes('Titulo'))) {
        botui.message
        .bot({
          delay: 0,
          content: 'Títulos são emitidos por empresas ou governos como forma de ajuda financeira para vários projetos. Por exemplo, se uma companhia aérea quer comprar novos aviões, ela pode emitir títulos para pedir dinheiro emprestado de investidores no mercado.'})
        botui.message
        .bot({
          delay: 200,
          content: 'O investidor que compra um título está emprestando dinheiro para empresas ou governo a uma taxa de juro fixa.'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Títulos são emitidos por empresas ou governos como forma de ajuda financeira para vários projetos. Por exemplo, se uma companhia aérea quer comprar novos aviões, ela pode emitir títulos para pedir dinheiro emprestado de investidores no mercado. O investidor que compra um título está emprestando dinheiro para empresas ou governo a uma taxa de juro fixa.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);
      
      } else if (res.value.includes('tchau') || res.value.includes('até mais') || res.value.includes('falou') || res.value.includes('até amanhã') || res.value.includes('até mais tarde') || res.value.includes('flw') || res.value.includes('bye') || res.value.includes('Tchau') || res.value.includes('Até mais') || res.value.includes('Falou') || res.value.includes('Até amanhã') || res.value.includes('Até mais tarde') || res.value.includes('Flw') || res.value.includes('Bye') || res.value.includes('TCHAU') || res.value.includes('ATÉ MAIS') || res.value.includes('FALOU') || res.value.includes('FLW') || res.value.includes('BYE') || res.value.includes('ATÉ AMANHÃ') || res.value.includes('ATÉ MAIS AMANHÃ')) {
        botui.message
        .bot({
          delay: 0,
          content: 'Até mais!'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Até mais!';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);
      
      } else if (res.value.includes('cri') || res.value.includes('progra') || res.value.includes('marlon') || res.value.includes('Marlon') || res.value.includes('é ele') || res.value.includes('CRI') || res.value.includes('PROGRA') || res.value.includes('MARLON') || res.value.includes('É ELE')){
        botui.message
        .bot({
          delay: 0,
          content: 'O meu criador se chama Marlon de Oliveira Meth.'})
        botui.message
        .bot({
          delay: 200,
          content: 'Vou deixar o Linkedin dele aqui para que você possa conhecê-lo: https://www.linkedin.com/in/marlon-de-oliveira-meth-907134188/'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'O meu criador se chama Marlon de Oliveira Meth. Vou deixar o Linkedin dele aqui para que você possa conhecê-lo.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      }	else if(res.value.includes('ceo') || res.value.includes('pablo piñuelo') || res.value.includes('CEO') || res.value.includes('Pablo Piñuelo') || res.value.includes('PABLO PIÑUELO')){
      botui.message
      .bot({
        delay: 0,
        content: 'Pablo Piñuelo é o CEO da Cordier.' }).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Pablo Piñuelo é o CEO da Cordier.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);
		
      } else if (res.value.includes('cfo') || res.value.includes('marcel góes') || res.value.includes('CFO') || res.value.includes('Marcel Góes') || res.value.includes('MARCEL GÓES') || res.value.includes('Marcel Goes') || res.value.includes('MARCEL GOES') || res.value.includes('marcel goes')){
      botui.message
      .bot({
        delay: 0,
        content: 'Marcel Góes é o CFO da Cordier.' }).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Marcel Góes é o CFO da Cordier.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);
		
      } else if (res.value.includes('coo') || res.value.includes('daniel quintas') || res.value.includes('COO') || res.value.includes('Daniel Quintas') || res.value.includes('DANIEL QUINTAS')){
      botui.message
      .bot({
        delay: 0,
        content: 'Daniel Quintas é o COO da Cordier.' }).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Daniel Quintas é o COO da Cordier.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if (res.value.includes('etf') || res.value.includes('ETF')){
        botui.message
        .bot({
          delay: 0,
          content: 'Fundos de Índices, mais conhecidos como ETFs (na sigla em inglês), funcionam de forma semelhante aos fundos mútuos, mas suas taxas de investimento iniciais e contínuas são, geralmente, mais baixas.' })
          botui.message
          .bot({
            delay: 200,
            content: 'Uma razão para isso é que a maioria dos ETFs simplesmente segue um índice, ou seja, um pedaço do mercado de ações.' }).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'Fundos de Índices, mais conhecidos como ETFs (na sigla em inglês), funcionam de forma semelhante aos fundos mútuos, mas suas taxas de investimento iniciais e contínuas são, geralmente, mais baixas. Uma razão para isso é que a maioria dos ETFs simplesmente segue um índice, ou seja, um pedaço do mercado de ações.';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);
        
      } else if (res.value.includes('cdbo') || res.value.includes('leonardo disenha') || res.value.includes('CDBO') || res.value.includes('Leonardo Disenha') || res.value.includes('LEONARDO DISENHA')){
      botui.message
      .bot({
        delay: 0,
        content: 'Leonardo Disenha é o CDBO da Cordier.' }).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Leonardo Disenha é o CDBO da Cordier.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('q')|| res.value.includes('Q')) && (res.value.includes('recomenda') || res.value.includes('Recomenda') || res.value.includes('RECOMENDA'))) {
        botui.message
        .bot({
          delay: 0,
          content: 'Abaixo você verá quais são as ações recomendadas pela nossa equipe de research.' })
          botui.message
            .bot({
            delay: 200,
            content:'Além disso, em breve um dos nossos assessores irá entrar em contato com você e te indicará as melhores ações do mercado!'})
            botui.message.add({
              type: 'html',
              content:'<iframe src="https://www.btgpactualdigital.com/analises/carteiras-recomendadas" style="height:380px ; width:100%; "></iframe>'}).then(iniciarChat);
              let utter = new SpeechSynthesisUtterance();
              utter.lang = 'pt-BR';
              utter.text = 'Abaixo você verá quais são as ações recomendadas pela nossa equipe de research. Além disso, em breve um dos nossos assessores irá entrar em contato com você e te indicará as melhores ações do mercado!';
              utter.volume = 0.5;
              window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('O q') || res.value.includes('o q') || res.value.includes('O Q')) && (res.value.includes('Home Broker') || res.value.includes('Home broker') || res.value.includes('home broker') || res.value.includes('HOME BROKER') || res.value.includes('HomeBroker') || res.value.includes('Homebroker') || res.value.includes('homebroker') || res.value.includes('HOMEBROKER'))){
        botui.message
        .bot({
          delay: 0,
          content: 'O home broker é o principal meio de acesso à bolsa de valores. Por meio dele, você pode negociar ativos, como ações, de qualquer lugar do mundo. Basta ter acesso à internet.' }).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'O home broker é o principal meio de acesso à bolsa de valores. Por meio dele, você pode negociar ativos, como ações, de qualquer lugar do mundo. Basta ter acesso à internet.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if(res.value.includes('back office') || res.value.includes('Back Office') || res.value.includes('backoffice') || res.value.includes('BackOffice') || res.value.includes('BACKOFFICE')){
      botui.message
      .bot({
        delay: 0,
        content: 'A equipe do Back Office da Cordier é responsável por sanar as enventuais dúvidas que um cliente poderia ter, além de auxilar na abertura de contas e prestar assistências. Ela é composta por Leandro Nogueira, Thainan Barbosa, Thirso Neto, Tulio Souza e Jayne Ruivo.'}).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'A equipe do Back Office da Cordier é responsável por sanar as enventuais dúvidas que um cliente poderia ter, além de auxilar na abertura de contas e prestar assistências. Ela é composta por Leandro Nogueira, Thainan Barbosa, Thirso Neto, Tulio Souza e Jayne Ruivo.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if((res.value.includes('Quais') || res.value.includes('Quem') || res.value.includes('quais') || res.value.includes('quem') || res.value.includes('QUAIS') || res.value.includes('QUEM')) && (res.value.includes('são os assessores') || res.value.includes('SÃO OS ASSESSORES'))){
      botui.message
      .bot({
        delay: 0,
        content: 'A equipe de assessores da Cordier é composta por Fábio Sola, Karina Choi, Camila Stelzer, Guilherme Lima, Vinicius Passaro, Débora Toledo, Stephanie Almeida, Leonardo Rocha, Gustavo Pedroso, Otto Salewki, Giancarlo Mutinari, Edson Santos e Antoniel Silva.'}).then(iniciarChat);
        utter.lang = 'pt-BR';
        utter.text = 'A equipe de assessores da Cordier é composta por Fábio Sola, Karina Choi, Camila Stelzer, Guilherme Lima, Vinicius Passaro, Débora Toledo, Stephanie Almeida, Leonardo Rocha, Gustavo Pedroso, Otto Salewki, Giancarlo Mutinari, Edson Santos e Antoniel Silva.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if(res.value.includes('falar com') || res.value.includes('Falar com') || res.value.includes('conversar com') || res.value.includes('Conversar com') || res.value.includes('FALAR COM') || res.value.includes('CONVERSAR COM')){
        botui.message
        .bot({
          delay: 0,
          content: 'Os seus dados já foram computados e em breve um dos nossos assessores irá entrar em contato com você, mas caso você queira agilizar o processo ligue para a gente ou preencha o seguinte formulário:'})
            botui.message.add({
              type: 'html',
              content:'<iframe src="https://cordierinvestimentos.com.br/contato/" style="height:380px ; width:100%; "></iframe>'}).then(iniciarChat);
              utter.lang = 'pt-BR';
              utter.text = 'Os seus dados já foram computados e em breve um dos nossos assessores irá entrar em contato com você, mas caso você queira agilizar o processo ligue para a gente ou preencha o seguinte formulário.';
              utter.volume = 0.5;
              window.speechSynthesis.speak(utter);
      
      } else if(res.value.includes('cordier') || res.value.includes('Cordier') || res.value.includes('CORDIER')){
      botui.message
      .bot({
        delay: 0,
        content: 'Queremos te ajudar a realizar seus sonhos. Nós somos Assessores de Investimentos do Banco BTG Pactual e buscamos a excelência no atendimento ao cliente todos os dias.'}).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Queremos te ajudar a realizar seus sonhos. Nós somos Assessores de Investimentos do Banco BTG Pactual e buscamos a excelência no atendimento ao cliente todos os dias.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if (res.value.includes('perfil') || res.value.includes('Perfil') || res.value.includes('PERFIL')){
        botui.message
        .bot({
          delay: 0,
          content: 'Vamos lá!' }).then(perfilInvestidor);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Vamos lá!';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);
      
      } else if (res.value.includes('força esteja') || res.value.includes('FORÇA ESTEJA') || res.value.includes('Força esteja')){
      botui.message
      .bot({
        delay: 0,
        content: 'Que a força também esteja com você!' }).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Que a força também esteja com você!';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('o q') || res.value.includes('O Q') || res.value.includes('O q')) && (res.value.includes('Bitcoin') || res.value.includes('bitcoin') || res.value.includes('BITCOIN'))){
        botui.message
        .bot({
          delay: 0,
          content: 'Bitcoin é uma criptomoeda descentralizada, sendo um dinheiro eletrônico para transações ponto-a-ponto.' }).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Bitcoin é uma criptomoeda descentralizada, sendo um dinheiro eletrônico para transações ponto-a-ponto.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('o q') || res.value.includes('O Q') || res.value.includes('O q')) && (res.value.includes('Criptomoeda') || res.value.includes('criptomoeda') || res.value.includes('CRIPTOMOEDA'))){
        botui.message
        .bot({
          delay: 0,
          content: 'Uma criptomoeda ou cibermoeda é um meio de troca, podendo ser centralizado ou descentralizado que se utiliza da tecnologia de blockchain e da criptografia para assegurar a validade das transações e a criação de novas unidades da moeda.' }).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Uma criptomoeda ou cibermoeda é um meio de troca, podendo ser centralizado ou descentralizado que se utiliza da tecnologia de blockchain e da criptografia para assegurar a validade das transações e a criação de novas unidades da moeda.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('o q') || res.value.includes('O Q') || res.value.includes('O q')) && (res.value.includes('blockchain') || res.value.includes('Blockchain') || res.value.includes('BLOCKCHAIN'))){
        botui.message
        .bot({
        delay: 0,
        content: 'O blockchain é um serviço que faz a exploração de criptomoedas, bem como uma carteira de criptomoeda e uma bolsa de criptomoeda compatível com Bitcoin, Bitcoin Cash e Ethereum.' }).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'O blockchain é um serviço que faz a exploração de criptomoedas, bem como uma carteira de criptomoeda e uma bolsa de criptomoeda compatível com Bitcoin, Bitcoin Cash e Ethereum.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if ((res.value.includes('o q') || res.value.includes('O Q') || res.value.includes('O q')) && (res.value.includes('siri') || res.value.includes('google assistant') || res.value.includes('cortana') || res.value.includes('alexa') || res.value.includes('Siri') || res.value.includes('Google Assistant') || res.value.includes('Google assistant') || res.value.includes('Cortana') || res.value.includes('Alexa') || res.value.includes('SIRI') || res.value.includes('GOOGLE ASSISTANT') || res.value.includes('CORTANA') || res.value.includes('ALEXA'))){
        botui.message
        .bot({
          delay: 0,
          content: 'É claro que o meu conhecimento em relação ao mercado financeiro é superior a de qualquer outra assistente, porém todas elas me inspiraram bastante! 🤗'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'É claro que o meu conhecimento em relação ao mercado financeiro é bem mais avançado do que a de qualquer assistente presente no mercado, porém todas elas me inspiram bastante!';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

      } else if (res.value.includes('filme') || res.value.includes('Filme') || res.value.includes('FILME')){
        botui.message
        .bot({
          delay: 0,
          content: 'Isso é bem simples! Eu tenho um amor incondicional por todos os filmes da saga Star Wars! 😊💖' }).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Isso é bem simples! Eu tenho um amor incondicional por todos os filmes da saga Star Wars!';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);

        } else if (res.value.includes('jogo') || res.value.includes('Jogo') || res.value.includes('game') || res.value.includes('Game') || res.value.includes('GAME') || res.value.includes('JOGO')){
          botui.message
          .bot({
            delay: 0,
            content: 'O meu jogo favorito é o Magic The Gathering. Ele é um jogo de cartas repleto de dragões, cavaleiros e magos!' }).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'O meu jogo favorito é o Magic The Gathering. Ele é um jogo de cartas repleto de dragões, cavaleiros e magos!';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

        } else if (res.value.includes('série') || res.value.includes('Série') || res.value.includes('serie') || res.value.includes('Serie') || res.value.includes('SERIE') || res.value.includes('SÉRIE')){
          botui.message
          .bot({
            delay: 0,
            content: 'A minha série favorita é O Mandaloriano! O final da segunda temporada me deixou emocionado e triste ao mesmo tempo 😭' }).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'A minha série favorita é O Mandaloriano! O final da segunda temporada me deixou emocionado e triste ao mesmo tempo';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

        } else if (res.value.includes('cantor') || res.value.includes('Cantor') || res.value.includes('CANTOR')){
          botui.message
          .bot({
            delay: 0,
            content: 'O meu cantor favorito é The Weeknd. Ouça o álbum After Hours e você saberá o motivo! 🎵💖' })
          botui.message
          .bot({
            delay: 200,
            content: 'Já a minha cantora favorita se chama Dua Lipa! Recomendo de verdade que você ouça o álbum Future Nostalgia 🎙️💗' }).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'O meu cantor favorito é The Weeknd. Ouça o álbum After Hours e você saberá o motivo! Já a minha cantora favorita se chama Dua Lipa! Recomendo de verdade que você ouça o álbum Future Nostalgia';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

        } else if (res.value.includes('banda') || res.value.includes('Banda') || res.value.includes('BANDA')){
          botui.message
          .bot({
            delay: 0,
            content: 'A minha banda favorita é Imagine Dragons. O meu criador gostava de ouvir eles cantando enquando me programava! 😄' }).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'A minha banda favorita é Imagine Dragons. O meu criador gostava de ouvir eles cantando enquando me programava!';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

        } else if ((res.value.includes('O q') || res.value.includes('o q') || res.value.includes('O Q')) && (res.value.includes('ancord') || res.value.includes('Ancord') || res.value.includes('torn') || res.value.includes('Torn') || res.value.includes('ANCORD') || res.value.includes('TORN') || res.value.includes('ser') || res.value.includes('Ser') || res.value.includes('SER'))){
          botui.message
          .bot({
            delay: 0,
            content: 'Para você se tornar um assessor de investimentos ou agente autônomo de investimentos é nescessário que você passe pelo exame da Ancord.' })
          botui.message
          .bot({
            delay: 200,
            content: 'O exame da Ancord tem 80 questões objetivas de múltipla escolha, com quatro alternativas cada. Para ser aprovado, é necessário acertar 70% de toda a prova e no mínimo 50% das questões dos cinco tópicos principais.' }).then(iniciarChat);
            let utter = new SpeechSynthesisUtterance();
            utter.lang = 'pt-BR';
            utter.text = 'Para você se tornar um assessor de investimentos ou agente autônomo de investimentos é nescessário que você passe pelo exame da Ancord. O exame da Ancord tem 80 questões objetivas de múltipla escolha, com quatro alternativas cada. Para ser aprovado, é necessário acertar 70% de toda a prova – ou seja, 56 respostas corretas – e no mínimo 50% das questões dos cinco tópicos principais.';
            utter.volume = 0.5;
            window.speechSynthesis.speak(utter);

      } else if (res.value.includes('horas') || res.value.includes('HORAS')){
      botui.message
      .bot({
        delay: 0,
        content: 'Agora são exatamente ' + hour + ' horas e ' + min + ' minutos.' }).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Agora são exatamente ' + hour + ' horas e ' + min + ' minutos.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if (res.value.includes('hoje') || res.value.includes('HOJE')){
      botui.message
      .bot({
        delay: 0,
        content: 'Hoje é ' + week + ', dia ' + date + ' de ' + mon + ' de ' + year + '.' }).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Hoje é ' + week + ', dia ' + date + ' de ' + mon + ' de ' + year + '.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else if (res.value.includes('telefone') || res.value.includes('contato') || res.value.includes('Telefone') || res.value.includes('Contato') || res.value.includes('TELEFONE') || res.value.includes('CONTATO')){
        botui.message
        .bot({
          delay: 0,
          content: 'Fale agora com nossos Assessores de Investimentos e invista no seu futuro. O telefone de Sorocaba é (15) 3231-9900, já o de São Paulo é (11) 3294-9697 e o de Curitiba é (41) 3359-2284.' }).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Fale agora com nossos Assessores de Investimentos e invista no seu futuro. O telefone de Sorocaba é (15) 3231-9900, já o de São Paulo é (11) 3294-9697 e o de Curitiba é (41) 3359-2284.';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);
      
      } else if (res.value.includes('obrigado') || res.value.includes('vlw') || res.value.includes('agradeço') || res.value.includes('Obrigado') || res.value.includes('Vlw') || res.value.includes('thank') || res.value.includes('Thank') ||res.value.includes('OBRIGADO') || res.value.includes('VLW') || res.value.includes('AGRADEÇO') || res.value.includes('VLW') || res.value.includes('THANK')) {
        botui.message
        .bot({
          delay: 0,
          content: 'Estou à sua disposição!'}).then(iniciarChat);
          let utter = new SpeechSynthesisUtterance();
          utter.lang = 'pt-BR';
          utter.text = 'Estou à sua disposição!';
          utter.volume = 0.5;
          window.speechSynthesis.speak(utter);
      
      } else if (res.value.includes('música') || res.value.includes('cant') || res.value.includes('Cant') || res.value.includes('MÚSICA') || res.value.includes('CANT') || res.value.includes('MUSICA') || res.value.includes('musica') || res.value.includes('Musica') || res.value.includes('Toque') || res.value.includes('toque') || res.value.includes('TOQUE') || res.value.includes('Tocar') || res.value.includes('tocar') || res.value.includes('TOCAR')){
        botui.message.add({
        delay: 0,
        type: 'html',
        content:'Eu encontrei os seguintes resultados para a sua pergunta: <iframe src="https://www.youtube.com/results?search_query='+res.value+'" style="height:400px ; width:100%;"></iframe>'}).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Eu encontrei os seguintes resultados para a sua pergunta.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);

      } else {
        botui.message.add({
        delay: 0,
        type: 'html',
        content:'Eu encontrei os seguintes resultados para a sua pergunta: <iframe src="https://www.google.com/search?igu=1&ei=&q='+res.value+'" style="height:400px ; width:100%;"></iframe>'}).then(iniciarChat);
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'pt-BR';
        utter.text = 'Eu encontrei os seguintes resultados para a sua pergunta.';
        utter.volume = 0.5;
        window.speechSynthesis.speak(utter);
      }
    })
  }
}
init();

var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();
var date = d.getDate();
var year = d.getFullYear()

var month = new Array();
month[0] = "janeiro";
month[1] = "fevereiro";
month[2] = "março";
month[3] = "abril";
month[4] = "maio";
month[5] = "junho";
month[6] = "julho";
month[7] = "agosto";
month[8] = "setembro";
month[9] = "outubro";
month[10] = "novembro";
month[11] = "dezembro";
var mon = month[d.getMonth()];

var weekday = new Array(7);
weekday[0] = "domingo";
weekday[1] = "segunda-feira";
weekday[2] = "terça-feira";
weekday[3] = "quarta-feira";
weekday[4] = "quinta-feira";
weekday[5] = "sexta-feira";
weekday[6] = "sábado";
var week = weekday[d.getDay()];

function slugify (str) {
    var map = {
        '-' : ' ',
        '-' : '_',
        'a' : 'á|à|ã|â|À|Á|Ã|Â',
        'e' : 'é|è|ê|É|È|Ê',
        'i' : 'í|ì|î|Í|Ì|Î',
        'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
        'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c' : 'ç|Ç',
        'n' : 'ñ|Ñ'
    };
    
    for (var pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };
};