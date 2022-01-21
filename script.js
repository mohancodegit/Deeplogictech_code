const api_url =
	"https://time.com";


async function getapi(url) {

	const response = await fetch(url);
	var data = await response.text();
	//console.log(data);
    const doc = new DOMParser().parseFromString(data, 'text/html');
    
    var latestStories = [];
    latestStories.push({'title': doc.querySelector("body > div.homepage-wrapper > section.homepage-module.latest > ol > li:nth-child(1) > article > div > h2").innerText,'link': doc.querySelector("body > div.homepage-wrapper > section.homepage-module.latest > ol > li:nth-child(1) > article > div > h2 > a").href})
	latestStories.push({'title': doc.querySelector("body > div.homepage-wrapper > section.homepage-module.latest > ol > li:nth-child(2) > article > div > h2").innerText,'link': doc.querySelector("body > div.homepage-wrapper > section.homepage-module.latest > ol > li:nth-child(2) > article > div > h2 > a").href})
	latestStories.push({'title': doc.querySelector("body > div.homepage-wrapper > section.homepage-module.latest > ol > li:nth-child(3) > article > div > h2").innerText,'link': doc.querySelector("body > div.homepage-wrapper > section.homepage-module.latest > ol > li:nth-child(3) > article > div > h2 > a").href})
	latestStories.push({'title': doc.querySelector("body > div.homepage-wrapper > section.homepage-module.latest > ol > li:nth-child(4) > article > div > h2").innerText,'link': doc.querySelector("body > div.homepage-wrapper > section.homepage-module.latest > ol > li:nth-child(4) > article > div > h2 > a").href})
	latestStories.push({'title': doc.querySelector("body > div.homepage-wrapper > section.homepage-module.latest > ol > li:nth-child(5) > article > div > h2").innerText,'link': doc.querySelector("body > div.homepage-wrapper > section.homepage-module.latest > ol > li:nth-child(5) > article > div > h2 > a").href})

    console.log(latestStories);
	
	show(latestStories);

}

getapi(api_url);

function show(data) {
        history.replaceState({}, '','/getTimeNews');      
        document.getElementById("News").innerHTML = JSON.stringify(data, undefined, 2);
    }




