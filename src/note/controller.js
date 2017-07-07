
export default function noteController(e){
  const { number } = e.note

  switch (number) {
    case 36:
      return (
        console.log('trigger')
      )
  }

}