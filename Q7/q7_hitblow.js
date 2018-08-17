'use strict'
// 課題７：hit & blow
//  ランダムに用意された4桁の数字を当てる
//  正解の数字は0-9、同じ数字は重複しない4桁
//  入力された4桁の数字の回答と正解を比べて、
//  ・数字と桁位置の両方が同じ：Hit
//  ・数字だけが同じで桁位置が異なる：Blow

let counter = 0
const answer = makeDigitNumber(4)
let userAnswer
let outputMessage = '4桁の数字を当ててみて。'
while (true) {
  userAnswer = setMessageInput(outputMessage)
  const result = checkAnswer(answer, userAnswer)
  outputMessage = `${result.hit}hit, ${result.blow}blow`
  if (result.hit === 4) {
    break
  }
}

window.prompt(outputMessage + `・・・正解！${counter}回目で当てました！`)

function generateRandomNumber(first, last) {
  return first + Math.floor((last - first + 1) * Math.random())
}

function makeDigitNumber(n) {
  const resultArr = []
  const digits = Array.apply(null, new Array(10)).map((v, i) => i)
  for (let i = 0; i < n; i++) {
    const indexNumber = generateRandomNumber(0, digits.length - 1)
    const getNumber = digits.splice(indexNumber, 1)
    resultArr.push(getNumber[0])
  }

  return resultArr
}

function checkAnswer(answer, user) {
  const checkResult = {}
  checkResult.hit = 0
  checkResult.blow = 0

  for (let i = 0; i < answer.length; i++) {
    const val = answer[i]
    const index = user.indexOf(val)
    if (index === i) {
      checkResult.hit += 1
    } else if (index !== -1) {
      checkResult.blow += 1
    }
  }

  return checkResult
}

function setMessageInput(message) {
  const userInput = window.prompt(message, '答えを入力してね')
  let inputs = userInput.split('')
  inputs = inputs.map(c => Number(c))
  if (inputs.length !== 4) {
    window.prompt('4桁の数字を入力してください。')
    return
  }

  counter++
  return inputs
}
