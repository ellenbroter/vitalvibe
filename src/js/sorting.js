export function sortCourses(courseList, criteria) {
	const courses = Array.from(courseList.children);
	courses.sort((a, b) => {
	  const aData = a.querySelector('.course-card').dataset;
	  const bData = b.querySelector('.course-card').dataset;
 
	  if (criteria === 'latest') {
		 return new Date(bData.date) - new Date(aData.date);
	  } else if (criteria === 'popular') {
		 return bData.popularity - aData.popularity;
	  }
	});
 
	courseList.innerHTML = '';
	courses.forEach(course => courseList.appendChild(course));
 }