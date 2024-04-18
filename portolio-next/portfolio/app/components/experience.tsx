'use client'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Heading from './Section-heading';

function Experinence() {
  return (
    <section id='eperience' className='text-gray-800 flex items-center p-8 flex-col w-[100%]'>
      <Heading heading="My Experince"></Heading>
        <VerticalTimeline>
            <VerticalTimelineElement>
               <h1>Assistant System Engineer</h1> 
            </VerticalTimelineElement>
            <VerticalTimelineElement>
               <h1> System Engineer</h1> 
            </VerticalTimelineElement>
            <VerticalTimelineElement>
               <h1>Assistant System Engineer</h1> 
            </VerticalTimelineElement>
        </VerticalTimeline>
    </section>
  )
}

export default Experinence