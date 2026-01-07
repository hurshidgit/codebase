import Image from 'next/image'
import CourseList from './_components/CourseList'

function Courses() {
	return (
		<div>
			<div className='relative'>
				<Image
					src={'/course-banner.gif'}
					alt='courses-banner'
					width={1200}
					height={300}
					className='w-full h-75 object-cover'
				/>
				<div
					className='absolute top-0 h-full pt-24 px-10 md:px-24 lg:px-36 bg-linear-to-r from-black/80
				to-white-50/50'
				>
					<h2 className='text-6xl font-game'>Explore All Courses</h2>
					<p className='font-game text-3xl'>
						Explore all courses and enrolled to learn and increase you skill.
					</p>
				</div>
			</div>
			<div className='mt-8 md:px-24 lg:px-36'>
				<h2 className='font-game text-4xl'>All Couses</h2>
				<CourseList />
			</div>
		</div>
	)
}

export default Courses
