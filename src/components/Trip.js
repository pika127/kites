import './Trip.css'
import TripData from './TripData'
import TripImg from '../assets/trip1.jpg';
import TripImg2 from '../assets/trip2.jpg';
import TripImg3 from '../assets/trip3.jpg';


function Trip(){
  return(
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className='tripcard'>
      <TripData
        image={TripImg}
        heading = "Trip in Fayoum"
        text = "التزحلق علي الرمال في وادي الريان من اكثر التجارب إثارة بإمكانك تجربتها معنا"
        />
        <TripData
        image={TripImg2}
        heading = "Trip in Fayoum"
        text = "بإمكانك تقضية وقت ممتع بالكامب  فاير و الاسترخاء في الخيم مع الجو الهادئ مع المناظر الطبيعية من حولك"

        />
        <TripData
        image={TripImg3}
        heading = "Trip in Fayoum"
        text = "السفاري بالسيارة ايضا من التجارب المشوقة التي بإمكانها ان تزيد من الادرينالين بداخلك للمتعة"

        />
      </div>
    </div>
  )
}

export default Trip;