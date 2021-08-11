// 25- Count the total number of notes in a given amount.(Amount provided by user)(Currency
// available- 1,2,5,10,50,100,200,500,2000)

const totalAmount = (total) => {
  console.log('Total Amount is : ' + total)
  let note1 = 1
  let note2 = 2
  let note5 = 5
  let note10 = 10
  let note50 = 50
  let note100 = 100
  let note200 = 200
  let note500 = 500
  let note2000 = 2000

  let ui = {
    ui1: '',
    ui2: '',
    ui5: '',
    ui10: '',
    ui50: '',
    ui100: '',
    ui200: '',
    ui500: '',
    ui2000: '',
  }

  ui.ui1 = 50
  console.log('ui1 :' + ui.ui1)
  ui.ui2 = 25
  ui.ui5 = 10
  ui.ui10 = 100
  ui.ui50 = 1
  ui.ui100 = 8
  ui.ui200 = 11
  ui.ui500 = 2
  ui.ui2000 = 5

  totalAmount = 0
  if (ui.ui1 !== '') {
    total = total + ui.ui1 * note1
    console.log(total)
  } else if (ui.ui2 !== '') {
    total = total + ui.ui2 * note2
    console.log(total)
  } else if (ui.ui5 !== '') {
    total = total + ui.ui5 * note5
    console.log(total)
  } else if (ui.ui10 !== '') {
    total = total + ui.ui10 * note10
    console.log(total)
  } else if (ui.ui50 !== '') {
    total = total + ui.ui50 * note50
    console.log(total)
  } else if (ui.ui100 !== '') {
    total = total + ui.ui100 * note100
    console.log(total)
  } else if (ui.ui200 !== '') {
    total = total + ui.ui200 * note200
    console.log(total)
  } else if (ui.ui500 !== '') {
    total = total + ui.ui500 * note500
    console.log(total)
  } else if (ui.ui2000 !== '') {
    total = total + ui.ui2000 * note2000
    console.log(total)
  }
}

totalAmount(25510)
