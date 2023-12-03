import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'


function heading() {
    return (
        <div className='max-w-3xl space-y-4 pt-40'>
            <h1 className='text-3xl md:text-5xl sm:text-6xl font-bold gap-8'>Your Ideas, Documents, & Plans. Unified. Welcome
                to <span className='underline'>Jotion</span>
            </h1>
            <h3 className='text-base sm:text-xl md:text-2xl'>
                Jotion is the connected workspace where <br></br>
                better, faster work happens.
            </h3>
            <Button>Enter Jotion
                <ArrowRight className='h-4 ww- ml-2'></ArrowRight>
            </Button>
        </div>
    )
}

export default heading