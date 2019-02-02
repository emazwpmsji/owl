export default () => (
  <div className="wrapper">
    <div className="owl">
      <div className="owl__head">
        <div className="owl__eye" />
        <div className="owl__eye owl__eye_right" />
        <div className="owl__nose" />
        <div className="owl__ear" />
        <div className="owl__ear owl__ear_right" />
      </div>
      <div className="owl__body">
        <div className="owl__hand" />
        <div className="owl__hand owl__hand_right" />
        <div className="owl__tummy" />
        <div className="owl__buttons" />
        {new Array(6).fill(null).map((_, id) => (
          <span className="owl__finger" key={id} />
        ))}
      </div>
    </div>
    <style jsx>{`
      .owl {
        width: max-content;
        margin: 0 auto;
      }
      @keyframes swinging {
        0% { left: -30px; bottom: -10px; }
        25% { left: 0; bottom: 0; }
        50% { left: 30px; bottom: -10px; }
        75% { left: 0; bottom: 0; }
        100% { left: -30px; bottom: -10px; }
      }
      .owl__head {
        position: relative;
        background-color: #aad3fd;
        width: 359px;
        height: 259px;
        border-radius: 50%;
        margin-top: 60px;
        margin-bottom: -245px;
        z-index: 1;
        animation: swinging 2s infinite;
      }
      .owl__eye {
        position: absolute;
        background-color: #fff;
        border: 6px solid #000;
        border-radius: 50%;
        width: 148px;
        height: 148px;
        top: 52px;
        left: 28px;
      }
      .owl__eye::before, .owl__eye::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        transition: all 0.5s;
      }
      .owl__eye::before {
        background-color: #000;
        width: 85px;
        height: 87px;
        top: 32px;
        left: 37px;
      }
      .owl__eye::after {
        background-color: #fff;
        width: 20px;
        height: 23px;
        top: 61px;
        left: 71px;
      }
      .owl__eye_right {
        left: unset;
        right: 24px;
        transition: all 0.5s;
        overflow: hidden;
      }
      .owl:hover .owl__eye_right {
        height: 30px;
        top: 120px;
      }
      .owl:hover .owl__eye_right::before {
        top: -33px;
      }
      .owl:hover .owl__eye_right::after {
        top: 3px;
      }
      .owl__eye_right::before {
        top: 29px;
        left: 30px;
      }
      .owl__eye_right::after {
        top: 58px;
        left: 70px;
      }
      .owl__nose::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: 159px;
        left: 137px;
        border-left: 46px solid transparent;
        border-right: 38px solid transparent;
        border-bottom: 30px solid #fdf5a9;
        transform: rotate(-6deg);
      }
      .owl__nose::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: 188px;
        left: 141px;
        border-left: 45px solid transparent;
        border-right: 39px solid transparent;
        border-top: 61px solid #fdf5a9;
        transform: rotate(-6deg);
      }
      .owl__ear {
        position: absolute;
        width: 0;
        height: 0;
        top: 29px;
        left: 19px;
        border-left: 19px solid transparent;
        border-right: 39px solid transparent;
        border-top: 63px solid #a8d5fd;
      }
      .owl__ear_right {
        top: 28px;
        left: unset;
        right: 0px;
        border-left: 55px solid transparent;
        border-right: 19px solid transparent;
      }
      .owl__ear::before, .owl__ear::after {
        content: '';
        position: absolute;
      }
      .owl__ear::before {
        width: 0;
        height: 0;
        top: -153px;
        left: -19px;
        border-left: 8px solid transparent;
        border-right: 65px solid transparent;
        border-bottom: 91px solid #a8d5fd;
      }
      .owl__ear_right::before {
        left: -54px;
        border-left: 60px solid transparent;
        border-right: 13px solid transparent;
      }
      .owl__ear::after {
        top: -76px;
        left: 10px;
        width: 7px;
        height: 16px;
        background-color: #fdf5a9;
      }
      .owl__ear_right::after {
        top: -77px;
        left: -15px;
        width: 9px;
        height: 20px;
      }


      .owl__body {
        position: relative;
        width: 344px;
        height: 484px;
        background-color: #7ab8f5;
        border-radius: 50%;
        margin-left: 11px;
      }
      .owl__hand {
        position: absolute;
        background-color: #aad3fd;
        width: 170px;
        height: 280px;
        border-radius: 50%;
        top: 164px;
        left: -27px;
        transform: rotate(19deg);
      }
      .owl__hand_right {
        transform: rotate(-19deg);
        left: unset;
        right: -27px;
        width: 154px;
      }
      .owl__tummy {
        position: absolute;
        top: 32px;
        left: 23px;
        width: 301px;
        height: 424px;
        background-color: #499bed;
        border-radius: 50%;
      }
      .owl__finger {
        position: absolute;
        background-color: #512e0e;
        border-radius: 50%;
      }
      .owl__finger:nth-of-type(1) {
        bottom: -30px;
        left: 88px;
        width: 22px;
        height: 52px;
      }
      .owl__finger:nth-of-type(2) {
        bottom: -30px;
        left: 100px;
        width: 23px;
        height: 50px;
      }
      .owl__finger:nth-of-type(3) {
        bottom: -32px;
        left: 114px;
        width: 22px;
        height: 50px;
        transform: rotate(-2deg);
      }
      .owl__finger:nth-of-type(4) {
        bottom: -36px;
        right: 117px;
        width: 22px;
        height: 50px;
        transform: rotate(7deg);
      }
      .owl__finger:nth-of-type(5) {
        bottom: -33px;
        right: 100px;
        width: 22px;
        height: 50px;
      }
      .owl__finger:nth-of-type(6) {
        bottom: -30px;
        right: 91px;
        width: 22px;
        height: 50px;
        transform: rotate(-6deg);
      }
      .owl__buttons {
        position: absolute;
        background-color: #f4f6b3;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        top: 294px;
        left: 49px;
        box-shadow: 67px -3px 0px 0px #f4f6b3, 
                    134px 0px 0px 0px #f4f6b3, 
                    204px 3px 0px 0px #f4f6b3, 
                    64px 63px 0px 0px #f4f6b3, 
                    140px 63px 0px 0px #f4f6b3;
      }
    `}</style>
  </div>
)
