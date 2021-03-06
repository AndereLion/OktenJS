// - Є масив :
let courses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];
//
// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, створити окремий блок.
for (let course of courses) {
    let divWrapForCourse = document.createElement('div');
    document.body.appendChild(divWrapForCourse);
    for (let key in course) {
        let pCourseKey = document.createElement('p');
        if (key === 'modules') {
            pCourseKey.innerText = `${key}`;
            divWrapForCourse.appendChild(pCourseKey);
            let ulForModulesElements = document.createElement('ul');
            divWrapForCourse.appendChild(ulForModulesElements);
            for (let element of course.modules) {
                let liForModulesElement = document.createElement('li');
                liForModulesElement.innerText = liForModulesElement.innerText = `${element}`;
                ulForModulesElements.appendChild(liForModulesElement);

            }


        } else {
            pCourseKey.innerText = `${key} ${course[key]}`;

            divWrapForCourse.appendChild(pCourseKey);

        }
    }
}
// Для властивості modules зробити список в цьому ж  блоці (в якому знаходиться все)
