import bg1 from '../static/images/luvtalklogo.png'
import bg2 from '../static/images/logo.svg'
import bg3 from '../static/images/mlbproject.png'

export default {
    projectInfo : [
		{
			className: 'luvtalk-project',
			h3: 'LUV TALK Website',
			p: 'Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.',
			link: 'http://facebook.com',
            background: bg1
		},
		{
			className: 'personal-website-project',
			h3: 'Personal Website',
			p: 'Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests.',
			link: '/portfolio',
            background: bg2
		},
		{
			className: 'strike-zone-project',
			h3: 'Strike Zone Analysis',
			p: 'Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game.',
			link: '/portfolio',
            background: bg3
		}
    ],
    about: {
        headline: 'Sharing a little bit of my story...',
        overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        stat1: 'Male, 200 years old.',
        stat2: 'Five feet 110 inches',
        stat3: 'Favorite fonts:Roboto ',
        stat4: 'Loves to learn new things',
    }
}