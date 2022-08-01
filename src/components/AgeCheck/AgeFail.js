import './AgeFail.css'
const Img = require('./agefail.png')

const AgeFail = () => {
  return (
    <div className='age-fail'>
      <img className='fail-img' src={Img} alt="Age Fail" />
    </div>
  )
}

export default AgeFail
