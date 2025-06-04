import "./Page1.css"
import myphoto from "../../assets/5fa931fb-32fb-421a-8545-d606bb2c2fcc_removalai_preview.png"
const Page1 = () => {
  return (
    <div className='page'>
      <div className="left">
        <div className="ism">

          <h1>M</h1>
          <h1>U</h1>
          <h1>H</h1>
          <h1>A</h1>
          <h1>M</h1>
          <h1>M</h1>
          <h1>A</h1>
          <h1>D</h1>
          <h1>A</h1>
          <h1>M</h1>
          <h1>I</h1>
          <h1>N</h1>
        </div>
        <div className="technology">
          <div className="box">HTML</div>
          <div className="box">CSS</div>
          <div className="box">JavaScript</div>
          <div className="box">React</div>
          <div className="box">Vue</div>
          </div>
      </div>
      <div className="image">
<img src={myphoto} alt="" />
      </div>
    </div>
  )
}

export default Page1
