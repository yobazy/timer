const args = process.argv.splice(2)


for (let time of args)  {
  if (typeof time != 'undefined' && time >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time*1000)
  }
}